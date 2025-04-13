import Image from "next/image";
import Link from "next/link"
function Button({ buttonText, backgroundColor, textColor }) {
  return (
    <Link href = "/contact">
      <button className = {`flex flex-row gap-3 ${backgroundColor} ${textColor} text-white text-center text-base rounded-full p-2 px-4 border-gradient m-auto`}>
        <span>{buttonText}</span>
        <Image src = "/images/arrow-up.svg" width = {24} height={24} alt = "arrow-up" className="inline" />
      </button>
    </Link>
  );
}

export default Button;
