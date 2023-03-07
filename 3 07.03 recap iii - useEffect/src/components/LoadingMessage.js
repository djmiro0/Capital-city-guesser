import { useEffect } from "react";

export function LoadingMessage() {
  useEffect(() => {
    // cleanup function
    return () => {
      console.log("component has unmounted!");
    };
  }, []);

  return (
    <>
      <p>Loading....!</p>
    </>
  );
}
