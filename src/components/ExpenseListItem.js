import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      Description:{description} : {id}
    </h3>
    <p>
      Amount: {amount} - CreatedAt : {createdAt}
    </p>
    <Link to={`/edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;
