import styles from "@styles/Home.module.css";
import { motion } from "framer-motion";
import {
  slideUp,
  slideToRight,
  slideToLeft,
  slideDown,
  fadeIn,
} from "@helpers/animation";
import MetaTags from "@components/MetaTags";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Shape from "@components/Shape";
const buttonTexts = [
  "Touch My API",
  "Talk Gitty to Me",
  "Expose Your Endpoints",
  "Push to My Repo",
  "Inject Your Dependency",
  "Sudo Make Me a Sandwich",
  "Let's Break the Build",
  "You Auto-Scaled Into My Heart",
  "Mount My Volume",
  "Let's Get Infr-astructural",
];

const randomButtonText =
  buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemSlideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Home = () => {
  return (
    <>
      <MetaTags title="DevOps Engineer" />
      <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0.6}
          className="absolute z-20 bottom-0 px-2 xl:hidden font-main uppercase font-black text-gray-300 dark:text-dark-gray md:text-7xl text-5xl"
        >
          DevOps
        </motion.h1>
        <div className="relative max-w-screen-lg px-2 w-full mx-auto">
          <div className="md:grid md:grid-cols-auto-2 md:grid-rows-auto-2 xl:gap-0 gap-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideToLeft}
              custom={0.3}
              className="md:text-7xl text-4xl md:leading-normal dark:text-gray-100 font-black font-main text-black uppercase"
            >
              Dev-Ops <br /> engineer
            </motion.h1>
            <div className="md:space-x-16 justify-center items-center md:flex">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideDown}
                className="md:w-0.5 md:h-52 h-0.5 w-52 my-6 bg-gray-300 dark:bg-gray-300"
              ></motion.div>
              <div>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={slideToRight}
                  custom={0.3}
                  className="md:text-2xl text-lg dark:text-gray-300 text-gray-700 font-lora capitalize"
                >
                  DevOps <br />
                  engineer <br /> based in London.
                </motion.p>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  className="flex space-x-10 text-lg items-center text-gray-700 mt-4"
                >
                  <motion.a
                    variants={itemSlideUp}
                    className="hover:text-primary dark:text-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/instagram"
                  >
                    <FontAwesomeIcon className="w-6 h-6" icon={faInstagram} />
                  </motion.a>
                  <motion.a
                    variants={itemSlideUp}
                    className="hover:text-primary dark:text-primary"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/github"
                  >
                    <FontAwesomeIcon className="w-6 h-6" icon={faGithub} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
            <motion.button
              initial="hidden"
              animate="visible"
              variants={slideUp}
              whileTap={{ scale: 0.9 }}
              custom={0.6}
              title="Don't worry, it's idempotent 😘"
              className={`${styles.btn} focus:outline-none mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary`}
              onClick={() => {
                window.location.href = "mailto:hi@ehmad.gay";
              }}
            >
              {randomButtonText}
            </motion.button>
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={0.6}
          className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20 dark:filter  dark:invert"
        >
          <Shape />
        </motion.div>
      </section>
    </>
  );
};

export default Home;