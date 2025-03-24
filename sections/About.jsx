'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About MEEKA THE HUSKY" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">Meeka The Husky,</span> the sassiest
        and most lovable meme token on the Solana blockchain, brings
        personality, fun, and philanthropy to the crypto world. Inspired by the
        viral TikTok sensation, Meeka isn’t just a meme—she’s a movement,
        uniting dog lovers, meme enthusiasts, and crypto degens alike.
        <br />
        <br />
        <br />
        With a{" "}
        <span className="font-extrabold">
          vibrant and passionate community,
        </span>{" "}
        Meeka thrives on engagement, memes, and good vibes. Whether you're here
        for the laughs, the rewards, or the mission, every $MEEKA holder is part
        of the pack.
        <span className="font-extrabold">
          {" "}
          A decentralized and community-driven token,{" "}
        </span>
        Meeka supports dog charities, fuels an exciting gambling platform, and
        rewards those who embrace the fun.
        <br />
        <br />
        <br />
        Whether you're a meme lover, a dog enthusiast, or just here to win big,
        Meeka lets you be part of something greater.
        <span className="font-extrabold">
          {" "}
          Woof, win, and give back—join the Meeka movement!{" "}
        </span>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
