import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FlightIcon from "@material-ui/icons/Flight";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { Pool, SportsEsports } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import netflix_image from "../assets/images/netflix.PNG";
import start_up from "../assets/images/start_up.PNG";
import robo_friends from "../assets/images/robo_friends.PNG";
import news_app from "../assets/images/news_app.PNG";
import textutiles_app from "../assets/images/textutiles_app.PNG";
import face_detection from "../assets/images/face_detection.PNG";
import amazon_clone from "../assets/images/amazon_clone.PNG";

let data = {
  name: "Gadekar Sandip",
  title: "Front End Developer",
  dob: "18th july 1998",
  email: "sandip18gadekar@gmail.com",
  address: "At-Waghalgaon,Post-Pimpalgaon,Tq-Phulambri,Dist-Aurangabad",

  contact: {
    Address: {
      value: "At-Waghalgaon,Post-Pimpalgaon,Tq-Phulambri,Dist-Aurangabad",
    },
    Phone: {
      value: "+919765357545",
    },
    Email: {
      value: "sandip18gadekar@gmail.com",
    },
  },

  socials: {
    facebook: {
      link: "https://www.facebook.com/sandip.gadekar.9849/",
      text: "Facebook",
      icon: <FacebookIcon />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/sandip-gadekar-515b04157/",
      text: "Linkedin",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://github.com/sandip-gadekar/",
      text: "Github",
      icon: <GitHubIcon />,
    },
    instagram: {
      link: "https://www.instagram.com/gadekar378/",
      text: "Instagram",
      icon: <InstagramIcon />,
    },
  },

  about:
    "Hello, I'm Gadekar Sandip. \n I'm a Front End Developer Specialized in React.",

  education: [
    {
      title: "Bachelor of Engineering",
      course: "Computer Science and Engineering",
      date: "2017 - 2020",
      description: "GCOEJ.",
    },
    {
      title: "Diploma",
      course: "Computer Engineering",
      date: "2014 - 2017",
      description: "CSMSS College of Polytechnic Aurangabad.",
    },
    {
      title: "SSC",
      course: "State Board of Maharashtra",
      date: "2013 - 2014",
      description: "Rajashri Shahu School Pathri",
    },
  ],

  languages: ["English", "Hindi", "Marathi"],

  skilss: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "Javascript", "Boostrap"],
    },
    {
      title: "BACKE-END",
      description: ["NodeJs", "Express", "Java"],
    },
    {
      title: "DATABASES",
      description: ["MySQL", "MongoDB"],
    },
    {
      title: "VERSION CONTROL",
      description: ["GitHub"],
    },
    {
      title: "TOOLS",
      description: ["VSCode", "Sublime Text"],
    },
  ],

  projects: [
    {
      tag: "React",
      title: "Start-Up-Page",
      caption: "Business startup page",
      image: start_up,
      thumb: start_up,
      description:
        "Devloped using HTML, CSS and mailchimp to collect contact details so business owner can directly contact to customers by using mail ids and mobile number",
      links: [
        {
          link: "https://github.com/sandip-gadekar/startup.github.io",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sandip-gadekar.github.io/startup.github.io/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Robo-Friends",
      caption: "Robo Friends using API",
      image: robo_friends,
      thumb: robo_friends,
      description: "Robo friends app developed by using API",
      links: [
        {
          link: "https://github.com/sandip-gadekar/RoboFriends",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sandip-gadekar.github.io/RoboFriends/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Text-Utiles",
      caption: "Text utiles app",
      image: textutiles_app,
      thumb: textutiles_app,
      description:
        "Text utiles app use to convert string/paragraph from L2U, U2L,remove extra spaces and copy converted text.  ",
      links: [
        {
          link: "https://github.com/sandip-gadekar/Textutiles",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sandip-gadekar.github.io/Textutiles/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "News-App",
      caption: "News app using news API, Currently API key is not working ",
      image: news_app,
      thumb: news_app,
      description: "News app using news API, Currently API key is not working",
      links: [
        {
          link: "https://github.com/sandip-gadekar/newsapp",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sandip-gadekar.github.io/newsapp/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Face_Detection",
      caption: "Detect face after giving image url",
      image: face_detection,
      thumb: face_detection,
      description:
        "Face Detection app using clarifai API, Detect face after giving image url",
      links: [
        {
          link: "https://github.com/sandip-gadekar/face-detection-frontend",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sandip-gadekar.github.io/face-detection-frontend/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "React",
      title: "Amazon_colone",
      caption: "Amazon clone using MERN Stack",
      image: amazon_clone,
      thumb: amazon_clone,
      description:
        "Amazon-clone mimic of amazon.com . it has features as create user, login, add to cart, order checkout and full payment functionality and previous orders. Stripe’s API is used for payment functionality.",
      links: [
        {
          link: "https://github.com/sandip-gadekar/amazon-clone",
          icon: <GitHubIcon />,
        },
        {},
      ],
    },
  ],
};
export default data;
