import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Scrool() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      
    });
  }, [pathname]);
  

  return null;
}

export default Scrool;
