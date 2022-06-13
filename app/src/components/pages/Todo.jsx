import React from "react";

const Todo = (props) => (
  <div>
    <h2>PostDetail</h2>
    <p>{`history: ${JSON.stringify(props.history, null, "\t")}`}</p>
    <p>{`location: ${JSON.stringify(props.location, null, "\t")}`}</p>
    <p>{`match: ${JSON.stringify(props.match, null, "\t")}`}</p>
  </div>
);

export default Todo;
