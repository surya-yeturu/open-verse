import React, { useContext, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import myContext from "../../context/data/MyContext";
import SearchDialog from "../searchDialog/SearchDailog";
import ShareDialogBox from "../shareDialogBox/ShareDialogBox";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const admin = localStorage.getItem("admin");

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Blogs", to: "/allblogs" },
    ...(!admin ? [{ name: "Admin Login", to: "/adminlogin" }] : []),
  ];

  return (
    <Navbar
      className={`sticky top-0 z-50 max-w-full backdrop-blur-md bg-opacity-80 ${
        mode === "dark" ? "bg-slate-900" : "bg-white"
      } transition-all duration-300 shadow-md border-b`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3917/3917361.png"
              alt="OpenVerse Logo"
              className="w-10 h-10"
            />
            <Typography
              as="span"
              className="text-xl font-bold"
              style={{ color: mode === "dark" ? "#fff" : "#1e272e" }}
            >
              OpenVerse
            </Typography>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to}>
              <Typography
                className={`text-base font-medium transition hover:text-blue-500 ${
                  mode === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <SearchDialog />
          <div className="hidden lg:block">
            <ShareDialogBox />
          </div>

          {/* Dark/Light Toggle */}
          <IconButton
            onClick={toggleMode}
            className="rounded-full p-2"
            style={{
              background: mode === "dark" ? "#475569" : "#f1f2f6",
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            {mode === "dark" ? (
              <BsSun className="w-5 h-5" />
            ) : (
              <BsMoon className="w-5 h-5" />
            )}
          </IconButton>

          {/* Avatar */}
          <Link to="/dashboard">
            <Avatar
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="avatar"
              className="w-10 h-10 border-2 border-blue-500"
            />
          </Link>

          {/* Mobile Nav Toggle */}
          <IconButton
            onClick={() => setOpenNav(!openNav)}
            className="ml-2 lg:hidden"
            style={{
              background: mode === "dark" ? "#475569" : "#f1f2f6",
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            {openNav ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <Collapse open={openNav} className="lg:hidden px-6 pb-4">
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to}>
                <Typography
                  className={`block py-2 px-2 rounded hover:bg-blue-100 transition ${
                    mode === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </Navbar>
  );
}
