import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SocialRedirect = () => {
  const router = useRouter();
  const { platform } = router.query;

  useEffect(() => {
    if (platform && typeof platform === 'string') {
      const redirects: Record<string, string> = {
        linkedin: 'https://www.linkedin.com/in/ehmi/',
        x: 'https://x.com/Ehmi0k',
        discord: 'https://discord.com/users/xehmad',
        github: 'https://github.com/mrxehmad',
        instagram: 'https://www.instagram.com/ehmi._/'
      };

      if (redirects[platform]) {
        window.location.href = redirects[platform];
      }
    }
  }, [platform]);

  return null;
};

export default SocialRedirect; 