const express = require("express");
const app = express();
const axios = require("axios");

const payload = {
  client_id: "1431843420.1689140953",
  non_personalized_ads: false,
  events: [
    {
      name: "search",
      params: {
        search_term: "from node application",
        session_id: 1689140953,
        debug_mode: 1,
      },
    },
  ],
};

try {
  axios({
    method: "post",
    url: "https://www.google-analytics.com/mp/collect?api_secret=hMkefMctTQqNF0JhzWRqqQ&measurement_id=G-MG0E50QD47",
    data: payload,
  });
} catch (error) {
  console.error(error);
}

app.listen(3000, () => {
  console.log(`listening on port 3000`);
  console.log(`http://localhost:3000`);
});
