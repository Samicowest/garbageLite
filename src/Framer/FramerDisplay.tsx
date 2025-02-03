import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedContainer from "./AnimatedContainer";

const FramerDisplay = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the section comes into view
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger the animations of the children
      },
    },
  };

  const childVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="h-[40vh] py-8 px-4 bg-blue-400">nigeria is</div>
      <div className="h-[40vh] py-8 px-4 bg-yellow-400 ">nigeria is</div>
      <div className="h-[40vh] py-8 px-4 bg-green-400 ">nigeria is</div>
      <div
        ref={ref}
        className="grid grid-cols-3 overflow-hidden gap-4 w-full h-64 bg-gray-200 p-4"
      >
        {/* Parent container with staggered children */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contents"
        >
          {/* Child 1 */}
          <motion.div
            variants={childVariants}
            className="bg-blue-500 flex items-center justify-center text-white text-xl h-full"
          >
            Child 1
          </motion.div>

          {/* Child 2 */}
          <motion.div
            variants={childVariants}
            className="bg-green-500 flex items-center justify-center text-white text-xl h-full"
          >
            Child 2
          </motion.div>

          {/* Child 3 */}
          <motion.div
            variants={childVariants}
            className="bg-red-500 flex items-center justify-center text-white text-xl h-full"
          >
            Child 3
          </motion.div>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <AnimatedContainer />
      </div>
    </>
  );
};

export default FramerDisplay;
