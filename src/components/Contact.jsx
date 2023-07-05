import React,{useState} from "react";
import { FaLocationArrow, FaMobile,FaTelegram,FaMailBulk,FaMapMarked } from "react-icons/fa";



function Contact({sectionRef}) {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {

    }

  return (
    <div id="contact" ref={sectionRef} className="h-screen p-2 bg-white ">
      <div className="flex flex-col justify-center items-center gap-3 rounded-lg bg-black text-white h-2/5">
        <div className="text-2xl font-bold">Contact me</div>
        <div className=" font-thin">
          contact me at anytime and from anywhere.
        </div>
        <ul className="font-semibold ">
          <li className="flex gap-2  items-center ">
            <FaMobile/>Phone : <span>+251941024355</span>
          </li>
          <li className="flex gap-2  items-center">
          <FaMailBulk/>E-mail : <a href="mailto:fi27ta@gmail.com">fi27ta@gmail.com</a>
          </li>
          <li className="flex gap-2 items-center">
          <FaTelegram/>telegram : <a href="https://t.me/wecan_1">@Wecan_1</a>
          </li>
        </ul>
        {/* <div className="flex gap-2 justify-end w-full p-3 font-serif text-blue-400">
          <FaLocationArrow />
          Ethiopia, Addis Ababa
        </div> */}
      </div>
      <form
          onSubmit={handleSubmit}
          className="relative max-w-full rounded-lg border-2 border-slate-500 shadow-xl flex flex-col px-8 py-2 m-2 text-black"
        >
          <h1 className="text-md sm:text-2xl font-bold ">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className=" font-light mt-1 "
          >
            Full name<span className="text-red-500 ">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b border-slate-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light "
          />
         

          <label
            htmlFor="email"
            className=" font-light mt-4 "
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b border-slate-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light "
          />
          

          <label
            htmlFor="subject"
            className=" font-light mt-4 "
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b border-slate-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light "
          />
         
          <label
            htmlFor="message"
            className=" font-light mt-4 "
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b border-slate-500 py-2 pl-4 h-5 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light "
          ></textarea>
          
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="absolute top-0 right-4 px-4 hover:px-2 mt-1 py-2 bg-blue-500 text-white font-light rounded-md text-lg flex flex-row items-center"
            >
              Submit
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
    </div>
  );
}

export default Contact;
