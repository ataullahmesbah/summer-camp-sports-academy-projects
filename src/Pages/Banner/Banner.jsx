import { useEffect } from 'react';
import banner1 from '../Images/banner/ban 1.jpg'
import banner2 from '../Images/banner/ban 2.jpg'
import banner3 from '../Images/banner/ban 3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from '../Shared/Container';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <Container>
            <div className="carousel w-full " data-aos="zoom-in ">

                <div id="slide1" className="carousel-item relative w-full md:mt-24 mt-[120px]">
                    <img className='w-full rounded-lg' src={banner1} alt="" />

                    <div className="absolute flex rounded-xl items-center lg:h-full md:h-full h-44 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white space-y-7 pl-5 md:pl-20 lg:pl-20 md:w-1/2 lg:w-1/2'>
                            <h2 className='lg:text-6xl text-xl md:text-3xl font-bold'>Welcome to Elite Athlete Arena</h2>
                            <p className='text-xs lg:text-xl'>Take Your Performance to the Next Level at Elite Athlete Arena! Unleash Your Potential at Elite Athlete Arena!</p>
                            <div className="flex  justify-center md:justify-start lg:justify-start gap-2">
                                <button className="btn btn-outline btn-secondary md:w-auto lg:w-auto">Unlock Your Potential</button>
                                <button className="btn btn-outline btn-accent">Our Elite Community</button>
                            </div>
                        </div>

                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full md:mt-24 mt-[120px]">
                    <img src={banner2} className="w-full rounded-lg" />
                    <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-5 md:pl-20 w-1/2'>
                            <h2 className='text-6xl font-bold md:text-3xl'>Peak Athletic Academy - Athletic Excellence Center</h2>
                            <p>Reach the pinnacle of athleticism through comprehensive training. Nurture your talent and become a sports prodigy under expert guidance.</p>
                            <div className="flex flex-wrap justify-center md:justify-start lg:justify-start gap-2">
                                <button className="btn btn-outline btn-secondary">Experience Greatness</button>
                                <button className="btn btn-outline btn-accent">Our Elite Community</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full md:mt-24 mt-[120px]">
                    <img src={banner3} className="w-full rounded-lg" />
                    <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-5 md:pl-20 w-1/2'>
                            <h2 className='text-6xl font-bold md:text-3xl'>Supreme Performance Center, Claim Your Victory</h2>
                            <p>Master your craft and become a professional athlete. Reach the pinnacle of athleticism through comprehensive training.</p>
                            <div className="flex  justify-center md:justify-start lg:justify-start gap-2">
                                <button className="btn btn-outline btn-secondary">Ascend to Greatness</button>
                                <button className="btn btn-outline btn-accent">Our Elite Community</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Banner;

