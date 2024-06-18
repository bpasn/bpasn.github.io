import React from 'react';
import { motion } from 'framer-motion';
interface ListCardProps {
  skill: string;
  image: string;
}

const ListCard: React.FC<ListCardProps> = ({
  skill,
  image
}) => {
  
  
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.div
      variants={item}
      className="relative md:h-[350px] bg-slate-950  border border-primary rounded-xl shadow-md flex flex-col items-center justify-center p-5 gap-5">
      <motion.img src={image} alt="skill" className="min-w-32 h-32 object-contain" />
      <motion.p className="text-2xl font-bold hidden md:block">{skill}</motion.p>
    </motion.div>
  );
};

export default ListCard;