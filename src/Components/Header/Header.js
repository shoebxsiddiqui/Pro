import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal, TextField } from "@mui/material";
import {
  clearErrors,
  loginUser,
  logout,
  register,
} from "../../actions/userAction";
import { BsCartFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const [str, setstr] = useState();
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    const checkCookie = () => {
      return document.cookie.length > 2;
    };

    if (checkCookie()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    if (isAuthenticated) {
      setIsLoggedIn(true);
      toast.success("Logged in successfully");
      setOpen(false);
    }
  }, [dispatch, error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getProducts({ keyword: str }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, phone_no));
  };

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(logout());
      setEmail("");
      setPassword("");
      setIsLoggedIn(false);
      toast.success("Logout successfully");
    } catch (error) {
      toast.error("Try again");
    }
  };

  const cartHandler = () => {
    if (!isAuthenticated) setOpen(true);
    else navigate("/cart");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    zIndex: 1,
  };

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div className="sticky top-0 z-50 flex justify-around bg-blue-600 h-14">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        theme="light"
        stacked
      />
      {!isAuthenticated ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {login ? (
            <Box
              className="w-5/12 h-[75%] flex min-w-[600px] min-h-[400px]"
              sx={style}
            >
              <div className="grid grid-cols-5 grid-flow-row h-full">
                <div
                  style={{
                    backgroundImage:
                      "url('https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png')",
                    backgroundPosition: "center 85%",
                  }}
                  className="flex flex-col bg-no-repeat bg-[#2874f0] p-8 text-white col-span-2"
                >
                  <h2 className="font-medium text-[28px] mb-5">Login</h2>
                  <p className="text-lg text-[#dbdbdb]">
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
                <div className="flex flex-col col-span-3 p-8">
                  <TextField
                    type="email"
                    className="w-full"
                    id="standard-basic"
                    label="Enter Email"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    type="password"
                    className="w-full"
                    id="standard-basic"
                    label="Enter Password"
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-xs text-gray-600 mt-10">
                    By continuing, you agree to Flipkart's{" "}
                    <span className="text-blue-600">Terms of Use</span> and{" "}
                    <span className="text-blue-600">Privacy Policy</span>.
                  </p>
                  <button
                    className="bg-[#fb641b] w-full p-3 rounded-sm mt-5 text-white font-medium text-base"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                  <button
                    className="mt-auto text-blue-600 text-sm font-medium"
                    onClick={() => setLogin(false)}
                  >
                    New to Flipkart? Create an account
                  </button>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="absolute -right-5 -top-2 text-2xl text-white"
              >
                X
              </button>
            </Box>
          ) : (
            <>
              <Box
                className="w-5/12 h-[75%] flex min-w-[600px] min-h-[400px]"
                sx={style}
              >
                <div className="grid grid-cols-5 grid-flow-row h-full">
                  <div
                    style={{
                      backgroundImage:
                        "url('https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png')",
                      backgroundPosition: "center 85%",
                    }}
                    className="flex flex-col bg-no-repeat bg-[#2874f0] p-8 text-white col-span-2"
                  >
                    <h2 className="font-medium text-[28px] mb-5">Register</h2>
                    <p className="text-lg text-[#dbdbdb]">
                      Get access to your Orders, Wishlist and Recommendations
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3 p-8">
                    <TextField
                      type="name"
                      value={name}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Full Name"
                      variant="standard"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      type="email"
                      value={email}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Email"
                      variant="standard"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      type="password"
                      value={password}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Password"
                      variant="standard"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      type="Number"
                      value={phone_no}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Phone Number"
                      variant="standard"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <p className="text-xs text-gray-600 mt-10">
                      By continuing, you agree to Flipkart's{" "}
                      <span className="text-blue-600">Terms of Use</span> and{" "}
                      <span className="text-blue-600">Privacy Policy</span>.
                    </p>
                    <button
                      className="bg-[#fb641b] w-full p-3 rounded-sm mt-5 text-white font-medium text-base"
                      onClick={registerHandler}
                    >
                      Register
                    </button>
                    <button
                      className="mt-auto text-blue-600 text-sm font-medium"
                      onClick={() => setLogin(true)}
                    >
                      Already have an account? SignIn
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="absolute -right-5 -top-2 text-2xl text-white"
                >
                  X
                </button>
              </Box>
            </>
          )}
        </Modal>
      ) : (
        <></>
      )}
      <div
        className="flex-col ml-24 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="text-xl italic text-green-50 font-sans font-semibold">
          Flipkart
        </div>
        <div className="flex gap-1 h-2 text-xs">
          <p className=" flex-shrink-0 italic text-gray-200 font-serif font-semibold">
            Explore
          </p>
          <p className="italic text-yellow-300 font-serif font-semibold">
            Plus
          </p>
          <img src={subURL} alt="Not found" className="h-2 mt-1"></img>
        </div>
      </div>
      <div className="w-96 flex">
        <input
          type="text"
          value={str}
          className="w-full h-8 outline-none mt-3 rounded px-4"
          placeholder="Search for products, brands and more"
          onChange={(e) => setstr(e.target.value)}
        ></input>
        <button
          type="submit"
          className="relative right-8 text-blue-500"
          onClick={submitHandler}
        >
          <FaSearch className="size-6" />
        </button>
      </div>
      <div>
        {isLoggedIn ? (
          <button
            onClick={logoutHandler}
            className="w-28 h-7 bg-gray-50 mt-3.5 rounded border-none text-blue-800 font-sans font-semibold"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleOpen}
            className="w-28 h-7 bg-gray-50 mt-3.5 rounded border-none text-blue-800 font-sans font-semibold"
          >
            Login
          </button>
        )}
      </div>
      <div className="text-gray-50 font-bold font-sans mt-3.5">
        Become a Seller
      </div>
      <div
        className="relative text-gray-50 font-bold font-sans mt-3.5 flex items-center gap-2 cursor-pointer"
        onClick={cartHandler}
      >
        <div className="relative">
          <BsCartFill className="text-2xl mb-1" />
          {cartItems.length !== 0 ? (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          ) : null}
        </div>
        <div className="text-gray-50 font-bold font-sans">Cart</div>
      </div>
    </div>
  );
};

export default Header;
