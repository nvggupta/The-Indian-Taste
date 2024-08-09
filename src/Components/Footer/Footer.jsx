
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gray-900 text-white p-5">
      <div className="grid md:grid-cols-3  grid-cols-2  mx-auto">
        <div>
          <h5 className="uppercase font-bold mb-4">Company</h5>
          <ul>
            <li className="mb-2"><a href="#">About us</a></li>
            <li className="mb-2"><a href="#">Team</a></li>
            <li className="mb-2"><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase font-bold mb-4">Legal</h5>
          <ul>
            <li className="mb-2"><a href="#">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#">Refund & Cancellation</a></li>
            <li className="mb-2"><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h5 className="uppercase font-bold mb-4">Follow us</h5>
          <div className="flex justify-center mb-4">
            <a href="#" className="mr-4"><FaFacebook size={24} /></a>
            <a href="#" className="mr-4"><FaInstagram size={24} /></a>
            <a href="#"><FaTwitter size={24} /></a>
          </div>
          <p>Receive exclusive offers in your mailbox</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l" />
            <button className="bg-red-600 text-white p-2 rounded-r">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>All rights reserved © The Indian Taste</p>
      </div>
    </div>
  );
}

export default Footer;
