
import AllClasses from "../AllClasses/AllClasses";
import Container from "../Shared/Container";


const AllClassesCategory = ({classesOfClass}) => {
    return (
       <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classesOfClass.map(allClass => <AllClasses
                        key={allClass._id}
                        allClass={allClass}
                    ></AllClasses>)
                }
            </div>
       </Container>
    );
};

export default AllClassesCategory;