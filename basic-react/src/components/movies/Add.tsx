import React from "react";

const Add = (props: {}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("hello");
  };

  return (
    <div>
      <form>
        <label>Id</label> <br />
        <input type="text" name="id" /> <br />
        <label>Language</label> <br />
        <input type="text" name="original_language" /> <br />
        <label>Title</label> <br />
        <input type="text" name="title" /> <br />
        <label>Ratings</label> <br />
        <input type="text" name="vote_average" /> <br />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};
export default Add;
