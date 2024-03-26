import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    wits,
    tirhani,
    altron,
    vrm,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    cplusplus,
    kasi,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: ".Net Developer",
      icon: backend,
    },
    {
      title: "Front-end Developer",
      icon: reactjs,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "cpp",
      icon: cplusplus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Developer - Freelancing",
      company_name: "Tirhani IT Group",
      icon: tirhani,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "IT Support Technician",
      company_name: "Visual Revenue Management/ Cigicell",
      icon: vrm,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Present",
      points: [
        "Install and configure hardware and software components",
        "Repair or replace damaged hardware",
        "Manage Data Backup and Recovery",
        "Upgrade systems to enable compatible software",
        "Install and upgrade antivirus software",
        "Travel to client sites",
        "Perform tests on new hardware and software",
        "Define software, hardware and network requirements",
        "Troubleshoot hardware and software issues",

      ],
    },
    {
      title: "IT Support Consultant",
      company_name: "Wits University",
      icon: wits,
      iconBg: "#383E56",
      date: "Aug 2018 - May 2021",
      points: [
        "Managing 1st ,2nd, and 3rd line support and service requests using Service Now, following an ITIL model with opportunities to support a variety of technologies.",
        "Effective troubleshooting, to assist in the resolution of single user and larger scale support issues in an effective and timely manner.",
        "Delivery of all IT support contacts via the required service delivery model (e.g. phone, chat, self-service, deskside visit, walk-up service, etc.).",
        "Set up hardware and software {including workstations with computers and necessary peripheral devices (routers, printers etc.)} in optimal configurations to meet network performance requirements.",
        "Investigated and corrected problems with computer hardware (HDD, mouse's, keyboards etc.) and other peripheral devices to ensure functionality.",
        "Responded to support requests from end users and patiently walked individuals through basic troubleshooting tasks.",
        "Assessed system hardware, local networks and software and suggested modifications to reduce lag time and improve overall speed.",
        "Installed and configured appropriate software and functions according to specifications.",
        "Organize and schedule upgrades and maintenance without deterring others from completing their work.",
        "Perform troubleshooting to diagnose and resolve problems (repair or replace parts, debugging etc.).",
        "Maintain records/logs of repairs and fixes and maintenance schedule.",
        "Identify computer or network equipment shortages and place order.",

      ],
    },
    {
      title: "System Administrator Learnership",
      company_name: "Altron Bytes People's Solutions",
      icon: altron,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Aug 2018",
      points: [
        "Tracked problematic system errors by implementing various user support tracking metrics, also adding/removing users in Active Directory.",
        "Efficiently resolved myriad of technical issues concerning software installation, troubleshooting and network connectivity.",
        "Patched software and installed new versions to eliminate security problems and protect/backup data.",
        "Offered technical guidance and advised users of alternative approaches when troubleshooting.",
        "Maintained computer systems, installed, and upgraded software and hardware when needed.",
        "Removed malware, ransomware and other threats from laptops and desktop systems.",
        "Helped streamline repair processes and update procedures for support action consistency.",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };