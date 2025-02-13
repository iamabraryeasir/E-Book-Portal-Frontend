import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0 mb-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default BookList;
