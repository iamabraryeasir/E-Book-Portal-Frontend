import Link from "next/link";
import Image from "next/image";
import DownloadButton from "./components/DownloadButton";

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
    <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto gap-8 mb-8 px-4 md:px-4 text-center md:text-left">
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">{book.title}</h1>
        <p className="text-balance text-xl">
          by <span className="text-custom-red">{book.author.name}</span>
        </p>
        <p className="text-balance">{book.description}</p>

        <DownloadButton fileLink={book.bookFile} />
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <Image
          src={book.bookCoverImage}
          alt={book.title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[30rem] w-auto rounded hover:shadow-md hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
}

export default SingleBookPage;
