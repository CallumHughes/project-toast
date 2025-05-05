import { useEffect } from "react";

export const useEscapeKey = (callback) => {
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [callback]);
};
