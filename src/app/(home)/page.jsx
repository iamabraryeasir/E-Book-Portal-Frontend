import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  // data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/books`);

  // // error handling
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  // data processing
  const jsonResponse = await response.json();
  const books = jsonResponse.data;

  return (
    <div className="max-w-6xl mx-auto">
      {/* top banner */}
      <Banner />

      {/* book cards */}
      <BookList books={books} />
    </div>
  );
}
