import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="bg-white shadow-md mb-6">
        <nav className="py-3.5 max-w-6xl mx-auto flex justify-between items-center">
          <span>
            <Link href={"/"} className="flex items-center space-x-2">
              <img className="h-9" src="/ebook.png" alt="Main Logo" />
              <span className="uppercase font-semibold text-2xl text-custom-red">
                DevBook's
              </span>
            </Link>
          </span>

          <span className="space-x-4">
            <Link
              href={"/signin"}
              className="text-custom-red font-medium py-1.5 px-4 rounded-md border-2 border-custom-red"
            >
              Sign up
            </Link>
            <Link
              href={"/signup"}
              className="bg-custom-red text-white py-1.5 px-4 rounded-md border border-custom-red"
            >
              Sign in
            </Link>
          </span>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
