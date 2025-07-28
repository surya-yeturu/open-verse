import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody, Input } from "@material-tailwind/react";
import myContext from "../../context/data/MyContext";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { mode } = useContext(myContext);

  return (
    <Fragment>
      {/* Search Icon */}
      <div onClick={handleOpen} className="cursor-pointer">
        <AiOutlineSearch
          size={20}
          color={mode === "dark" ? "white" : "black"}
        />
      </div>

      {/* Bottom slide-up Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        className={`rounded-t-lg p-4 max-w-md mx-auto fixed bottom-0 left-0 right-0
          ${
            mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        style={{
          margin: 0,
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
        size="sm"
      >
        <DialogBody>
          {/* Input Field */}
          <div className="flex justify-center mb-4">
            <Input
              color={mode === "dark" ? "white" : "blue"}
              type="search"
              label="Type here..."
              className={
                mode === "dark" ? "bg-gray-700 text-white" : "bg-gray-100"
              }
              name="searchkey"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
          </div>

          {/* Sample Blog Card */}
          <div className="flex justify-center">
            <div
              className={`p-3 rounded-lg w-full max-w-xs ${
                mode === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <img
                className="w-full h-24 object-cover rounded-lg mb-2"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
                alt="Sample blog"
              />
              <p className="text-sm">{`10 July 2023`}</p>
              <h1 className="font-semibold text-lg">
                {"Exploring Ocean Depths"}
              </h1>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">Powered By OpenVerse</p>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
