import { Link } from "react-router-dom";
import Props from "./Props";

const Home = () => {
  return (
    <Link to="/form">
      <Props bgColor="red" />
    </Link>
  );
};
export default Home;
