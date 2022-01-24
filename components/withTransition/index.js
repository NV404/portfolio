import { motion } from "framer-motion";

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <motion.div
      className="w-[min(560px,_100%)]"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 1 }}
      >
          <OriginalComponent />
      </motion.div>
    </>
  );
};

export default withTransition;