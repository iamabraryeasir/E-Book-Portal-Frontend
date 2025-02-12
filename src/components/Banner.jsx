import Image from "next/image";
import bookImage from "../../public/book.png";

function Banner() {
  return (
    <div className="paper-bg w-full rounded-lg h-44 overflow-hidden">
      <div className="w-full h-full bg-gray-950/35 text-white flex items-center justify-between px-12">
        <p className="text-4xl font-medium w-3/4">
          Connect, Share and Trade Your Favorite Reads...
        </p>

        <div className="w-1/4 h-full flex items-center justify-center">
          <Image src={bookImage} alt="Book" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
