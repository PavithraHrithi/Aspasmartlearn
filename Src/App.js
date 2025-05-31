import React from 'react';

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between flex-col sm:flex-row">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            {/* Logo - Larger on desktop */}
            <img
              src="https://placehold.co/60x60/3498db/ffffff?text=LOGO"
              alt="Website Logo"
              className="w-10 h-10 rounded-full shadow-md lg:w-16 lg:h-16 transition-all duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/cccccc/333333?text=Logo'; }}
            />
            {/* Website Name - Larger on desktop */}
            <h1 className="text-2xl font-bold lg:text-4xl transition-all duration-300 ease-in-out">
              My Awesome Site
            </h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-4 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-200">Services</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto p-4 flex-grow">
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Welcome to Our Website!</h2>
          <p className="text-lg leading-relaxed">
            This is a responsive web application built with React and styled using Tailwind CSS.
            It's designed to look great on all devices, from mobile phones to large desktop monitors.
          </p>
          <p className="mt-4 text-base">
            We've adjusted the header elements to ensure the logo and site name are more prominent on desktop screens.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Feature One</h3>
            <p className="text-gray-700">
              Discover amazing functionalities that will streamline your daily tasks and enhance your experience.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Feature Two</h3>
            <p className="text-gray-700">
              Enjoy a seamless user interface designed for intuitive navigation and ease of use.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Feature Three</h3>
            <p className="text-gray-700">
              Benefit from robust and reliable performance, ensuring your data is always safe and accessible.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-6">
        <div className="container mx-auto">
          <p>&copy; 2025 My Awesome Site. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

