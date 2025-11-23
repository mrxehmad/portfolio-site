import MetaTags from "@components/MetaTags";

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ehmi/",
  },
  {
    name: "GitHub",
    url: "https://github.com/mrxehmad",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/Ehmi0k",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/xehmad",
  },
  {
    name: "Telegram",
    url: "https://t.me/xehmi",
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/ehm_s",
  },
  {
    name: "Line",
    url: "https://line.me/ti/6xYUgrXqEA",
  },
  {
    name: "Email",
    url: "mailto:hi@ehmi.se",
  },
];

const SocialLinks = () => {
  return (
    <>
      <MetaTags title="All My Links" />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-theme py-20 px-4">
        <h1 className="text-4xl font-main font-black mb-8 dark:text-gray-100 text-center uppercase">All My Links</h1>
        <div className="w-full max-w-md flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-6 rounded-lg bg-primary text-black font-semibold font-main text-lg shadow hover:bg-opacity-90 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default SocialLinks; 
