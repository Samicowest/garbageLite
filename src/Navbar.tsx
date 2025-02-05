import { useEffect, useRef } from "react";
import Logo from "./assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/AuthContext";
import defaultImage from "./assets/default.png";
import userImage from "./assets/person1.png";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();
  const isAct = (path: string) => location.pathname === path;

  const { user, logout } = useUserAuth();

  // const handleLogin = async () => {
  //   try {
  //     await login("user@example.com", "password");
  //     alert("Login successful");
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //     alert("Error logging in");
  //   }
  // };

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logout successful");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out");
    }
  };

  const handleButtonClick = () => {
    navigate("/hubsearch");
    toggleNavbar();
  };

  const toggleNavbar = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("hidden");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      navbarRef.current.classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hidden fixed z-[99999] bg-white top-0 left-0 w-full lg:flex justify-between items-center px-16 py-3">
        <div className="overflow-hidden w-[200px] h-auto">
          <img className="object-cover w-full h-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center gap-4">
          {isAct("/") ? (
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 "
            >
              Home
            </Link>
          ) : (
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 ${
                  isActive ? "before:w-[60%]" : ""
                }`
              }
            >
              Home
            </NavLink>
          )}

          <Link
            to="aboutus"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 "
          >
            About Us
          </Link>
          {isAct("/why") ? (
            <NavLink
              to="/why"
              className={({ isActive }) =>
                `relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 ${
                  isActive ? "before:w-[60%]" : ""
                }`
              }
            >
              Why us
            </NavLink>
          ) : (
            <Link
              to="whyus"
              smooth={true}
              duration={500}
              className="relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 "
            >
              Why us
            </Link>
          )}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 "
          >
            Contact
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={500}
            className="relative py-2 px-4  before:absolute text-sm lg:text-md xl:text-lg cursor-pointer before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[0%] transition-all duration-200 hover:before:w-[60%] before:h-[2px] before:bg-green-600 "
          >
            FAQ
          </Link>
        </div>
        <div className="flex justify-between items-center gap-8">
          <button
            onClick={handleButtonClick}
            className="text-gray-700 hover:text-white border border-blue-50 px-4 py-2 rounded-lg hover:bg-primary transition"
          >
            Recycling Hub
          </button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-primary text-white text-center px-4 py-2 rounded-md cursor-pointer"
              >
                Web App
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <div className="font-bold text-2xl text-red-400">
                    WebApp Under Construction, it will be available soon!!!
                  </div>
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Ok</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="relative inline-block text-left">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full w-10 h-10 border-none hover:border-none overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={user ? userImage : defaultImage}
                  alt="User Avatar"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute right-[-30px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {user ? (
                  <>
                    <DropdownMenuItem>
                      {user.displayName || `${user.firstName} ${user.lastName}`}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <div className="fixed z-[99999] bg-white top-0 left-0 w-full lg:hidden">
        <div className="relative justify-between items-center px-2 sm:px-8 py-3 flex">
          <div className="overflow-hidden w-[200px] h-auto">
            <img className="object-cover w-full h-full" src={Logo} alt="logo" />
          </div>
          <div
            className="hidden absolute top-[100%] bg-white left-0 right-0 px-2 sm:px-8 py-3 transition-navbar"
            ref={navbarRef}
          >
            <div className="flex flex-col">
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 w-full cursor-pointer hover:bg-slate-200"
              >
                About Us
              </Link>
              <Link
                to="whyus"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 w-full cursor-pointer hover:bg-slate-200"
              >
                Why Us
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 w-full cursor-pointer hover:bg-slate-200"
              >
                Contact
              </Link>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="relative py-2 px-4 w-full cursor-pointer hover:bg-slate-200"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleButtonClick}
                className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Recycling Hub
              </button>
              {/* <div className="">
                Web App
              </div> */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-primary text-white text-center px-4 py-2 rounded-md cursor-pointer"
                  >
                    Web App
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <div className="font-bold text-2xl text-red-400">
                        WebApp Under Construction, it will be available soon!!!
                      </div>
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    <AlertDialogAction>Ok</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="relative  flex items-center gap-4 text-left">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full w-10 h-10 border-none hover:border-none overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={user ? userImage : defaultImage}
                  alt="User Avatar"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute right-[-30px] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {user ? (
                  <>
                    <DropdownMenuItem>
                      {user.displayName || `${user.firstName} ${user.lastName}`}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              className="lg:hidden py-2"
              ref={buttonRef}
              onClick={toggleNavbar}
            >
              <RiMenu3Line className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
