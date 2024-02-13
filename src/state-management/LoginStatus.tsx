import useUserStore from "./user/store";

const LoginStatus = () => {
  const { email, set, reset } = useUserStore();

  if (email)
    return (
      <>
        <div>
          <span className="mx-2">{email}</span>
          <a onClick={() => reset()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => set("kris060601@gmail.com")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
