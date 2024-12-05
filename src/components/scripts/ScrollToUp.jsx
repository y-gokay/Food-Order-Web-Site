import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToUp = ({}) => {
  const { pathname } = useLocation();
  // Sayfa geçişlerinde sayfayı yukarıya kaydırmayı sağlar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToUp;
