import React from "react";

const Into = () => {
  return (
    <div className="max-w-lg mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Thought Note</h1>
      <div className="text-justify">
        <p className="mb-4">
          <b>Project Name:</b> Web App Design - Module Assignment
        </p>
        <p className="mb-4">
          <b>Objective:</b> Create a responsive web application using React.js,
          Material-UI, and Tailwind CSS as per the provided design.
        </p>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Key Steps:</h4>
          <ul className="list-disc list-inside">
            <li>Created a new React JS application using create-react-app.</li>
            <li>Integrated Material-UI and Tailwind CSS for styling and design.</li>
            <li>Implementing responsive design principles effectively using Material-UI and Tailwind CSS.</li>
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

export default Into;
