import { useEffect } from 'react';

const GithubRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://github.com/mrxehmad';
  }, []);

  return null;
};

export default GithubRedirect; 