import FamousInstractor from "../FamousInstractor/FamousInstractor";
import Container from "../Shared/Container";


const InstructorCata = ({popularInstractor}) => {

    const slicedInstractor = popularInstractor.slice(0, 6);
    return (
        <Container>

<h2 className="text-5xl font-bold text-center mt-10 mb-10 text-blue-950">Master Instructor: <span className="text-gray-500">Expert Educator and Mentor</span></h2>
      <p className="text-center text-stone-500 font-serif mb-10">The Senior Master Instructor is the pinnacle of instructional excellence, representing the highest level of expertise <br /> and leadership in their field. With an exceptional track record and extensive experience, they are regarded as a thought <br /> leader and role model within their industry.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 lg:mx-44">
                {
                    slicedInstractor.map(famous => <FamousInstractor
                    key={famous._id} famous={famous}
                    ></FamousInstractor>)
                }
            </div>
       </Container>
    );
};

export default InstructorCata;