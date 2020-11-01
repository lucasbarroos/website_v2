import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'
import Typed from 'react-typed';
import { useInView } from "react-intersection-observer";
import '../styles/Index.module.scss';
import '../styles/Navigation.module.scss';
import HeaderNavigation from '../components/HeaderNavigation';
let easing = [0.175, 0.85, 0.42, 0.96];

const homePictureAnimation = {
  initial: { y: 400, opacity: 0.6, transition: { duration: 0.5, ease: easing } },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing
    }
  }
};

const aboutPictureAnimation = {
  initial: { x: -400, opacity: 0, transition: { duration: 0.5, ease: easing } },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing
    }
  }
};

const firstNameAnimation = {
  initial: { x: 400, opacity: 0, transition: { duration: 0.5, ease: easing } },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing
    }
  }
};

const Index = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: easing },
      }))   
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start(i => ({
        opacity: 1,
        transition: { duration: 1, ease: easing },
      }))
    }
  }, [controls2, inView2]);

  const [tools, setTools] = useState([{
      logo: 'https://imgur.com/ZjOSRuc.png',
      label: 'React',
      rounded: false,
    }, {
      logo: 'https://imgur.com/nJIx73x.png',
      label: 'NodeJS',
      rounded: true,
    }, {
      logo: 'https://imgur.com/A04dz2C.png',
      label: 'Mongodb',
      rounded: true,
    }, {
      logo: 'https://imgur.com/aew5EFH.png',
      label: 'Redux',
      rounded: false,
    }, {
      logo: 'https://imgur.com/P6H0JyK.png',
      label: 'Jest',
      rounded: false,
    }, {
      logo: 'https://imgur.com/wD1H7pq.png',
      label: 'AWS',
      rounded: true,
    }, {
      logo: 'https://imgur.com/gZDx2fX.png',
      label: 'Docker',
      rounded: true,
    },
  ])

  return (
    <motion.div  initial="initial" exit={{ opacity: 0 }}>
      <HeaderNavigation />
      <div className="container">
        <motion.div {...firstNameAnimation} className="title">
          Lucas<br />Barros
          <br />
          <div className="subtitle">
            {<Typed strings={['Fullstack Developer', 'Working with responsibility', 'Need a developer?', 'Contact me!']}
                    typeSpeed={80}
                />}
          </div>
        </motion.div>
        <motion.img className="picture1" {...homePictureAnimation} src="https://imgur.com/SmqPv9i.jpeg" />
      </div>
      <div className="about-container">
        <div className="about-border-effect" />
        <div className="about-section">
          <div className="about-section-first-content">
            <div className="about-section-picture-content">
              <motion.img {...aboutPictureAnimation} className="about-section-picture" src="https://imgur.com/Hdj7B9M.jpeg" />
            </div>
            <span className="about-section-text">
              I'm a Fullstack Developer with 6 years of experience.
              I really love coding and studying, without excuses. Every time I’m searching for new features and ideas to increment my career. 
              When you love your profession, you will never work.
            </span>
          </div>
          <div
          className="about-section-second-content">
            <p>Some technologies and tools</p>
            <motion.div ref={ref2}
                animate={controls2}
                initial={{ opacity: 0, transition: { duration: 1, ease: easing }}}
                className="about-section-icons">
              {
                tools.map(el => (
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  title={el.label}
                  className={`about-section-icon${el.rounded ? '-rounded' : ''}`} 
                  src={el.logo}
                />))
              }
            </motion.div>
          </div>
        </div>
        <div className="about-border-effect-end" />
      </div>
      <motion.div ref={ref}
        animate={controls}
        initial={{ x: -900, opacity: 0.6, transition: { duration: 0.5, ease: easing }}}
        className="contact-section">
          <p>Contact me</p>
          <input className="contact-input" placeholder="Name" />
          <input className="contact-input" placeholder="E-mail" />
          <textarea className="contact-input" placeholder="Type a message here" rows="8"></textarea>
          <button className="contact-button">Send</button>
      </motion.div>
    </motion.div>
  )
};

export default Index;
