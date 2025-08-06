import { list, itemSlideUp } from "@helpers/animation";
import { motion } from "framer-motion";
import Heading from "@components/Heading";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import MetaTags from "@components/MetaTags";

const Work = () => {
  return (
    <>
      <MetaTags title="Work" />
      <section className="dark:bg-dark-theme relative overflow-hidden min-h-screen flex items-center py-28">
        <div className="max-w-screen-lg mx-auto w-full px-2">
          <Heading heading="work" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
          >
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-300">
              No projects are currently available.
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Work;
