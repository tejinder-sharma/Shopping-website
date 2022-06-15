import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assests/logo.svg";
import { ReactComponent as Cart } from "../../assests/cart.svg";
import { ReactComponent as Menu } from "../../assests/menu.svg";

const Navigation = () => {
  return (
    <>
      
            <nav className="bg-white shadow dark:bg-gray-800 fixed w-full z-10">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to='/'>
                                <Logo /> 
                            </Link>
                        </div>
                        
                        <div className="flex md:hidden">
                            <button type="button" className={`text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400`} aria-label="toggle menu">
                                <Menu />
                                
                            </button>
                        </div>
                    </div>
                    <div className="items-center md:flex">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to='/'>Home</Link>
                            <Link className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to='/shop'>Shop</Link>
                            <Link className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to='/'>Contact</Link>
                            <Link className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to='/shop'>About</Link>
                        </div>

                        <div className="flex justify-center md:block">
                            <Link className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" to='/'>
                                <Cart />

                                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
