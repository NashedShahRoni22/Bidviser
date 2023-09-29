import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return <div ref={ref} />;
}
