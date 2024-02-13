export const transactionReducer = (state, { payload, type }) => {
  switch (type) {
    case "INCOME":
      return {
        ...state,
        income: payload,
      };

    case "EXPENSE":
      return {
        ...state,
        expense: payload,
      };

    default:
      return state;
  }
};
