import { useState } from "react";
import { GradientText, MotionDiv } from "..";
import { navLinks } from "../../utils/constants";
import { styles } from "../../utils/styles";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { motion, useScroll, useSpring } from "framer-motion";

// import { motion } from "framer-motion";

const Navbar = () => {
  const [hoveredNavLink, sethoveredNavLink] = useState<number | null>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleItemHover = (itemIndex: number | null) => {
    sethoveredNavLink(itemIndex);
  };

  const handleItemLeave = () => {
    sethoveredNavLink(null);
  };

  const handleOpenMenu = () => {
    document.body.classList.add("overflow-hidden");
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setMenuIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="fixed z-20 w-full">
        <nav
          className={`${styles.paddingX} w-full flex justify-between py-5 bg-primary items-center`}
        >
          {/* Logo and logo name */}
          <MotionDiv>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                className="flex gap-4 items-center cursor-pointer"
                onClick={scrollToTop}
                to="/"
              >
                <img src={logo} alt="Golden Logo" className="w-9 h-9" />
                <p className="text-[18px] font-bold hidden md:block">
                  <GradientText text="Golden"></GradientText>
                </p>
              </Link>
            </motion.div>
          </MotionDiv>

          {/* links to sections - show on large screen */}
          <ul className="md:flex gap-12 hidden">
            {navLinks.map((link, index) => (
              <MotionDiv
                delay={0.4 + index * 0.25}
                key={`Link-${link.id}-${index}`}
              >
                <motion.li
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  onMouseEnter={() => handleItemHover(index)}
                  onMouseLeave={handleItemLeave}
                  className={`${
                    hoveredNavLink === null ? "text-secondary" : "text-gray-600"
                  } hover:text-white text-[18px] cursor-pointer font-bold`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              </MotionDiv>
            ))}
          </ul>

          {/* links to sections - show on small screen */}
          <div
            onClick={() => handleOpenMenu()}
            className="md:hidden cursor-pointer text-secondary hover:text-white"
          >
            <MotionDiv delay={0.6}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </MotionDiv>
          </div>
        </nav>
        <motion.div className="h-[3px] w-full bg-white" style={{ scaleX }} />
      </div>

      <div
        className={`${
          menuIsOpen ? "translate-y-0" : "-translate-y-full"
        } h-screen fixed right-0 top-0 transition-transform duration-300 w-full z-50 flex flex-col`}
      >
        <div
          className={`h-96 bg-gray-900 w-full z-50 flex justify-center items-center`}
        >
          <ul>
            <li className="flex justify-center items-center">
              <button
                className="navbar-burger text-gray-600 hover:text-gray-100 px-5"
                onClick={handleCloseMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <title>Close Menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>

            {navLinks.map((link, index) => (
              <li
                key={`navLink-${index}`}
                onMouseEnter={() => handleItemHover(0)}
                onMouseLeave={handleItemLeave}
                className={`${
                  hoveredNavLink === null ? "text-secondary" : "text-gray-600"
                } hover:text-white hover:scale-110 transition-all duration-300 text-[18px]  cursor-pointer font-bold my-8 text-center`}
                onClick={() => {
                  handleCloseMenu();
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex-1 bg-gray-900 opacity-80"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
