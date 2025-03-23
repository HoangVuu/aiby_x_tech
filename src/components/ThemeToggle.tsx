"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙" : "☀️"}
      <style jsx>{`
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
          padding: 0.5rem;
          border-radius: 50%;
          margin-left: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
          opacity: 0.8;
          transform: scale(1.1);
        }
      `}</style>
    </button>
  );
};

export { ThemeToggle };