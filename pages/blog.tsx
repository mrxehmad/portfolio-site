import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.location.href = 'https://blog.ehmad.site';
  }, []);

  return null;
};

export default Blog; 