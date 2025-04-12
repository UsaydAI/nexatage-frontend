import Image from "next/image";
function SocialMedia() {
  return (
    <div className="mx-[40%]">
      <ul className=" flex flex-row content-center gap-x-6 m-10 mx-0">
        <li>
          <a href="www.instagram.com">
            <Image
              src="/images/instagram.svg"
              width={24}
              height={24}
              alt="instagram"
            />
          </a>
        </li>
        <li>
          <a href="www.linkedin.com">
            <Image
              src="/images/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="www.x.com">
            <Image src="/images/x.svg" width={24} height={24} alt="x" />
          </a>
        </li>
        <li>
          <a href="www.whatsapp.com">
            <Image
              src="/images/whatsapp.svg"
              width={24}
              height={24}
              alt="whatsapp"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
