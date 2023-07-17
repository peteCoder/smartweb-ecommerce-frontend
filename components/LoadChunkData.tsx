"use client";

import React, { useEffect, useState } from "react";

interface LoadChunkDataProps {
  children: React.ReactNode;
}

const LoadChunkData: React.FC<LoadChunkDataProps> = ({ children }) => {
  const [DOMHasLoaded, setDOMHasLoaded] = useState(false);
  useEffect(() => {
    setDOMHasLoaded(true);
  }, []);

  if (DOMHasLoaded) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default LoadChunkData;
