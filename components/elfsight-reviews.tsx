"use client";

import { useEffect } from "react";

export default function ElfsightReviews() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]'))
      return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-76bcf5ef-8529-4049-9a40-6d69b12c82de"
      data-elfsight-app-lazy
    />
  );
}
