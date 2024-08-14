import Link from "next/link";
import { siteConfig } from "../config/site";

interface SocialLink {
  href: string;
  icon: React.ReactNode; // Adjust this type according to the actual type of icon
}

interface SocialProps {
  containerStyles?: string; 
  iconStyles?: string; 
}

const Social = ({ containerStyles, iconStyles }:SocialProps) => {
  return (
    <div className={containerStyles}>
      {siteConfig.links.map((item: SocialLink, index) => (
        <Link href={item.href} key={index} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
