"use client";

import Image from "next/image";
import styles from "../style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"], weight: ["700"] });
const publicSans400 = Public_Sans({ subsets: ["latin"], weight: ["400"] });

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2 className={publicSans.className}>{title}</h2>
        <div className={`${styles.body} ${publicSans.className}`}>
        <div className={`${styles.description} ${publicSans400.className}`}>
            <p>{description}</p>
            <span>
     
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
