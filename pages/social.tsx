import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, MessageCircle, Send, Twitch, Mail, Youtube } from 'lucide-react';

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ehmi/",
    icon: Linkedin,
    color: "#0A66C2"
  },
  {
    name: "GitHub",
    url: "https://github.com/mrxehmad",
    icon: Github,
    color: "#181717"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@DevOpsDen",
    icon: Youtube,
    color: "#FF0000"
  },
  {
    name: "Discord",
    url: "https://discord.com/users/xehmad",
    icon: MessageCircle,
    color: "#5865F2"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/Ehmi0k",
    icon: Twitter,
    color: "#000000"
  },
  {
    name: "Telegram",
    url: "https://t.me/xehmi",
    icon: Send,
    color: "#26A5E4"
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/add/xehmii",
    icon: MessageCircle,
    color: "#FFFC00"
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/ehm_s",
    icon: Twitch,
    color: "#9146FF"
  },
  {
    name: "Line",
    url: "https://line.me/ti/6xYUgrXqEA",
    icon: MessageCircle,
    color: "#00B900"
  },
  {
    name: "Email",
    url: "mailto:hi@ehmi.se",
    icon: Mail,
    color: "#EA4335"
  },
];

const SocialLinks = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-theme py-20 px-4 transition-colors duration-300">
      
      {/* Header */}
      <div className={`mb-10 text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h1 className="text-4xl font-black mb-2 dark:text-gray-100 text-gray-900 uppercase tracking-tight">
          All My Links
        </h1>
      </div>

      {/* Links */}
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative transition-all duration-500 ${
                  mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="
                  relative rounded-2xl px-6 py-4 
                  flex items-center gap-4
                  transition-all duration-300
                  backdrop-blur-xl
                  bg-white dark:bg-gray-800
                  hover:bg-gray-50 dark:hover:bg-gray-700
                  border border-gray-200 dark:border-gray-700
                  hover:border-gray-300 dark:hover:border-gray-600
                  shadow-sm hover:shadow-md dark:shadow-none
                  active:scale-[0.98]
                  hover:scale-[1.02]
                ">
                  {/* Icon */}
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${link.color}15`,
                    }}
                  >
                    <Icon 
                      className="w-5 h-5" 
                      strokeWidth={2.5}
                      style={{ color: link.color }}
                    />
                  </div>
                  
                  {/* Text */}
                  <span className="flex-1 text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                    {link.name}
                  </span>
                  
                  {/* Arrow */}
                  <svg 
                    className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 text-gray-500 dark:text-gray-400"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;