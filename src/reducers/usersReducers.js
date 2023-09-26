const userState = [];

const usersReducers = (state = userState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD__USER":
      return [...state, action.user];
    case "PUSH__STORE":
      return action.users;
    case "ADD__LOAN":
      console.log("okey");
      console.log(state, "state");

      let updatedUser = state.find((user) => {
        console.log(user, "user");
        console.log(action, "action");
        console.log(action.loan, "action.loan");
        return user.id === action.loan.idUser;
      });

      console.log(updatedUser, "update");

      updatedUser["loan"] = action.loan;
      return [...state, updatedUser];

    default:
      return state;
  }
};

export default usersReducers;
