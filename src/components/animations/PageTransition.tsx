import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

/**
 * PageTransition component provides smooth fade-in animation
 * when navigating between pages
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
