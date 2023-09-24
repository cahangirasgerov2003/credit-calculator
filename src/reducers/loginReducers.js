const firstState = {
  foundUser: null,
  position: false,
};
const loginReducers = (state = firstState, action) => {
  switch (action.type) {
    case "LOGINED":
      return action.findUser;
    default:
      return state;
  }
};

export default loginReducers;
