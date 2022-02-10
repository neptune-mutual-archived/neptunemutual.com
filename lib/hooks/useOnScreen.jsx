import { useState, useEffect } from "react";

export function useOnScreen(ref, threshold = 0.3) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
