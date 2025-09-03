import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-8 left-8 z-50 w-12 h-12 flex items-center justify-center bg-[#e2ced3]/50 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:bg-[#66496a]/50 group"
      aria-label="Go back to home page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#66496a] transition-colors group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
};

export default BackButton;
