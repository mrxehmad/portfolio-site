import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LinkedInRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/in/it-guy-ahmad/';
  }, []);

  return null;
};

export default LinkedInRedirect; 