import useClasses from "../../hooks/useClasses";
import AllClassesCategory from "../allClassesCategory/allClassesCategory";



const Classes = () => {
    const [classes] = useClasses();

    const football = classes.filter(allClasses => allClasses.category === 'football')
    const tennis = classes.filter(allClasses => allClasses.category === 'tennis')
    const cricket = classes.filter(allClasses => allClasses.category === 'cricket')
    const rugby = classes.filter(allClasses => allClasses.category === 'rugby')
    const basketball = classes.filter(allClasses => allClasses.category === 'basketball')

    return (
        <div className="pt-[120px]">
            <h1 className="text-4xl uppercase font-bold text-center text-orange-700 pb-10">Elite Athlete Arena Academy All Classes </h1>
            <p className="text-center mb-10">This class is dedicated to mastering the forehand stroke in tennis. Participants will receive comprehensive training on grip, swing technique, footwork, and shot placement to improve their forehand skills. Instructor</p>
        
            {/* football classes */}
            <AllClassesCategory classesOfClass={football}/>
            {/* tennis classes */}
            <AllClassesCategory classesOfClass={tennis}/>
            {/* cricket classes */}
            <AllClassesCategory classesOfClass={cricket}/>
            {/* rugby classes */}
            <AllClassesCategory classesOfClass={rugby}/>
            {/* basketball classes */}
            <AllClassesCategory classesOfClass={basketball}/>
        </div>
    );
};

export default Classes;