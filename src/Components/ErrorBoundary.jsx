// ErrorBoundary.js
import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [error, setError] = useState(false);
  useEffect(() => {
    const handleError = () => {
      setError(true);
    };
    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (error) {
    return <div className="">Opps, something went wrong. Please try again</div>;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
