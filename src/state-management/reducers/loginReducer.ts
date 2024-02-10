interface ResetUser {
  type: "RESET";
}

interface SetUser {
  type: "SET";
  userEmail: string;
}
type UserAction = ResetUser | SetUser;

function loginReducer(user: string, action: UserAction) {
  switch (action.type) {
    case "RESET":
      return (user = "");
    case "SET":
      return (user = action.userEmail);
    default:
      return user;
  }
}

export default loginReducer;
