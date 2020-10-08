export const easing = [0.6, -0.05, 0.01, 0.99];

export const FadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

export const HeroStagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const HeroItems = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};
