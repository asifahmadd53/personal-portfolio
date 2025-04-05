import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      // Animate text fade-in smoothly
      await textControls.start({
        opacity: 1,
        y: 0, // No bounce, just fade in
        transition: { delay: 0.3, duration: 1, ease: "easeOut", staggerChildren: 0.1 },
      });

      // Morphing background animation
      await controls.start({
        d: curve,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      await controls.start({
        d: flat,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      // 🟢 Smoothly fade out text and background together
      await Promise.all([
        textControls.start({
          opacity: 0,
          y: -10,
          transition: { duration: 0.6, ease: "easeInOut" },
        }),
        controls.start({
          opacity: 0,
          y: "-100%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }),
      ]);
    };

    animate();
  }, [controls, textControls]);

  return (
    <motion.div className="preloader" animate={controls} initial={{ y: 0, opacity: 1 }}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.path
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          animate={controls}
        />
      </svg>
      <div className="preloader-heading">
        <motion.div className="load-text" animate={textControls} initial={{ opacity: 0, y: 10 }}>
          {["M", "u", "h", "a", "m", "m", "a", "d", " "," ", "A", "s", "i", "f"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}  // Just fade in without bouncing
              transition={{ delay: index * 0.08, duration: 0.6 }}
              style={{
                fontSize: "clamp(.9rem, 2vw, 1.9rem)", // Increased text size
                fontWeight: "300", // Bold text for prominence
                color: "#fff", 
                display: "inline-block",
                whiteSpace: "nowrap",
                marginRight: index !== 0 && char !== " " ? "0.5rem" : "0",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
