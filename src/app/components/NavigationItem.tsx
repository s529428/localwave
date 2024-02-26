"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface navigationItemProps {
  title: string;
  target: string;
}

const NavigationItem: React.FunctionComponent<navigationItemProps> = ({
  title,
  target,
}) => {
  const pathname = usePathname();

  return (
    <Link
      className={`link nav-item ${pathname === target ? "active" : ""}`}
      href={target}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
