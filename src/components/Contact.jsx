import React from "react";

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-3xl mb-2">
        Contact <span className=" underline font-thin">With Us</span>
      </h1>
      <p className="  text-center text-gray-600 max-w-80 center mx-auto mb-12">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex gap-5  justify-center ">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            E-mail
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="E-mail"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className=" w-full border border-gray-300 rounded py-3 px-3 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="border px-5 py-2 rounded-2xl text-white bg-blue-500 hover:bg-green-500">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
