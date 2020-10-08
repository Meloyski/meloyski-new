import * as React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components';
import { Button } from '../components/_Atelier';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 2.5,
      when: 'beforeChildren',
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="viewport"
    >
      <Navigation />
      <motion.div
        initial="initial"
        transition={{ delay: 4.5 }}
        className="hero"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item}>
            Product Designer, Art Director &amp; Front-end Developer
          </motion.h1>
          <motion.div variants={item}>
            <Button size="large">Checkout My Portfolio</Button>
          </motion.div>
          <motion.div variants={item}>
            <Button variant="text" size="large">
              View My Resume
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
