import * as React from 'react';
import { motion } from 'framer-motion';
import { easing } from '../../style/animations';
import Meloyski from '../Meloyski';

const NavigationItems = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      ease: easing,
    },
  },
};

const Navigation = () => {
  return (
    <motion.div initial="initial" animate="animate" className="navigation">
      <div className="container">
        <motion.div
          exit={{ opacity: 1, x: 0 }}
          variants={NavigationItems}
          className="navigation--item"
        >
          Portfolio
        </motion.div>
        <motion.div
          exit={{ y: 0, opacity: 1 }}
          initial={{ y: '350%', opacity: 1 }}
          animate={{ y: '-24px', opacity: 1 }}
          transition={{ delay: 2, duration: 0.6, ease: easing }}
          className="navigation--logo"
        >
          <Meloyski color="white" />
        </motion.div>
        <motion.div
          exit={{ opacity: 1, x: 0 }}
          variants={NavigationItems}
          className="navigation--item"
        >
          Resume
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navigation;
