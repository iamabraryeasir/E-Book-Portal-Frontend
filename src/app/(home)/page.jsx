import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* top banner */}
      <Banner />

      {/* book cards */}
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </div>
  );
}
