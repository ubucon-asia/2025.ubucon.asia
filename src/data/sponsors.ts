import annapurna from "@assets/sponsors/Bronze/annapurna.png";
import Canonical from "@assets/sponsors/Gold/Canonical_Ubuntu.svg";
import sxc from "@assets/sponsors/Silver/sxc.png"
import dishhome from "@assets/sponsors/Silver/dishhome.jpg";
import ONLYOFFICE from "@assets/sponsors/Bronze/onlyOffice.svg";
import programiz from "@assets/sponsors/Bronze/programiz.svg";
import DeepComputing from "@assets/sponsors/Bronze/DeepComputing.svg";
import Logpoint from "@assets/sponsors/Bronze/logpoint.png";
import nec from "@assets/sponsors/Bronze/nec.png";
import cloud_himalaya from "@assets/sponsors/Bronze/cloud_himalaya.png";
import sob from "@assets/sponsors/Bronze/sob.png";
import cake from "@assets/sponsors/Supporters/cake.png";
import hemp from "@assets/sponsors/Startup/hemp.jpg";
import ncit from "@assets/sponsors/Supporters/ncit.png";
import ncloud from "@assets/sponsors/Supporters/ncloud.png";
import plant from "@assets/sponsors/Startup/plant.jpg";
import rekriti from "@assets/sponsors/Startup/rekriti.jpg";
import skywalk from "@assets/sponsors/Startup/skywalk.png";
import ug from "@assets/sponsors/Startup/ug.jpg";
import whoopee from "@assets/sponsors/Supporters/whoopee.png";
import singapore from "@assets/sponsors/Supporters/singapore.png";
import global_cyber from "@assets/sponsors/community_partners/Global_Cybersecurity_Community.png";
import nic from "@assets/sponsors/community_partners/nic.png";
import CSRI from "@assets/sponsors/community_partners/csri.png";
import nosk from "@assets/sponsors/community_partners/nosk.png";
import ifn from "@assets/sponsors/community_partners/ifn.png";
import pathao from "@assets/sponsors/Startup/pathao.png";
import legaladvisor from "@assets/sponsors/community_partners/om_shivshakti_law_associates.png";



export const sponsors = [
  {
    sponsorLevelName: "Diamond",
    sizeOnLargeScreen: 6,
    sizeOnMediumScreen: 6,
    sizeOnSmallScreen: 6,
    showPopup: true,
    list: [
      {
        name: "Canonical",
        partnerTag: "-test",
        logoUrl: Canonical.src,
        url: "https://ubuntu.com/",
        description:
          "Canonical, the publisher of Ubuntu, delivers the operating system widely used for public cloud workloads and increasingly adopted in emerging technologies such as smart gateways, autonomous vehicles, and advanced robotics. It also offers enterprise-grade security, support, and services for commercial users of Ubuntu.",
      },
    ],
  },
  // {
  //   sponsorLevelName: "Gold",
  //   sizeOnLargeScreen: 4,
  //   sizeOnMediumScreen: 4,
  //   sizeOnSmallScreen: 3,
  //   showPopup: true,
  //   list: [
  //     {
  //       name: "Become a sponsor!",
  //       logoUrl: logoPlaceHolder.src,
  //       url: "/sponsors/become-a-sponsor",
  //       description:
  //         "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
  //     },
  //   ],
  // },
  {
    sponsorLevelName: "Silver",
    sizeOnLargeScreen: 3,
    sizeOnMediumScreen: 3,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      {
        name: "St. Xavier's College",
        partnerTag: "-Education Partner",
        logoUrl: sxc.src,
        url: "https://www.sxc.edu.np/",
        description:
          "St. Xavier’s College, Maitighar, Kathmandu, is a leading Jesuit institution offering quality education in science, management, and humanities. Established in 1988, it is known for academic excellence, holistic development, and commitment to social responsibility.",
      },
      {
        name: "DishHome",
        partnerTag: "-Internet Partner",
        logoUrl: dishhome.src,
        url: "https://dishhome.com.np/",
        description:
          "DishHome is Nepal’s leading provider of digital TV and internet services. It began with DTH television and later expanded into high-speed fiber internet. The company serves homes and businesses with reliable nationwide coverage. Today, DishHome is among the top ISPs and entertainment providers in Nepal.",
      },
    ],
  },
  {
    sponsorLevelName: "Bronze",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "ONLYOFFICE",
        logoUrl: ONLYOFFICE.src,
        url: "https://www.onlyoffice.com",
        description:
          "ONLYOFFICE, developed by Ascensio System SIA, is a robust office suite featuring online editors for documents, spreadsheets, and presentations, with strong compatibility with both Microsoft Office and OpenDocument file formats.",
      },
      {
        name: "DeepComputing",
        logoUrl: DeepComputing.src,
        url: "https://www.deepcomputing.io/",
        description: `Formed in 2022 by a group of dedicated RISC-V pioneers, DeepComputing is headquartered in Hong Kong. We share an enduring passion for advancing the adoption and implementation of RISC-V beyond existing ISA chipsets. 
        Our aim is to create bold new products. With faith in our diverse and dedicated partners, we believe in the promising new future of RISC-V. 
        Together, we will focus on driving the development of the RISC-V ecosystem with products such as laptops, pads, workstations, headphones, smart watches, smart speakers, AR glasses and autonomous driving for toys and real world vehicles.`,
      },
      {
        name: "Logpoint",
        logoUrl: Logpoint.src,
        url: "https://www.logpoint.com/",
        description: `Logpoint Nepal Pvt. Ltd., a leading global cybersecurity company specializing in Security Information and Event Management (SIEM), Security Operations (SecOps), and advanced analytics solutions.`,
      },
      {
        name: "Cloud Himalaya",
        logoUrl: cloud_himalaya.src,
        url: "https://www.cloudhimalaya.com/",
        description: `Cloud Himalaya Pvt. Ltd., founded in 2013 and headquartered in Kathmandu’s Central Business Park, operates Nepal’s only Tier‑4 data center, offering unmatched reliability and performance with 99.995% uptime. Serving over 500 public and private-sector clients, the company delivers core services including colocation, VPS, web hosting, managed services, and backup solutions`,
      },
      {
        name: "Nepal Engineering College",
        partnerTag: "-Research Partner",
        logoUrl: nec.src,
        url: "http://www.nec.edu.np/",
        description:
          "Nepal Engineering College (nec), established in 1994, is a not-for-profit institution committed to providing quality technical education. Founded by visionary professionals, it aims to support Nepal’s economic growth through engineering and technology.",
      },
      {
        name: "Programiz",
        partnerTag: "-Knowledge Partner",
        logoUrl: programiz.src,
        url: "https://www.programiz.com/",
        description:
          "Programiz is a learning platform by Parewa Labs that helps beginners easily learn programming through interactive tutorials, coding challenges, and real-world projects. Covering languages like Python, C, C++, Java and many more. It serves over 10 million learners globally through its website, mobile apps, and Programiz PRO subscription.",
      },
      {
        name: "Annapurna Media Network",
        partnerTag: "-Media Partner",
        logoUrl: annapurna.src,
        url: "https://amnnepal.com/",
        description:
          "Annapurna Media Network (AMN) is a leading media company in Nepal, dedicated to promoting the country’s social and economic development through responsible media practices.  Established in 2002, AMN has expanded its reach across various platforms, including print, radio, television, and digital media.",
      },
      {
        name: "School of Bakery and Pastry",
        partnerTag: "-Hi-tea Partner",
        logoUrl: sob.src,
        url: "https://schoolofbakingandpastry.com.np/",
        description:
          "Founded in 2018, the School of Baking and Pastry Technology is Nepal’s first bakery and pastry school, offering diploma, certificate, and specialized professional programs in pastries, chocolate, and bread making. Led by experienced pastry chefs, the school provides hands-on training and small class sizes to prepare students for successful careers or entrepreneurship in the bakery and pastry industry.",
      },
    ],
  },

  {
    sponsorLevelName: "Supporter",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      // {
      //   name: "Chandragiri Hills Pvt. Ltd",
      //   logoUrl: chandru.src,
      //   url: "https://www.chandragirihills.com/",
      //   description:
      //     "Chandragiri Hills, located on the outskirts of Kathmandu, is a popular hill station offering panoramic views of the Kathmandu Valley and the Himalayan range. Famous for its cable car, lush landscapes, and recreational facilities, it’s a top destination for nature lovers and tourists seeking a peaceful escape from the city",
      // },
      {
        name: "Nepal College of Information and Technology",
        logoUrl: ncit.src,
        url: "https://ncit.edu.np/",
        description:
          "Nepal College of Information Technology (NCIT), established in 2001 and affiliated with Pokhara University, offers Bachelor’s and Master’s programs in IT, Engineering, and Management. Renowned for academic excellence, research, and industry collaboration, NCIT equips students with the skills, innovation, and values needed to excel professionally and contribute to nation-building.",
      },
      {
        name: "Skywalk Nepal",
        partnerTag: "-Adventure Partner",
        logoUrl: skywalk.src,
        url: "https://www.skywalknepal.com/",
        description: "",
      },
      {
        name: "Nepali Cloud",
        logoUrl: ncloud.src,
        url: "https://clients.nepalicloud.com/",
        description:
          "Nepali Cloud is a web hosting service from Nepal, offering secure, reliable and affordable solutions for individuals, developers and organizations. From shared hosting and VPS to domain management, we help users establish and grow their online presence with ease. Built with open-source values at its core, Nepali Cloud is proud to support UbuCon Asia 2025 and contribute to strengthening the open-source and Ubuntu communities across the region.",
      },
      {
        name: "Singapore Beverages Pvt. Ltd.",
        partnerTag: "-Beverage Partner",
        logoUrl: singapore.src,
        url: "https://singaporebeverage.com/",
        description:
          "Singapore Beverages Nepal is redefining ‘Made in Nepal’ by proving that local products can match global standards. Committed to quality and innovation, we aim to change perceptions and deliver beverages that Nepalis can trust and take pride in.",
      },
      {
        name: "Whoopee Land Amusement and Water Park",
        logoUrl: whoopee.src,
        url: "https://whoopeelandpark.com/",
        description:
          "Whoopee Land Amusement and Water Park is one of Nepal’s largest amusement and water parks, located in Chobhar, Kathmandu. It offers a wide range of thrilling rides, family attractions, adventure activities, and refreshing water slides, making it a popular destination for fun, recreation, and family outings.",
      },
      {
        name: "Interview Cake",
        logoUrl: cake.src,
        url: "https://www.interviewcake.com/",
        description:
          "Interview Cake is an online platform that helps job seekers prepare for coding interviews. It offers step-by-step problem explanations, practice questions, and strategies to build strong problem-solving skills and confidence for technical interviews.",
      },
      {
        name: "Cotton Hemp Creation",
        logoUrl: hemp.src,
        url: "https://www.facebook.com/p/Cotton-Hemp-Creation-61563803027274/",
        description:
        "Cotton Hemp Creation is a Nepal-based company specializing in the manufacturing of high-quality bags using locally sourced materials, primarily cotton and hemp fabrics. We cater to both wholesale and retail customers, offering a wide range of products that combine durability, sustainability, and style."
      },
       
    ],
  },
  {
    sponsorLevelName: "Startup",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "The Plant Room",
        logoUrl: plant.src,
        url: "https://www.instagram.com/theplantro0m/",
        description:"",
      },
      {
        name: "Rekriti",
        partnerTag: "-Upcycling Partner",
        logoUrl: rekriti.src,
        url: "https://www.instagram.com/re.kriti/?hl=en",
        description:"",
      },
      
      {
        name: "Ug Cakes",
        partnerTag: "-Celebration Partner",
        logoUrl: ug.src,
        url: "https://www.ugcakes.com/",
        description:"",
      },
      
    ],
  },
  {
    sponsorLevelName: "Community Partners",
    sizeOnLargeScreen: 1,
    sizeOnMediumScreen: 1,
    sizeOnSmallScreen: 1,
    showPopup: false,
    list: [
      {
        name: "National Innovation Center",
        logoUrl: nic.src,
        url: "",
        description: "",
      },
      {
        name: "Center for Cyber Security Research and Innovation",
        logoUrl: CSRI.src,
        url: "",
        description: "",
      },
      {
        name: "Global Cybersecurity Community Forum",
        logoUrl: global_cyber.src,
        url: "",
        description: "",
      },
      {
        name: "Nepal Open Source Klub",
        logoUrl: nosk.src,
        url: "",
        description: "",
      },
      {
        name: "ICT Foundation Nepal",
        logoUrl: ifn.src,
        url: "",
        description: "",
      },
      {
        name: "Om Shivshakti Law Associates",
        logoUrl: legaladvisor.src,
        url: "",
        description: "",
      },
    ],
  },
];
