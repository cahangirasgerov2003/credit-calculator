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

// Action Creater
export const pushStore = (users) => {
  return {
    type: "PUSH__STORE",
    users,
  };
};

export const pullDb = () => {
  return async (dispatch) => {
    const allUsers = [];

    const snapshot = await database.ref("users").once("value");

    snapshot.forEach((user) => {
      allUsers.push({
        id: user.key,
        ...user.val(),
      });
    });

    dispatch(pushStore(allUsers));
  };
};
