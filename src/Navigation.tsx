import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import pic from "./assets/port1.jpg";

function Navigation() {
  const [mobile, setMobile] = useState(true);
  return (
    <div className="md:w-1/4 ">
      <div
        className={`bg-primary text-white ${
          mobile ? "flex" : "hidden"
        } items-center justify-start space-x-8 p-4 md:hidden min-h-16 w-full `}
      >
        <div
          onClick={() => setMobile(false)}
          className="rounded-md text-4xl border-2 w-10 h-10 border-white"
        >
          <InlineIcon icon="solar:hamburger-menu-broken" />
        </div>
        <h3 className="font-bold text-2xl">Eugene Amo Agyemang</h3>
      </div>
      <nav
        className={`bg-primary ${
          mobile ? "hidden" : "block"
        } md:block text-white w-screen min-h-full md:min-h-screen md:w-full md:h-screen sticky top-0`}
      >
        <div className="container p-4 md:p-6 flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-row md:flex-col items-center w-full justify-start md:justify-center space-x-8 md:space-x-0">
            <InlineIcon
              onClick={() => setMobile(true)}
              className={`${mobile ? "hidden" : "block"} text-3xl`}
              icon="ep:close-bold"
            />
            <h3 className="text-2xl font-bold text-center">
              Eugene Amo Agyemang
            </h3>
          </div>
          <div
            className="rounded-full w-40 h-40 bg-white"
            style={{ position: "relative" }}
          >
            <img
              src={pic}
              className="rounded-full"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
          <p className="text-center ">
            Hi, my name is Eugene and I'm a software engineer. Welcome to my
            personal website!
          </p>
          <div className="flex space-x-3">
            <a
              href="https://twitter.com/genics_code"
              target="_blank"
              className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"
            >
              <InlineIcon icon="bi:twitter" />
            </a>
            <a
              href="https://github.com/Genics85"
              target="_blank"
              className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"
            >
              <InlineIcon icon="bi:github" />
            </a>
            <a
              href="https://www.linkedin.com/in/eugene-amo-agyemang-89b0781a4"
              target="_blank"
              className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"
            >
              <InlineIcon icon="akar-icons:linkedin-fill" />
            </a>
            <a
              href="mailto:eugeneamo85@gmail.com"
              target="_blank"
              className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"
            >
              <InlineIcon icon="entypo:email" />
            </a>
          </div>
          <hr className="border-white h-1 w-full " />
          <div className="flex flex-col justify-start space-y-3">
          <Link
            to={"/about"}
            className="flex items-center space-x-3 cursor-pointer hover:text-darkPrimary"
          >
            <InlineIcon className="text-2xl" icon="mdi:person" />
            <h3 className="font-bold text-lg ">About me</h3>
          </Link>
          <Link
            to={"/portfolio"}
            className="hidden flex items-center space-x-3 cursor-pointer hover:text-darkPrimary"
          >
            <InlineIcon className="text-2xl" icon="ic:outline-laptop" />
            <h3 className="font-bold text-lg ">Portfolio</h3>
          </Link>
          <Link
            to={"/resume"}
            className="hidden flex items-center space-x-3 cursor-pointer hover:text-darkPrimary"
          >
            <InlineIcon className="text-2xl" icon="pepicons-pop:cv" />
            <h3 className="font-bold text-lg ">Resume</h3>
          </Link>
          <Link
            to={"/contact"}
            className=" flex items-center space-x-3 cursor-pointer hover:text-darkPrimary"
          >
            <InlineIcon
              className="text-2xl"
              icon="material-symbols:contact-mail-outline"
            />
            <h3 className="font-bold text-lg ">Contact</h3>
          </Link>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
