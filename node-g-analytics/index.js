const express = require("express");
const app = express();
require("dotenv").config();

const { google } = require("googleapis");

const scopes = "https://www.googleapis.com/auth/analytics.readonly";

const jwt = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes
);
const view_id = "293213122";

async function getViews() {
  try {
    await jwt.authorize();

    const response = await google.analytics("v3").data.ga.get({
      auth: jwt,
      ids: "ga:" + view_id,
      "start-date": "30daysAgo",
      "end-date": "today",
      metrics: "ga:pageviews",
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
async function getTopPosts() {
  try {
    await jwt.authorize();

    const response = await google.analytics("v3").data.ga.get({
      auth: jwt,
      ids: "ga:" + view_id,
      "start-date": "2019-01-01",
      "end-date": "today",
      dimensions: "ga:pagePath,ga:pageTitle",
      metrics: "ga:pageviews",
      sort: "-ga:pageviews",
      "max-results": "10",
      filters: "ga:medium==organic",
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

getViews();

getTopPosts();

app.listen(3000, () => console.log(`listening on port 3000`));
