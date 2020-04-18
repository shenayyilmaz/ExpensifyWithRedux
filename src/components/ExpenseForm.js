import React from "react";
import { connect } from "react-redux";
import addExpense from "../actions/expenses";
import momonet from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = momonet();
console.log("moment", now.format("MMM Do YYYY"));

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: momonet(),
    calendarFocused: false,
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmitHandeler = (e) => {
    e.preventDefault();
    console.log("submiiit");
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    console.log("test");
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  render() {
    return (
      <div>
        <h1> ExpenseForm </h1>
        <forum>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.value}
            onChange={(e) => this.onAmountChange(e)}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <textarea
            placeholder="Add a note for your expense"
            onChange={this.onNoteChange}
            value={this.state.none}
          ></textarea>
          <button>Add Expense</button>
        </forum>
      </div>
    );
  }
}

export default ExpenseForm;
