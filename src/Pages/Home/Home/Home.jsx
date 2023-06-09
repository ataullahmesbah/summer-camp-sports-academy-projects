import AcademyFeature from "../../AcademyFeature/AcademyFeature";
import Banner from "../../Banner/Banner";
import PopularClasses from "../../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <AcademyFeature></AcademyFeature>
        </div>
    );
};

export default Home;