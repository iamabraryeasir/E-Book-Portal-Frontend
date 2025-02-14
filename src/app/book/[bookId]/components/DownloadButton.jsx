"use client";

function DownloadButton({ fileLink }) {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="text-white bg-custom-red py-2 px-4 rounded w-fit hover:bg-custom-red/90 hover:-translate-y-0.5 duration-200 mt-4 mx-auto md:mx-0"
    >
      Download the Book
    </button>
  );
}

export default DownloadButton;
