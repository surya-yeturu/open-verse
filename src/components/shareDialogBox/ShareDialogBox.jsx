import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import myContext from "../../context/data/MyContext";
import {
  AiOutlineShareAlt,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

export default function ShareDialogBox() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { mode } = useContext(myContext);

  const iconBaseColor = mode === "dark" ? "white" : "black";

  return (
    <Fragment>
      <div className="cursor-pointer">
        <AiOutlineShareAlt
          onClick={handleOpen}
          size={20}
          color={iconBaseColor}
          className="hover:opacity-80 transition-opacity duration-200"
        />
      </div>

      {/* CENTERED DIALOG */}
      <Dialog
        open={open}
        handler={handleOpen}
        className={`p-6 rounded-lg max-w-xs mx-auto ${
          mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
        style={{ margin: "0 auto" }}
      >
        <DialogBody className="flex flex-col items-center justify-center h-48 gap-6">
          {/* Social Icons */}
          <div className="flex justify-center gap-8">
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin
                size={40}
                className={`hover:text-blue-500 transition-colors duration-200 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                size={40}
                className={`hover:text-pink-500 transition-colors duration-200 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={40}
                className={`hover:text-gray-600 transition-colors duration-200 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook
                size={40}
                className={`hover:text-blue-700 transition-colors duration-200 ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              />
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-center text-gray-400 text-sm mt-auto">
            Powered by OpenVerse
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
