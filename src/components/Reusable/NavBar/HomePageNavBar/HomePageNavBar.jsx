import React, { useState, useEffect } from "react";
import { Menu, Segment } from "semantic-ui-react";
import style from "./HomePageNavBar.module.css";

const HomePageNavBar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Segment
      inverted
      className={`${style.navbar_segment} ${
        isScrolled ? style.visible : style.hidden
      }`}
    >
      <Menu.Item as="a" className={style.navbar_logo}>
        Bug Zero
      </Menu.Item>
      <Menu inverted pointing secondary className={style.navbar_menu}>
        {[
          { name: "home", label: "Home" },
          { name: "why-join-us", label: "Why Join Us?" },
          { name: "features", label: "Features" },
          { name: "our-scope", label: "Our Scope" },
          { name: "the-team", label: "The Team" },
        ].map((item) => (
          <Menu.Item
            key={item.name}
            name={item.name}
            active={activeItem === item.name}
            onClick={handleItemClick}
            as="a"
            href={`/#${item.name}`}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Segment>
  );
};

export default HomePageNavBar;
