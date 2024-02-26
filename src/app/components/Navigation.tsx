import React from "react";
import NavigationItem from "./NavigationItem";
import styles from "../styles/navigation.module.scss";

interface navigationsProps {
  navItems: NavItem[];
}

const Navigation: React.FunctionComponent<navigationsProps> = ({
  navItems,
}) => {
  return (
    <nav className={styles.headerNavigation}>
      <div className={styles.headerPageLinks}>
        {navItems.map((navItem) => {
          return (
            <NavigationItem
              key={navItem.uid}
              title={navItem.title}
              target={navItem.target}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
