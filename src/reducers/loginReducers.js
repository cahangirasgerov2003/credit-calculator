const firstState = {
  foundUser: null,
  position: false,
};
const loginReducers = (state = firstState, action) => {
  console.log("logoutState", state);
  switch (action.type) {
    case "LOGINED":
      return action.findUser;
    case "LOGOUT":
      console.log(state, "logout");
      return {
        foundUser: null,
        position: false,
      };
    default:
      return state;
  }
};

export default loginReducers;
