import BookCard from "./BookCard";

async function BookList() {
  let books = null;

  try {
    // data fetching
    const response = await fetch(`${process.env.BACKEND_URL}/books`, {
      // cache: "no-store", // disable caching
      next: {
        revalidate: 1800, // revalidate every 30 minutes
      },
    });

    // error handling
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    // data processing
    const jsonResponse = await response.json();
    books = jsonResponse.data;
  } catch (error) {
    throw new Error("Error fetching books");
  }
  return (
    <>
      <h1 className="text-2xl text-center  font-semibold mb-2">Top Books</h1>

      <hr className="mb-5" />

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0 mb-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default BookList;
