import training from '../Images/images/tranning.jpg'
import championShip1 from '../Images/images/champion 1.jpg'
import championShip2 from '../Images/images/champion 2.jpg'
import Container from '../Shared/Container';


const AcademyFeature = () => {
    return (
        <Container>

            <h1 className="text-4xl text-center mt-10 font-bold mb-2 animate-fadeInRight text-blue-950">
                Welcome to our Sports Academy
            </h1>
            <p className=' text-stone-500 font-serif mx-auto p-6 text-center'>Welcome to Elite Athlete Arena Academy, where champions are made. Our academy is a premier training facility dedicated to <br />nurturing and honing the skills of elite athletes. With state-of-the-art equipment, world-class coaches, and a supportive <br /> community, we provide a dynamic environment for athletes to reach their full potential. Join us to unlock your <br /> athletic prowess and elevate your performance to new heights</p>
            <div className="bg-gray-100 min-h-screen">
                <section className="container mx-auto p-8 flex justify-between items-center">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img
                                className="lg:w-full rounded-lg h-auto  "
                                src={training}
                                alt="Sports Academy"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-x-10">
                            <h1 className="text-6xl font-bold mb-4 animate-fadeInRight px-10 text-orange-600 ">
                                Join Our Training Programs
                            </h1>
                            <p className="text-lg text-gray-700 animate-fadeInRight mt-3">
                                Join Our Training Programs at Elite Athlete Arena Academy, where we are passionate about helping athletes unleash their full potential. Our comprehensive and specialized training programs are designed to cater to athletes of all levels, from beginners to professionals.

                                At Elite Athlete Arena Academy, we offer a wide range of training options to suit various sports disciplines. Whether you are looking to improve your speed, strength, agility, endurance, or technical skills, our experienced coaches will guide you through personalized training sessions tailored to your specific needs and goals.

                                Our training programs combine cutting-edge techniques, scientific principles, and the latest advancements in sports performance to optimize your athletic abilities. We focus on building a solid foundation, enhancing skill development, and fostering mental resilience to ensure holistic growth and success.
                            </p>
                            <button className="btn btn-outline btn-error btn-sm mt-3">Join Now</button>
                        </div>
                    </div>

                </section>

              
                

                {/* Image and Data Section */}
                <div className="container mx-auto p-8 flex justify-between items-center flex flex-col lg:flex-row">
                    
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold mb-4 animate-fadeInRight">
                            Join Our Tournaments and Competitions
                        </h1>
                        <p className="text-lg text-gray-700 animate-fadeInRight">
                        Participate in thrilling tournaments and competitions at Elite Athlete Arena Academy. We provide a platform for athletes of all levels to showcase their skills, compete with fellow athletes, and experience the exhilaration of sportsmanship.
                        </p>
                    </div>
                    <div className="w-1/2 ">
                        <div className="flex justify-center">
                            <img
                                className="w-1/2 h-auto animate-bounce-x mr-4 animate-pulse rounded-lg"
                                src={championShip1}
                                alt="Sports Academy"
                            />
                            <img
                                className="w-1/2 h-auto animate-bounce-x ml-4 rounded-lg"
                                src={championShip2}
                                alt="Sports Academy"
                            />
                        </div>
                    </div>
                </div>

                {/* Add more sections as needed */}
            </div>
        </Container>
    );
};

export default AcademyFeature;
