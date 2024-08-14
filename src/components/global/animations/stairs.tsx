import { motion } from "framer-motion";

// variants of motion
const StairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index:number) => {
  const totalSteps = 6; // numero de pasos
  return totalSteps - index - 1; // index in reverse order
};
const Stairs = () => {
  return <>
      {/* renderizar 6div motion cada representacion es un paso del stairs animation */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={StairsAnimation}
          initial="initial"
          animate="animate"
          exit={"exit"}
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  
};

export default Stairs;
