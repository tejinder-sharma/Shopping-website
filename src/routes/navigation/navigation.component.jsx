import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Menu } from "../../assests/menu.svg";
import { ReactComponent as Dropdown } from "../../assests/dropbtn.svg";
import { ReactComponent as Rightbtn } from "../../assests/rightbtn.svg";

import CartIcon from "../../Components/cart-icon/cart-icon.component";

import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../context/user.context";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const {isCartOpen} = useContext(CartContext)
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
                  <Link to="/shop">Women</Link>
                </li>
                <li tabIndex="0">
                  <button className="justify-between">
                    Kids / Children
                    <Rightbtn />
                  </button>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link to="/">Kids</Link>
                    </li>
                    <li>
                      <Link to="/shop">Children</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Men</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl" to="/">
              shopClue
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/shop">Women</Link>
              </li>
              <li tabIndex="0">
                <button>
                  Kids / Children
                  <Dropdown />
                </button>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to="/">Kids</Link>
                  </li>
                  <li>
                    <Link to="/auth">Children</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">Man</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex-none flex items-center justify-center">
              <div className="relative">
                <CartIcon />
                {isCartOpen && <CartDropdown/>}
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="profile-pic"
                      src="https://api.lorem.space/image/face?hash=33791"
                    />
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
                    <Link to="/">Settings</Link>
                  </li>
                  {currentUser ? (
                    <li>
                      <span onClick={signOutUser}>Logout</span>
                    </li>
                  ) : (
                    <li>
                      <Link to="/auth">SignIn</Link>
                    </li>
                  )}
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
