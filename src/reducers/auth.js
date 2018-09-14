export default (state = { auth: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { auth: true };
    case "LOGOUT":
      return { auth: false };
    default:
      return state;
  }
};
