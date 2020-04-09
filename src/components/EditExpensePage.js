import React from "react";

const EditExpensePage = (props) => {
  console.log("props", props);
  return <div> this my EditExpensePage id -{props.match.params.id}</div>;
};

export default EditExpensePage;
