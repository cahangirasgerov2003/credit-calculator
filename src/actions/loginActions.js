// Actions Creater
export const login = (findUser) => {
  return {
    type: "LOGINED",
    findUser,
  };
};
