import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import quang1 from './quang1.png';
import devops from './devops.png';
import devops_dark from './devops_dark.png';
import exp_icon from './exp_icon.png';
import exp_icon_dark from './exp_icon_dark.png';
import quang2 from './quang2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faServer, 
    faCodeBranch, 
    faDatabase, 
    faCogs, 
    faCloud 
} from "@fortawesome/free-solid-svg-icons";


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    quang1,
    devops,
    devops_dark,
    exp_icon,
    exp_icon_dark,
    quang2
};

export const workData = [
    {
        title: 'Contribution to OpenSource TypeORM',
        description: 'Contributed docs to optimize database performance.',
        bgImage: '/work-1.png',
        link: 'https://github.com/typeorm/typeorm/pull/11068'
    },
    {
        title: 'Minimart Management - Frontend',
        description: 'Developed the frontend for a supermarket management system using Next.js.',
        bgImage: '/work-2.png',
        link: 'https://github.com/ngxquang/PJ-02-Mart-Management-FE.git'
    },
    {
        title: 'Minimart Management - Backend',
        description: 'Built the backend for a minimart management system using NestJS with MySQL, deploy on AWS Cloud.',
        bgImage: '/work-3.png',
        link: 'https://github.com/ngxquang/PJ-02-Mart-Management-BE.git'
    },
    {
        title: 'Spring Boot Microservices',
        description: 'Built a scalable microservices architecture using Spring Boot, Kafka, Docker, Kubernetes.',
        bgImage: '/work-4.png',
        link: 'https://github.com/ngxquang/spring-boot-microservices'
    },
];


export const serviceData = [
    { 
        icon: <FontAwesomeIcon icon={faServer} className="w-10 h-10 text-gray-700 dark:text-white" />, 
        title: 'Backend Development', 
        description: 'Building scalable and high-performance backend systems using Java (Spring Boot) & JavaScript (NestJS, Express.js).'
    },
    { 
        icon: <FontAwesomeIcon icon={faCodeBranch} className="w-10 h-10 text-gray-700 dark:text-white" />, 
        title: 'API Design & Development', 
        description: 'Designing RESTful APIs with authentication, authorization, and optimization for high-traffic applications.'
    },
    { 
        icon: <FontAwesomeIcon icon={faDatabase} className="w-10 h-10 text-gray-700 dark:text-white" />, 
        title: 'Database Management', 
        description: 'Optimizing relational (PostgreSQL, MySQL) and NoSQL databases for performance, security, and scalability.'
    },
    { 
        icon: <FontAwesomeIcon icon={faCogs} className="w-10 h-10 text-gray-700 dark:text-white" />, 
        title: 'DevOps & CI/CD', 
        description: 'Automating infrastructure with Docker, Kubernetes, and CI/CD pipelines (GitHub Actions, Jenkins).'
    },
    { 
        icon: <FontAwesomeIcon icon={faCloud} className="w-10 h-10 text-gray-700 dark:text-white" />, 
        title: 'Cloud Computing', 
        description: 'Deploying and managing applications on AWS services (EC2, RDS, S3, CloudWatch, IAM).'
    }
];


export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Languages & Technologies', 
        description: 'Java, JavaScript, TypeScript, HTML, CSS, React.js, Next.js, NestJS, Spring Boot' 
    },
    // { 
    //     icon: assets.devops, 
    //     iconDark: assets.devops_dark, 
    //     title: 'DevOps & Cloud', 
    //     description: 'Docker, Kubernetes, CI/CD, AWS (EC2, RDS, ECR, S3, CloudWatch, IAM)' 
    // },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'Software Engineer student at UIT - VNUHCM, focusing on Backend Development and Cloud Computing' 
    },
    // { 
    //     icon: assets.project_icon, 
    //     iconDark: assets.project_icon_dark, 
    //     title: 'Projects', 
    //     description: 'Built 5+ projects, including a supermarket management system and portfolio website' 
    // },
    { 
        icon: assets.exp_icon, 
        iconDark: assets.exp_icon_dark, 
        title: 'Experience', 
        description: 'Hands-on with AWS services, REST APIs, database optimization, and monitoring tools' 
    },
    // { 
    //     icon: assets.interest_icon, 
    //     iconDark: assets.interest_icon_dark, 
    //     title: 'Interests', 
    //     description: 'Scalable system design, DevOps automation, backend optimization, and cloud security' 
    // }
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];