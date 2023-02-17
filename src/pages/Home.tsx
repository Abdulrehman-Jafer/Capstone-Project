import React, { useContext } from "react";
import { Navbar } from "../Components/Navbar";
import { CapstoneContext } from "../CapstoneContext";
import { Image } from "../Components/Image";
export const Home = () => {
  const { imageData } = useContext(CapstoneContext);

  const mappedData = imageData.map(({ id, url, isFavorite }) => (
    <Image key={id} id={id} url={url} isFavorite={isFavorite} />
  ));

  return (
    <main>
      {<Navbar />}
      <section className="p-3 w-[100%] h-[40rem]">
        <div className="flex gap-2 flex-wrap justify-center">
          {imageData.length ? mappedData : <div className="loader"></div>
          }
        </div>
      </section>
    </main>
  );
};
