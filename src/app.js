import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas Bill" }));
store.dispatch(setTextFilter("gas"));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
ReactDOM.render(<AppRouter />, document.getElementById("app"));
