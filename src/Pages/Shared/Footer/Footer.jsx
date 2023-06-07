import Container from "../Container";


const Footer = () => {
  return (
    <Container>
        <footer className="bg-gray-900 text-white mt-10 pt-10">
      <div className="container mx-auto py-4 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div className="mx-5">
            <h3 className="text-xl font-bold">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo ut felis lobortis aliquet.</p>
          </div>
          
          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="list-none">
              <li>Training Programs</li>
              <li>Fitness Classes</li>
              <li>Coaching</li>
            </ul>
          </div>
          
          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-bold">Contact</h3>
            <p>123 Street, City</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          
          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/your-fb-page" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2 text-center">
        <p className="text-sm text-gray-500">© 2023 Elite Athlete Arena. All rights reserved.</p>
      </div>
    </footer>
    </Container>
  );
};

export default Footer;
