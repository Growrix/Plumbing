import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props { children: React.ReactNode; delay?: number; className?: string; }

export function AnimatedSection({ children, delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
