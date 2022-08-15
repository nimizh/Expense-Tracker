const contextReducer = (state, action) => {
  let transactions;
  // contextreducer takes two arguments one is old state and second is action to change it into new state. it is similar to useState
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);

      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];

      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};
export default contextReducer;
