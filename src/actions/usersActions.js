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

// Actions Creater
export const addLoan = (loan) => {
  return {
    type: "ADD__LOAN",
    loan,
  };
};

export const addLoanToDb = (newLoan = {}, id) => {
  return (dispatch) => {
    const {
      activitySector,
      monthlyIncome,
      workExperience,
      region,
      businessAddress,
      loanAmount,
    } = newLoan;
    database
      .ref(`users/${id}/loan`)
      .set({
        activitySector,
        monthlyIncome,
        workExperience,
        region,
        businessAddress,
        loanAmount,
      })
      .then(() => {
        dispatch(
          addLoan({
            // id: response.key,
            ...newLoan,
            idUser: id,
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

// Actions Creater
export const logoutUser = (removeID) => {
  // console.log("RemoveIDDDDDDDDDDD", removeID);
  return {
    type: "LOGOUT__USER",
    removeID,
  };
};

export const logoutUserToDb = (removeID) => {
  const removeRef = database.ref(`users/${removeID}`);
  // console.log("RemoveIDDDDDDDDDDD", removeID);

  return async (dispatch) => {
    await removeRef.remove();
    dispatch(logoutUser(removeID));
  };
};
