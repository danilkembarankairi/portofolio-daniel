import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollFade = ({ children, className }) => {
  const ref = useRef(null);

  // Menggunakan useScroll untuk memantau scroll pada elemen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Elemen mulai muncul pada 50% scroll
  });

  // Mengatur opacity berdasarkan posisi scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Efek slide (gerak dari bawah)
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`${className} transition-all duration-700 ease-out transform`} // Tanpa perubahan background color
    >
      {children} {/* Konten yang dibungkus */}
    </motion.div>
  );
};

export default ScrollFade;
