import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE ACTION GENERATORS
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: store.getState().expenses.length + 1,
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE ACTION GENERATORS
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE ACTION GENERATORS
const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});

// SET_TEXT_FILTER ACTION GENERATORS
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_DATE ACTION GENERATORS
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT ACTION GENERATORS
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SET_START_DATE ACTION GENERATOR
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE ACTION GENERATOR
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducerDefault = (
  state = expensesReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update,
          };
        } else {
          return expense;
        }
      });
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
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
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

store.subscribe(() => {
  console.log(store.getState());
});

// const expenseOne = store.dispatch(
//   addExpense({ description: "Rent", amount: 100 })
// );

// const expenseTwo = store.dispatch(
//   addExpense({ description: "Coffe", amount: 300 })
// );

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 4000 }));

// store.dispatch(setTextFilter("rent"));

// store.dispatch(setTextFilter());

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

//console.log("expenseOne", expenseOne.expenses.id);

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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

const users = {
  name: "shenay",
  age: 23,
};

//console.log({ ...users, lacation: "london", age: 40 });
