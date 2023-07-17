import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={`mr-4 shrink-0 flex md:justify-center md:items-center ${className}`}
    >
      <Link href={"/"} className="mr-4">
        <Image src="/logo.svg" alt="logo" height={40} width={116} />
      </Link>
    </div>
  );
};

export default Logo;
