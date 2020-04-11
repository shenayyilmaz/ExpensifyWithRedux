import { createStore, combineReducers } from "redux";

//Expenses Reducer

const expensesReducerDefault = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducerDefault = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    expenses: expensesReducerDefault,
    filters: filtersReducerDefault,
  })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "sdfgh",
      description: "January Rent",
      note: "this was the final paymet",
      amount: 55000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
