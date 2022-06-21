import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Cart } from "../../assests/cart.svg";
import { ReactComponent as Menu } from "../../assests/menu.svg";
import { ReactComponent as Dropdown } from "../../assests/dropbtn.svg";
import { ReactComponent as Rightbtn } from "../../assests/rightbtn.svg";

const Navigation = () => {
  return (
    <>
      <nav className="fixed w-full top-0 z-10">
        <div className="navbar bg-base-100 container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <Menu />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to='/shop'>
                    Women
                  </Link>
                </li>
                <li tabIndex="0">
                  <button className="justify-between">
                    Kids / Children
                    <Rightbtn />
                  </button>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link to='/'>
                        Kids
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop'>Children</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/'>Men</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>
                shopClue
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to='/shop'>Women</Link>
              </li>
              <li tabIndex="0">
                <button>
                  Kids / Children
                  <Dropdown />
                 
                </button>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to='/'>Kids</Link>
                  </li>
                  <li>
                    <Link to='/auth'>Children</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/'>Man</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex-none flex items-center justify-center">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <Cart />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex="0"
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="profile-pic" src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </button>
                  </li>
                  <li>
                    <Link to='/'>Settings</Link>
                  </li>
                  <li>
                    <Link to='/auth'>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
