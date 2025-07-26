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
        <AiOutlineSearch size={20} color="white" />
      </div>

      {/* Centered Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-[#2f3542] rounded-lg p-4 max-w-md mx-auto"
        style={{
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <DialogBody>
          {/* Input Field */}
          <div className="flex justify-center mb-4">
            <Input
              color="white"
              type="search"
              label="Type here..."
              className="bg-[#2C3A47] text-white"
              name="searchkey"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
          </div>

          {/* Sample Blog Card */}
          <div className="flex justify-center">
            <div className="bg-gray-200 p-3 rounded-lg w-full max-w-xs">
              <img
                className="w-full h-24 object-cover rounded-lg mb-2"
                src="https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76"
                alt="React Intro"
              />
              <p className="text-sm text-gray-600">{"date"}</p>
              <h1 className="font-semibold text-lg">{"title"}</h1>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">Powered By Devknus</p>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
