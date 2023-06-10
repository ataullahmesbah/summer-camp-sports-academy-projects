
import useClasses from "../../hooks/useClasses";
import PopularClass from "../PopularClass/PopularClass";
import Container from "../Shared/Container";

const PopularClasses = () => {
  const [classes] = useClasses();
  const slicedClasses = classes.slice(0, 6);

  return (
    <div className="">
      <h2 className="text-5xl font-bold text-center mt-10 mb-10">Top Classes</h2>
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
