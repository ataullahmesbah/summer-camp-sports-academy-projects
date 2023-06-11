
import { useState } from "react";
import useClasses from "../../hooks/useClasses";
import PopularClass from "../PopularClass/PopularClass";
import Container from "../Shared/Container";

const PopularClasses = () => {
  const [classes] = useClasses();
  const slicedClasses = classes.slice(0, 6);
  

  return (
    <div className="">
      <h2 className="text-5xl font-bold text-center mt-10 mb-10 text-blue-950">Elite Athlete Arena: <span className="text-gray-500">Top Classes</span></h2>
      <p className="text-center text-stone-500 font-serif mb-8">Discover the finest selection of top-rated classes at Elite Athlete Arena. Our carefully curated list showcases the best classes <br /> for elite athletes like you. Whether you are looking to enhance your performance, improve your skills, <br /> or challenge yourself, these classes are designed to take you to new heights.</p>
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20 ml-20">
        
      {slicedClasses.map(item => (
        <PopularClass key={item.name} item={item} />
      ))}
    </div>
      </Container>
    </div>
  );
};



export default PopularClasses;
