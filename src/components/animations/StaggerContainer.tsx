import { motion, useInView, Variants } from "motion/react";
import { useRef, ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  threshold?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.15,
  initialDelay = 0.1,
  threshold = 0.2,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const customVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};

export { containerVariants, itemVariants };
