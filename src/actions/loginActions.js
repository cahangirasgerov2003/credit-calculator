// Actions Creater
export const login = (findUser) => {
  return {
    type: "LOGINED",
    findUser,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT__USER",
  };
};
