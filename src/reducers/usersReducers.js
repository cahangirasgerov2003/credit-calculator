const userState = [];

const usersReducers = (state = userState, action) => {
  console.log(state, "state");
  switch (action.type) {
    case "ADD__USER":
      return [...state, action.user];
    case "PUSH__STORE":
      return action.users;
    case "ADD__LOAN":
      let updatedUser = state.find((user) => {
        return user.id === action.loan.idUser;
      });

      updatedUser["loan"] = action.loan;
      return [...state, updatedUser];

    case "LOGOUT__USER":
      let newState = state.filter((user) => {
        console.log(user, "user");
        console.log(user.id, "user.id");
        console.log(action.removeID, "action.removeID");
        return user.id !== action.removeID;
      });

      return [newState];
    default:
      return state;
  }
};

export default usersReducers;
