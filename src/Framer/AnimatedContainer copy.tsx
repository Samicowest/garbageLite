import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedContainer = () => {
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

  const childVariants = [
    {
      hidden: { x: "-100%", opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    }, // From left
    {
      hidden: { y: "100%", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    }, // From bottom
    {
      hidden: { x: "100%", opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    }, // From right
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 gap-4 w-full h-64 bg-gray-200 p-4"
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
          variants={childVariants[0]}
          className="bg-blue-500 flex items-center justify-center text-white text-xl h-full"
        >
          Child 1
        </motion.div>

        {/* Child 2 */}
        <motion.div
          variants={childVariants[1]}
          className="bg-green-500 flex items-center justify-center text-white text-xl h-full"
        >
          Child 2
        </motion.div>

        {/* Child 3 */}
        <motion.div
          variants={childVariants[2]}
          className="bg-red-500 flex items-center justify-center text-white text-xl h-full"
        >
          Child 3
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedContainer;
