import React from "react";
import { motion } from "framer-motion";
import RepoCard from "./RepoCard";
import { RepoList } from "./Dummy";

const Grid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
      {RepoList.map((item, index) => (
        <AnimatedRepoCard key={item.id} index={index} {...item} />
      ))}
    </div>
  );
};

const AnimatedRepoCard = ({ index, ...props }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const transition = {
    duration: 0.6,
    delay: index * 0.3, // Adjust the delay as needed
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <RepoCard {...props} />
    </motion.div>
  );
};

export default Grid;
