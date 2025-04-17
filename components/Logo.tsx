import { motion } from "framer-motion";
import { slideDown } from "@helpers/animation";

const Logo = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideDown}
      custom={0.3}
    >
      <span className="text-2xl font-bold bg-black text-white dark:bg-white dark:text-black px-3 py-1 select-none">
        EHMI
      </span>
    </motion.div>
  );
};

export default Logo;
