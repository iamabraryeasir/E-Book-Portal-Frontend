import Image from "next/image";

function Banner() {
  return (
    <div className="px-4 md:px-0">
      <div className="paper-bg w-full rounded-lg h-32 md:h-48  overflow-hidden mb-8">
        <div className="w-full h-full bg-gray-950/25 text-white flex items-center justify-between px-6 md:px-12">
          <p className="text-xl md:text-4xl font-medium w-3/4">
            Connect, Share and Trade Your Favorite Reads...
          </p>

          <div className="w-1/4 h-full flex items-center justify-center">
            <Image
              src={"/book.png"}
              alt="Book"
              className="h-full w-fit"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
