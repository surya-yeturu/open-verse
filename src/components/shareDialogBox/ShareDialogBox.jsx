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

  return (
    <Fragment>
      <div className="cursor-pointer">
        <AiOutlineShareAlt
          onClick={handleOpen}
          size={20}
          style={{ color: "white" }}
        />
      </div>

      {/* CENTERED DIALOG */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-[#2f3542] p-4 rounded-lg"
        style={{
          color: mode === "dark" ? "white" : "black",
          maxWidth: "350px",
          margin: "0 auto",
        }}
      >
        <DialogBody>
          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-4">
            <a href="#">
              <AiFillLinkedin
                size={35}
                className="text-white hover:text-blue-400"
              />
            </a>
            <a href="#">
              <AiFillInstagram
                size={35}
                className="text-white hover:text-pink-400"
              />
            </a>
            <a href="#">
              <AiFillGithub
                size={35}
                className="text-white hover:text-gray-400"
              />
            </a>
            <a href="#">
              <AiFillFacebook
                size={35}
                className="text-white hover:text-blue-600"
              />
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">Powered by Devknus</p>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
