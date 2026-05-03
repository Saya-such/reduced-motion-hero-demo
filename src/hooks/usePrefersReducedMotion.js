import { useState, useEffect } from "react";

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReduced(mediaQuery.matches);

    mediaQuery.addEventListener("change", () => setReduced((prev) => !prev));

    return () => {
      mediaQuery.removeEventListener("change", () =>
        setReduced((prev) => !prev),
      );
    };
  }, []);

  return reduced;
};

export default usePrefersReducedMotion;
