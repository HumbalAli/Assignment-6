import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Page = async () => {
  try {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const data: IBook[] = await response.json();

    return (
      <div>
        <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 bg-[#001F3F] h-screen p-6">
        {data.map((book) => (
          <div key={book.id} className="border-[4px] gap-2 border-black p-4 rounded-lg shadow-lg bg-[#90b29c]">
            <h2 className="text-lg font-semibold mb-2">Name: {book.name}</h2>
            <p className="text-white">Type: {book.type}</p>
            <p className="text-sm text-black font-bold text-[16px]">
              Available: {book.available ? "true" : "false"}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    return <div>Error fetching books.</div>;
  }
};

export default Page;
