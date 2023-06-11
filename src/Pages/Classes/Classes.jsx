import useClasses from "../../hooks/useClasses";
import AllClassesCategory from "../allClassesCategory/allClassesCategory";
import AllClasses from "../AllClasses/AllClasses";
import Container from "../Shared/Container";



const Classes = () => {
    const [classes] = useClasses();

    // const football = classes.filter(allClasses => allClasses.category === 'football')
    // const tennis = classes.filter(allClasses => allClasses.category === 'tennis')
    // const cricket = classes.filter(allClasses => allClasses.category === 'cricket')
    // const rugby = classes.filter(allClasses => allClasses.category === 'rugby')
    // const basketball = classes.filter(allClasses => allClasses.category === 'basketball')

    return (
        <div className="pt-[140px]">
            <h1 className="text-4xl uppercase font-bold text-center text-orange-700 pb-5"><span className="text-blue-900">Elite Athlete Arena:</span> <span className="text-stone-500">Academy All Classes</span> </h1>
            <p className="text-center mb-10 font-serif text-gray-600">This class is dedicated to mastering the forehand stroke in tennis. Participants will receive comprehensive training on grip, swing technique, <br /> footwork, and shot placement to improve their forehand skills. Instructor</p>

            <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 lg:mx-44">
                {
                    classes.map(allClass => <AllClasses
                        key={allClass._id}
                        allClass={allClass}
                    ></AllClasses>)
                }
            </div>
       </Container>
        
            {/* football classes */}
            {/* <AllClassesCategory classesOfClass={football}/> */}
            {/* tennis classes */}
            {/* <AllClassesCategory classesOfClass={tennis}/> */}
            {/* cricket classes */}
            {/* <AllClassesCategory classesOfClass={cricket}/> */}
            {/* rugby classes */}
            {/* <AllClassesCategory classesOfClass={rugby}/> */}
            {/* basketball classes */}
            {/* <AllClassesCategory classesOfClass={basketball}/> */}
            
        </div>
    );
};

export default Classes;