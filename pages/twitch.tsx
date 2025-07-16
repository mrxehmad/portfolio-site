import { useEffect } from 'react';

const XRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://www.twitch.tv/ehm_s';
  }, []);

  return null;
};

export default XRedirect; 