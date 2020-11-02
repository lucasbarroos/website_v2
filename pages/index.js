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
  const controls3 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

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
  
  useEffect(() => {
    if (inView3) {
      controls3.start(i => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 2, ease: easing },
      }))
    }
  }, [controls3, inView3]);

  const [tools] = useState([{
    logo: 'https://imgur.com/ZjOSRuc.png',
    label: 'React',
    rounded: false,
  }, {
    logo: 'https://imgur.com/m1L2Hko.png',
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
  ]);

  const [clients] = useState([{
    name: 'Rina',
    logo: 'https://imgur.com/XhDKuiZ.png',
  }, {
    name: 'Petrobras',
    logo: 'https://imgur.com/0hYysKw.png',
  }, {
    name: 'BP Petroleum',
    logo: 'https://imgur.com/9E2JJOb.png',
  }, {
    name: 'Flightech',
    logo: 'https://imgur.com/fnYvntc.png',
    style: {
      backgroundColor: '#031f46',
    },
  }, {
    name: 'Petronas',
    logo: 'https://imgur.com/ICSRP1O.png',
  }, {
    name: 'Omni Táxi Aéreo',
    logo: 'https://imgur.com/KUqTBbQ.png',
    style: {
      backgroundColor: '#192a39',
      padding: '30px 10px',
    },
  }]);

  return (
    <motion.div id="home" initial="initial" exit={{ opacity: 0 }}>
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
      <div id="about" className="about-container">
        <div className="about-border-effect" />
        <div className="about-section">
          <div className="about-section-first-content">
            <div className="about-section-picture-content">
              <motion.img {...aboutPictureAnimation} className="about-section-picture" src="https://imgur.com/Hdj7B9M.jpeg" />
            </div>
            <span className="about-section-text">
              I'm a Fullstack Developer, with 6 years of full-time work.
              Based in Brazil, I have a lot of experience developing software with high scalability and quality to attend the most kind of clients in the engineering world.
              I really loving studying! Always I have new repositories with the most famous frameworks and technologies in my stack (Follow me on Github to see my activities :D).
            </span>
          </div>
          <div
            className="about-section-second-content">
            <p>Some technologies and tools</p>
            <motion.div ref={ref2}
              animate={controls2}
              initial={{ opacity: 0, transition: { duration: 1, ease: easing } }}
              className="about-section-icons">
              {
                tools.map(el => (
                  <motion.img
                    key={el.label}
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
      <div id="portfolio" className="portfolio-section">
        <p>Some clients I've worked</p>
        <div className="clients-container">
          {
            clients.map(client => (
              <motion.div ref={ref3}
              animate={controls3}
              whileHover={{ scale: 1.1 }}
              title={client.name}
              initial={{ opacity: 0, scale: 0.5, transition: { duration: 1, ease: easing } }}
              className="client-card" style={client.style}>
                <img className="client-logo" src={client.logo} />
              </motion.div>
            ))
          }
        </div>
      </div>
      <motion.div ref={ref}
        animate={controls}
        initial={{ x: -900, opacity: 0.6, transition: { duration: 0.5, ease: easing } }}
        className="contact-section"
        id="contact"
        >
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
