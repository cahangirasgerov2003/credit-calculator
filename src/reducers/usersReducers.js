const userState = [];

const usersReducers = (state = userState, action) => {
  switch (action.type) {
    case "ADD__USER":
      return [...state, action.user];
    case "PUSH__STORE":
      return action.users;
    default:
      return state;
  }
};

export default usersReducers;
