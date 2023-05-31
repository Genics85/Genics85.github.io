import { InlineIcon } from "@iconify/react";
import { PrimarySubmitButton } from "./assets/PrimaryButton";

function Contact() {

  let origin:string =window.origin;
  return (
    <main className="w-full flex flex-col">
      <div className=" text-center w-full p-10 flex flex-col space-y-3 items-center bg-cardGrey">
        <h3 className="text-3xl font-bold">Contact</h3>
        <p>
          Interested in engaging me for your work, project or just want to say hi? You
          can fill in the contact form below or send me an email to
          <span>
            <a
              href="mailto:eugenamo85@gmail.com"
              className="text-primary hover:underline"
            >
              {" "}
              eugeneamo85@gmail.com
            </a>
          </span>
        </p>
        <p> Want to get connected? We can get connected through these channels</p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/genics_code"
            target="_blank"
            className="hover:text-primary"
          >
            <InlineIcon className="text-2xl" icon="bi:twitter" />
          </a>
          <a
            href="https://github.com/Genics85"
            target="_blank"
            className="hover:text-primary"
          >
            <InlineIcon className="text-2xl" icon="bi:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/eugene-amo-agyemang-89b0781a4"
            target="_blank"
            className="hover:text-primary"
          >
            <InlineIcon className="text-2xl" icon="akar-icons:linkedin-fill" />
          </a>
          <a
            href="mailto:eugeneamo85@gmail.com"
            target="_blank"
            className="hover:text-primary"
          >
            <InlineIcon className="text-2xl" icon="entypo:email" />
          </a>
          <a
            href="http://wa.me/+233547800363"
            target="_blank"
            className="hover:text-primary"
          >
            <InlineIcon className="text-2xl" icon="ri:whatsapp-fill" />
          </a>
          <a
            href="tel:+233547800363"
            target="_blank"
            className="hover:text-primary"
          >
            <InlineIcon className="text-2xl" icon="ic:round-phone" />
          </a>
        </div>
      </div>

      <div className="p-10 flex flex-col w-full items-center space-y-4">
        <form
          action="https://formsubmit.co/eugeneamo85@gmail.com"
          method="POST"
          className="contact-form w-full md:w-3/5 flex flex-col space-y-3 items-center"
        >
          <h3 className="text-3xl font-bold">Get In Touch</h3>
          <div className="w-full flex space-y-3 md:space-y-0 md:space-x-3 flex-col md:flex-row ">
            <input
              className="w-full border-cardGrey p-2 border-2 rounded-md"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full border-cardGrey p-2 border-2 rounded-md"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <textarea
            className=" w-full border-2 border-cardGrey p-2 rounded-md"
            name="message"
            placeholder="Enter your message"
            id=""
            cols={20}
            rows={10}
          />
          <input type="hidden" name="_next" value={`${origin}/contact`}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <PrimarySubmitButton text={"Send Now"} icon={"fa:send"} />
        </form>
      </div>
    </main>
  );
}

export default Contact;
