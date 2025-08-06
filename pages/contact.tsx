import Heading from "@components/Heading";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { item, itemSlideUp, list } from "@helpers/animation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import React from "react";
import toast from "react-hot-toast";
import MetaTags from "@components/MetaTags";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xeoawnqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.msg
        }),
      });
      
      if (response.ok) {
        reset();
        toast.success("Your message has been sent successfully!");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error(
        err.message || "An error occurred while sending your message. Please try again later."
      );
    }
  };

  return (
    <>
      <MetaTags title="Contact Me" />
      <section className="min-h-screen flex items-center py-20 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-lg w-full mx-auto px-2">
          <Heading heading="Contact me" />
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-12 lg:max-w-none max-w-screen-sm mx-auto ">
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial="hidden"
              animate="visible"
              variants={list}
              className="w-full"
            >
              <motion.div variants={itemSlideUp} className="mb-4">
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  placeholder="Your Name"
                  className={`focus:outline-none shadow w-full border bg-transparent dark:border-primary p-2 border-gray-200 text-gray-500 dark:text-gray-200 rounded-md 
                    ${errors.name && "ring-1 ring-red-500"}`}
                  disabled={isSubmitting}
                />
                <span className="text-red-300 text-sm font-main">
                  {errors?.name?.message}
                </span>
              </motion.div>
              <motion.div variants={itemSlideUp} className="mb-4">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder="Your Email"
                  className={`focus:outline-none shadow w-full border dark:border-primary bg-transparent dark:text-gray-200 p-2 border-gray-200 text-gray-500 rounded-md 
                    ${errors.email && "ring-1 ring-red-500"}`}
                  disabled={isSubmitting}
                />
                <span className="text-red-300 text-sm font-main">
                  {errors?.email?.message}
                </span>
              </motion.div>
              <motion.div variants={itemSlideUp} className="mb-4">
                <textarea
                  rows={6}
                  name="msg"
                  {...register("msg", {
                    required: {
                      value: true,
                      message: "Message is required",
                    },
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Message cannot exceed 1000 characters",
                    },
                  })}
                  placeholder="Your Message"
                  className={`focus:outline-none shadow w-full border bg-transparent p-2 border-gray-200 dark:border-primary dark:text-gray-200 text-gray-500 rounded-md 
                    ${errors.msg && "ring-1 ring-red-500"}`}
                  disabled={isSubmitting}
                ></textarea>
                <span className="text-red-300 text-sm font-main">
                  {errors?.msg?.message}
                </span>
              </motion.div>
              <motion.div variants={itemSlideUp} className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`rounded bg-primary text-black font-main font-bold px-4 py-1 place-self-center ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </motion.div>
            </motion.form>
            <div className="lg:block md:flex md:justify-between">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="mb-6"
              >
                <motion.h3
                  variants={item}
                  className="text-2xl font-main font-bold mb-4 capitalize dark:text-gray-200"
                >
                  Contact info :
                </motion.h3>

                <motion.div
                  variants={item}
                  className="flex mb-4 items-center space-x-4 text-gray-700 dark:text-gray-300"
                >
                  <FontAwesomeIcon className="w-4" icon={faEnvelope} />
                  <a
                    href="mailto:contact@ehmad.site"
                    className="text-lg font-main hover:text-primary transition-colors duration-200"
                  >
                    contact@ehmad.site
                  </a>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex mb-4 items-center space-x-4 text-gray-700 dark:text-gray-300"
                >
                  <FontAwesomeIcon className="w-4" icon={faPhone} />
                  <span className="text-lg font-main">+212 629872534</span>
                </motion.div> */}
                <motion.div
                  variants={item}
                  className="flex mb-4 items-center space-x-4 text-gray-700 dark:text-gray-300"
                >
                  <FontAwesomeIcon className="w-4" icon={faMapMarkerAlt} />
                  <span className="text-lg font-main">Someware on cloud</span>
                </motion.div>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={list}>
                <motion.h3
                  variants={item}
                  className="text-2xl font-main font-bold mb-4 capitalize dark:text-gray-200"
                >
                  Social Networks :
                </motion.h3>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  className="flex space-x-10 text-lg items-center text-gray-700"
                >
                  <motion.a
                    variants={itemSlideUp}
                    className="hover:text-primary dark:text-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/discord"
                  >
                    <FontAwesomeIcon className="w-4 h-4" icon={faDiscord} />
                  </motion.a>
                  <motion.a
                    variants={itemSlideUp}
                    className="hover:text-primary dark:text-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/linkedin"
                  >
                    <FontAwesomeIcon className="w-4" icon={faLinkedin} />
                  </motion.a>
                  <motion.a
                    variants={itemSlideUp}
                    className="hover:text-primary dark:text-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/github"
                  >
                    <FontAwesomeIcon className="w-4 h-4" icon={faGithub} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
