const Footer = () => {
  return (
    <div className="text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex justify-center md:justify-start">
          <h1 className="font-bold text-2xl ml-2">Christ Daniel Santoso</h1>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Project
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/danilkembarankairi"
            target="_blank"
            className="hover:text-blue-400"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/lavieenniel/?next=%2F"
            target="_blank"
            className="hover:text-blue-400"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a
            href="https://www.reddit.com/user/your-profile"
            target="_blank"
            className="hover:text-blue-400"
          >
            <i className="ri-reddit-fill ri-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/christ-daniel-santoso-16450436b/"
            target="_blank"
            className="hover:text-blue-400"
          >
            <i className="ri-linkedin-fill ri-2x ml-0"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
