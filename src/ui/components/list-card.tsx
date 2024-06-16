import React from 'react';
import { motion } from 'framer-motion';
interface ListCardProps {
  id: number;
  skill: string;
  image: string;
}

const ListCard: React.FC<ListCardProps> = ({
  id,
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
      className="h-60 bg-slate-950 border border-primary rounded-xl shadow-md flex flex-col justify-center items-center gap-5">
      <motion.img src={image} alt="skill" className=" w-32 h-32 object-contain" />
      <motion.p className="text-lg">{skill}</motion.p>
    </motion.div>
  );
};

export default ListCard;