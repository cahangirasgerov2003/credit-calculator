const loginReducers = (state = false, action) => {
  switch (action.type) {
    case "LOGINED":
      return action.position;
    default:
      return state;
  }
};

export default loginReducers;
