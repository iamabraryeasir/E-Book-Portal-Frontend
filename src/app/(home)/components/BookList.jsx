import BookCard from "./BookCard";

async function BookList() {
  // data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/books`);

  // error handling
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  // data processing
  const jsonResponse = await response.json();
  const books = jsonResponse.data;

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
