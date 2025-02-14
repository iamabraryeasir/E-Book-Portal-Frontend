import Image from "next/image";
import Link from "next/link";

function BookCard({ book }) {
  return (
    <div className="bg-gray-50/50 shadow-sm rounded-lg p-4 flex items-start gap-4 hover:shadow-md hover:scale-105 duration-200 border">
      <div className="w-1/3">
        <Image
          src={book.bookCoverImage}
          width={0}
          height={0}
          sizes="100vw"
          alt={book.title}
          className="h-40 w-auto rounded border border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1 w-2/3">
        <h2 className="text-xl font-medium text-custom-red text-balance">{book.title}</h2>
        <p className="text-slate-700">{book.author.name}</p>

        <Link
          href={`/book/${book._id}`}
          className="text-custom-red text-sm py-1.5 px-4 rounded-md border border-custom-red w-fit mt-2 hover:bg-custom-red/5 duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
