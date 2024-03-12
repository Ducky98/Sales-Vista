import React from "react";

/**
 * Introduction component displaying project details and key steps for Sales Vista.
 */
const Introduction = () => {
  return (
    <div className="w-full mx-auto py-8 px-4 bg-white rounded md:max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Sales Vista</h1>
      <div className="text-justify">
        <p className="mb-4">
          <b>Project Name:</b> Sales Vista
        </p>
        <p className="mb-4">
          <b>Objective:</b> Develop a sales entry web application using React.js, Material-UI, and Tailwind CSS for frontend, and Node.js, Express.js, JWT, and MongoDB (Mongoose) for backend.
        </p>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Key Steps:</h4>
          <ul className="list-disc list-inside">
            <li>Set up a new React JS application using create-react-app.</li>
            <li>Integrated Material-UI and Tailwind CSS for styling and design.</li>
            <li>Implemented user authentication using JWT.</li>
            <li>Developed backend APIs using Node.js and Express.js for handling sales data.</li>
            <li>Utilized MongoDB (Mongoose) for data storage.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Next Steps:</h4>
          <ul className="list-disc list-inside">
            <li>Review and refine the design to ensure it meets the provided requirements and aligns with best practices.</li>
            <li>Test the application thoroughly across various devices and screen sizes to ensure proper responsiveness and functionality.</li>
            <li>Refactor and optimize code as needed for better performance and maintainability.</li>
            <li>Document the code and add comments for better readability and understanding.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
