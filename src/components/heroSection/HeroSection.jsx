import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import myContext from "../../context/data/MyContext";

function HeroSection() {
  const { mode } = useContext(myContext);

  return (
    <section
      className={`w-full ${
        mode === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-r from-purple-800 to-indigo-700"
      } py-24`}
    >
      <div className="container mx-auto flex items-center justify-center flex-col px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" // Classy book and pen icon
            alt="OpenVerse logo"
            className="w-24 h-24"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4">OpenVerse</h1>

        {/* Tagline */}
        <Typography
          variant="lead"
          className="text-white text-center max-w-xl text-lg sm:text-2xl font-light"
        >
          Open your soul and write your story.
        </Typography>
      </div>
    </section>
  );
}

export default HeroSection;
