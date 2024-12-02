import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Replace the following import paths with the actual paths to your project images
import wakeOnLan from "../../Assets/Projects/wakeOnLan.png";
import bloggerAutomation from "../../Assets/Projects/bloggerAutomation.png";
import textEncrypt from "../../Assets/Projects/textEncrypt.png";
import zeroTrust from "../../Assets/Projects/zeroTrust.png";
import awsEc2 from "../../Assets/Projects/awsEc2.png";
import docker from "../../Assets/Projects/docker.png";
import piHoleAdlist from "../../Assets/Projects/piHoleAdlist.png";
import blog from "../../Assets/Projects/blog.png";
import tendaListener from "../../Assets/Projects/tendaListener.png";
import usbSoundChange from "../../Assets/Projects/usbSoundChange.png";
import ytThumbnailDownloader from "../../Assets/Projects/ytThumbnailDownloader.png";
import portScanner from "../../Assets/Projects/portScanner.png";
import flareDrive from "../../Assets/Projects/flareDrive.png";
import instagramApi from "../../Assets/Projects/instagramApi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wakeOnLan}
              isBlog={false}
              title="Wake on Lan PHP"
              description="A simple PHP-based web application to manage devices and send Wake-on-LAN (WOL) magic packets to bring devices online."
              ghLink="https://github.com/mrxehmad/wake-on-lan-php"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloggerAutomation}
              isBlog={false}
              title="Blogger Post Automation"
              description="Automates the process of creating blog posts on Blogger by combining random wallpapers and text using Python."
              ghLink="https://github.com/mrxehmad/Blogger-Image-Post-Automation"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textEncrypt}
              isBlog={false}
              title="Text Encrypt and Decrypt"
              description="Web-based application that allows users to encrypt and decrypt messages using AES encryption with a key (password)."
              ghLink="https://github.com/mrxehmad/text-encrypt-and-decrypt"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeroTrust}
              isBlog={false}
              title="Zero Trust Organization"
              description="Setup zero trust application, wrap client to access internal home network application (RDP), monitor and filter wrap client traffic and assign policies."
              ghLink="" // Add GitHub link if available
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awsEc2}
              isBlog={false}
              title="AWS EC2"
              description="Set up an EC2 instance to host a WordPress site, efficiently manage resources, and create a serverless API to control EC2 instances."
              ghLink="" // Add GitHub link if available
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docker}
              isBlog={false}
              title="Docker"
              description="Utilized Docker to host services like Pi-hole for ad-blocking, Casa OS for server management, and Nginx Proxy Manager for web traffic control."
              ghLink="" // Add GitHub link if available
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piHoleAdlist}
              isBlog={false}
              title="Pi-hole Adlist"
              description="Repository providing lists of domains to enhance your Pi-hole, a network-wide ad blocker."
              ghLink="https://github.com/mrxehmad/pi-hole-adlist"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={true}
              title="Blog"
              description="Where I post my errors, developments, and achievements."
              ghLink=""
              demoLink="https://blog.ehmad.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tendaListener}
              isBlog={false}
              title="Tenda Listener - PHP Script"
              description="PHP script for debugging and inspecting HTTP requests from devices connecting to a Tenda router."
              ghLink="https://github.com/mrxehmad/api.cloud.tenda.com.cn"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usbSoundChange}
              isBlog={false}
              title="Change USB Connect Sound Using PowerShell"
              description="PowerShell script to replace the default USB connection sound with a custom sound on your PC."
              ghLink="https://github.com/mrxehmad/change-usb-connect-sound-using-powershell"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytThumbnailDownloader}
              isBlog={false}
              title="YT Thumbnail Downloader"
              description="Web application to preview and download YouTube video thumbnails by pasting the video URL."
              ghLink="https://github.com/mrxehmad/YT-Thumbnail-Downloader"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portScanner}
              isBlog={false}
              title="Port Scanner"
              description="Script that checks an IP address or URL, retrieves details using the Shodan InternetDB API, and displays it in a user-friendly format."
              ghLink="https://github.com/mrxehmad/port-scanner"
              demoLink="" // Add demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flareDrive}
              isBlog={false}
              title="Flare Drive"
              description="Hosting my own Google Drive alternative using Cloudflare for free."
              ghLink=""
              demoLink="https://drive.ehmad.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagramApi}
              isBlog={false}
              title="Instagram Profile API"
              description="API built in Python to fetch an Instagram user's profile picture URL by providing their username."
              ghLink="https://github.com/mrxehmad/Instagram_profile_API"
              demoLink="" // Add demo link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;