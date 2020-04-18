// ADD_EXPENSE ACTION GENERATORS
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: Math.floor(Math.random() * 999999),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE ACTION GENERATORS
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE ACTION GENERATORS
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});
