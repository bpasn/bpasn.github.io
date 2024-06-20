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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  return (
    <motion.div
      variants={item}
      className="relative h-[150px] lg:h-[250px] bg-slate-950  border border-primary rounded-xl shadow-md flex flex-col items-center justify-center p-5 gap-5">
      <motion.img src={image} alt="skill" className="max-w-[120px] max-h-[150px] object-cover p-5" />
      <motion.p className="text-lf font-bold hidden lg:block">{skill}</motion.p>
    </motion.div>
  );
};

export default ListCard;