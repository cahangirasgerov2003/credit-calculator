import database from "../firebase/configFirebase";

// Actions Creater
export const addUser = (user) => {
  return {
    type: "ADD__USER",
    user,
  };
};

export const addUserToDb = (newUser = {}) => {
  return (dispatch) => {
    const {
      userName,
      surName,
      cardNO,
      personalNO,
      acctualAddress,
      registrAddress,
      birthDay,
      phone,
      password,
      verifyPassword,
    } = newUser;
    database
      .ref("users")
      .push({
        userName,
        surName,
        cardNO,
        personalNO,
        acctualAddress,
        registrAddress,
        birthDay,
        phone,
        password,
        verifyPassword,
      })
      .then((response) => {
        dispatch(
          addUser({
            id: response.key,
            ...newUser,
          })
        );
      });
  };
};
