import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const MetaTags = ({ 
  title, 
  description = "Ehmi - DevOps Engineer & Security Specialist. Experienced in Docker, Kubernetes, Jenkins, AWS, Terraform, and Ansible. Passionate about automating workflows, securing systems, and building scalable infrastructures.",
  keywords = "DevOps, Network Security, Application Security, Docker, Kubernetes, Jenkins, AWS, Terraform, Ansible, CI/CD, Linux, Git, Python, Bash Scripting, Infrastructure as Code, Monitoring & Logging",
  image = "/og-image.png",
  url = "https://ehmad.site"
}: MetaTagsProps) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | Ehmi</title>
      <meta name="title" content={`${title} | Ehmi`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ehmi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | Ehmi`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | Ehmi`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default MetaTags;
