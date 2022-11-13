import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;
