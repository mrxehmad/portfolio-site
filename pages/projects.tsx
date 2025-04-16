import MetaTags from "@components/MetaTags";
import { motion } from "framer-motion";
import { slideDown } from "@helpers/animation";
import GithubRepos from "@components/GithubRepos";

const Projects = () => {
  return (
    <>
      <MetaTags title="Projects" />
      <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideDown}
            className="text-5xl font-main dark:text-gray-100 font-black uppercase mb-12"
          >
            My GitHub <br />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative inline-block w-32 mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-full w-16 h-4 bg-primary"
              ></motion.span>
            </motion.span>
            Repositories
          </motion.h1>
          <GithubRepos />
        </div>
      </section>
    </>
  );
};

export default Projects; 