import { useEffect } from 'react';
// This file redirects to LinkedIn profile
const LinkedInRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/in/ehmi/';
  }, []);

  return null;
};

export default LinkedInRedirect; 