"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./shared/Input";
import TextArea from "./shared/TextArea";
import FormField from "./shared/FormField";

const ContactFormContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.error("FAILED...", error);
          if (error.text) {
            console.error("Error Text:", error.text);
          } else {
            console.error("Unknown Error:", error);
          }
        }
      )
      .catch((error) => {
        console.error("Catch Error:", error);
      });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="w-full">
        <div className="">
          <form className="flex flex-wrap -m-2" ref={form} onSubmit={sendEmail}>
            <FormField
              label="Your name"
              placeholder="Enter your name and surname..."
              type="text"
              id="name"
              name="your_name"
              fieldType="input"
            />
            <FormField
              label="Your email"
              placeholder="Enter your email..."
              type="text"
              id="email"
              name="your_email"
              fieldType="input"
            />
            <FormField
              label="Tell us more"
              placeholder="Tell us more..."
              type="text"
              id="message"
              name="message"
              fieldType="textarea"
            />
            <div className="p-2 flex justify-end items-end w-full">
              <button className="text-neutralLight-neutral100 bg-neutralLight-neutral10 border-0 py-[0.635rem] px-[1.25rem] focus:outline-none hover:bg-blueLight-blue50 rounded-[0.5rem] p3SB transition ease-in-out duration-300 animationSmall h-[2.75rem]">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormContainer;
