import usePopularInstructor from "../../hooks/usePopularInstructor";
import InstructorCata from "../InstructorCata/InstructorCata";


const PopularInstructor = () => {
  const [instructors] = usePopularInstructor();
  

  const instructor = instructors.filter(instarctorCata => instarctorCata.role === 'instructor')

  return (
    <div>


     {/* <AllClassesCategory classesOfClass={football}/> */}
     {
        <InstructorCata popularInstractor={instructor}/>
     }
    </div>
  );
};

export default PopularInstructor;
