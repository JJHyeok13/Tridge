"use client";

import Link from "next/link";

interface CustomLinkComponentProps {
  href: string;
  title: string;
}

const CustomLinkComponent: React.FC<CustomLinkComponentProps> = ({
  href,
  title,
}) => {
  return (
    <Link
      href={href}
      onClick={() => console.log("Link clicked: ", href)}
      className="text-blue-500 underline"
    >
      {title}
    </Link>
  );
};

export default CustomLinkComponent;
