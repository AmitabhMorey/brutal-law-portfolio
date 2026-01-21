import { motion, useInView, Variants } from "motion/react";
import { useRef, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  delay?: number;
  y?: number;
  threshold?: number;
  className?: string;
  staggerChildren?: number;
  scale?: number;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = true,
  duration = 0.8,
  delay = 0,
  y = 40,
  threshold = 0.2,
  className = "",
  staggerChildren = 0.1,
  scale = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y,
      scale: scale < 1 ? scale : 1,
      filter: blur ? "blur(10px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeContent;
