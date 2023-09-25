"use client"

import React, { useEffect } from 'react';

const AutoClick = ({ onClick }) => {
  useEffect(() => {
    onClick();
  }, [onClick]);

  return null; // This component doesn't render anything
};

export default AutoClick;