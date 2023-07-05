import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 py-12 text-white text-center">
      <div className="flex justify-center mb-4">
        <a href="https://twitter.com" className="mr-4">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" className="mr-4">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" className="mr-4">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com">
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-gray-300 text-sm">Copyright © 2023 Fita Wegene</p>
    </div>
  );
};

export default Footer;
