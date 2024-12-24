"use client";
import Link from "next/link";
import React from "react";
import {useEffect , useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const Page = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");

      const parsedResponse: IProduct[] = await response.json();
      console.log("product >", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);
  return (
  <div>
    <Header/>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2   bg-[#001F3F] ">
      {data.map((product) => (
        <div
          key={product.id}
          className="border-[4px] gap-4 border-black  p-4 rounded-lg shadow-lg bg-[#a3b5a9] "
        >
          <Link href={product.image}>
            <img
              src={product.image}
              alt={product.title}
              className=" mb-4 h-[130px] w-[80px] md:w-[90px] xl:w-[100px] "
            />
          </Link>
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-white">${product.price}</p>
          <p className="text-sm text-black font-bold text-[16px]">{product.category}</p>
          <p className="text-xs text-[#161717]">{product.description}</p>
          <div className="mt-2">
            <p className="text-yellow-300">Rating: {product.rating.rate} / 5</p>
            <p className="text-gray-900">({product.rating.count} reviews)</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Page;
