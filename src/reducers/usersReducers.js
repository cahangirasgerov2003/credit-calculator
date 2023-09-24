const userState = [];

const usersReducers = (state = userState, action) => {
  switch (action.type) {
    case "ADD__USER":
      return [...state, action.user];
    default:
      return state;
  }
};

export default usersReducers;
