import React from "react";

const ContactMe = ({sectionRef}) => {
  return (
    <div id="contact"  className="bg-gray-100 h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Feel free to reach out to me if you have any questions or want to
            discuss a project.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Email address:</p>
                <a
                  href="mailto:fi27ta@gmail.com"
                  className="mt-1 text-blue-500 hover:underline"
                >
                  fi27ta@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Phone number:</p>
                <p className="mt-1 text-blue-500">+251-941-024-355</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Social Media</h3>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Connect with me on:</p>
                <ul className="mt-2  flex justify-around">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/fita-wegene1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="https://t.me.com/fita_wegene"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/fi-taa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
