import Link from "next/link";
import Image from "next/image";

async function SingleBookPage({ params }) {
  let book = null;

  try {
    const { bookId } = await params;
    const response = await fetch(`${process.env.BACKEND_URL}/books/${bookId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }

    const jsonResponse = await response.json();
    book = jsonResponse.data;
  } catch (err) {
    throw new Error("Error fetching book");
  }
  return (
    <div className="flex max-w-6xl mx-auto gap-8 mb-8">
      <div className="w-2/3 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">{book.title}</h1>
        <p className="text-balance text-xl">
          by <span className="text-custom-red">{book.author.name}</span>
        </p>
        <p className="text-balance">{book.description}</p>

        <Link
          href={book.bookFile}
          target="_blank"
          className="text-white bg-custom-red py-2 px-4 rounded w-fit hover:bg-custom-red/90 hover:-translate-y-0.5 duration-200"
        >
          Download the Book
        </Link>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <Image
          src={book.bookCoverImage}
          alt={book.title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[30rem] w-auto rounded hover:shadow-md hover:-translate-y-0.5 duration-200"
        />
      </div>
    </div>
  );
}

export default SingleBookPage;
