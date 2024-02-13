import LoginStatus from "./LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { count } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
