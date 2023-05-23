import { Icon, InlineIcon } from '@iconify/react';

function Navigation() {
  return (
    <nav className="bg-primary text-white w-screen h-14 md:w-1/4 md:h-screen">
      <div className="container p-6 flex md:flex-col justify-center items-center space-y-4">
        <h3 className="text-2xl font-bold text-center">Eugene Amo Agyemang</h3>
        <div className="rounded-full w-40 h-40 bg-white"></div>
        <p className="text-center ">
          Excepteur quis exercitation tempor duis velit ullamco cillum nostrud
          fugiat amet nulla pariatur.
        </p>
        <div className="flex space-x-3">
        <div className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"><InlineIcon icon="bi:twitter"/></div>
        <div className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"><InlineIcon icon="bi:github"/></div>
        <div className="rounded-full w-10 h-10 bg-white hover:bg-cardGrey cursor-pointer transition duration-300 ease-in-out text-2xl flex items-center justify-center text-darkPrimary"><InlineIcon icon="akar-icons:linkedin-fill"/></div>
        </div>
        <hr className="border-white h-1 w-full " />
        <div className="flex items-center space-x-3 cursor-pointer hover:text-darkPrimary">
            <InlineIcon className='text-2xl' icon="mdi:person"/>
            <h3 className="font-bold text-lg ">About me</h3>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-darkPrimary">
            <InlineIcon className='text-2xl' icon="ic:outline-laptop"/>
            <h3 className="font-bold text-lg ">Portfolio</h3>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-darkPrimary">
            <InlineIcon className='text-2xl' icon="pepicons-pop:cv"/>
            <h3 className="font-bold text-lg ">Resume</h3>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-darkPrimary">
            <InlineIcon className='text-2xl' icon="material-symbols:contact-mail-outline"/>
            <h3 className="font-bold text-lg ">Contact</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
