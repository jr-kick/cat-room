import { useDispatch } from "react-redux";
import { logout } from "../redux/user";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  return (
    <div>
      <button onClick={() => dispatch(logout())}>Log Out</button>
      <div>
        <img src={user.value.avatar} alt="" />
        <h3>{user.value.name}</h3>
      </div>
    </div>
  );
};
 
export default Home;