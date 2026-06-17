import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const pathChanged = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    if (hash) {
      // If there's a hash, scroll to that element after DOM renders
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      });
    } else if (pathChanged) {
      // Only scroll to top if the pathname actually changed (not just hash)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
