import * as React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components';
import { Button } from '../components/_Atelier';

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Navigation />
    </motion.div>
  );
};

export default Home;
