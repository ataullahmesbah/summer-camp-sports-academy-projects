import AcademyFeature from "../../AcademyFeature/AcademyFeature";
import Banner from "../../Banner/Banner";
import InstructorCata from "../../InstructorCata/InstructorCata";
import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructor from "../../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <AcademyFeature></AcademyFeature>
        </div>
    );
};

export default Home;