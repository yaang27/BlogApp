import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <div>
      <Link
        to='/'
        className={`text-3xl text-purple-500${type ? " text-5xl font-bold" : ""}`}
      >
        Blog
        <span
          className={`text-2xl font-semibold dark:text-white${type ? " text-white  text-4xl" : ""}`}
        >
          Nest
        </span>
      </Link>
    </div>
  );
};

export default Logo;
