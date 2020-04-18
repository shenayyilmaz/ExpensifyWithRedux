import { createStore, combineReducers } from "redux";

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("sonuc", visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "Coffe", amount: 300, createdAt: 2000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 4000 }));

// store.dispatch(setTextFilter("rent"));

// store.dispatch(setTextFilter());

// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

//console.log("expenseOne", expenseOne.expenses.id);

//store.dispatch(setStartDate(-1250));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(-3000));

store.dispatch(sortByAmount());
store.dispatch(setTextFilter("e"));
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
