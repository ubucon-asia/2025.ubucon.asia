import logoPlaceHolder from "@assets/logo_placeholder.svg";
import annapurna from "@assets/sponsors/annapurna.png";
import global_cyber from "@assets/sponsors/community_partners/Global_Cybersecurity_Community.png";
import Canonical from "@assets/sponsors/Canonical_Ubuntu.svg";
import ONLYOFFICE from "@assets/sponsors/onlyOffice.svg";
import CSRI from "@assets/sponsors/community_partners/csri.png";
import nosk from "@assets/sponsors/community_partners/nosk.png";
import programiz from "@assets/sponsors/programiz.svg";
import sxc from "@assets/sponsors/sxc.png"
import DeepComputing from "@assets/sponsors/DeepComputing.svg";
import Logpoint from "@assets/sponsors/logpoint.svg";

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
        logoUrl: Canonical.src,
        url: "https://ubuntu.com/",
        description:
          "Canonical, the publisher of Ubuntu, delivers the operating system widely used for public cloud workloads and increasingly adopted in emerging technologies such as smart gateways, autonomous vehicles, and advanced robotics. It also offers enterprise-grade security, support, and services for commercial users of Ubuntu.",
      },
    ],
  },
  {
    sponsorLevelName: "Gold",
    sizeOnLargeScreen: 4,
    sizeOnMediumScreen: 4,
    sizeOnSmallScreen: 3,
    showPopup: true,
    list: [
      // {
      //   name: "Become a sponsor!",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // },
    ],
  },
  {
    sponsorLevelName: "Silver",
    sizeOnLargeScreen: 3,
    sizeOnMediumScreen: 3,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      // {
      //   name: "Become a sponsor!",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // },
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
        description: 
        `Formed in 2022 by a group of dedicated RISC-V pioneers, DeepComputing is headquartered in Hong Kong. We share an enduring passion for advancing the adoption and implementation of RISC-V beyond existing ISA chipsets. 
        Our aim is to create bold new products. With faith in our diverse and dedicated partners, we believe in the promising new future of RISC-V. 
        Together, we will focus on driving the development of the RISC-V ecosystem with products such as laptops, pads, workstations, headphones, smart watches, smart speakers, AR glasses and autonomous driving for toys and real world vehicles.`
      },
      {
        name: "Logpoint",
        logoUrl: Logpoint.src,
        url: "https://www.logpoint.com/",
        description: 
        `Logpoint Nepal Pvt. Ltd., a leading global cybersecurity company specializing in Security
        Information and Event Management (SIEM), Security Operations (SecOps), and advanced analytics solutions,`
      }
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
      //   name: "Become a sponsor!",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // },
    ],
  },
  {
    sponsorLevelName: "Education Partner",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "St. Xavier's College",
        logoUrl: sxc.src,
        url: "https://www.sxc.edu.np/",
        description:
          "St. Xavier’s College, Maitighar, Kathmandu, is a leading Jesuit institution offering quality education in science, management, and humanities. Established in 1988, it is known for academic excellence, holistic development, and commitment to social responsibility.",
      },
    ],
  },
  {
    sponsorLevelName: "Knowledge Partner",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "Programiz",
        logoUrl: programiz.src,
        url: "https://www.programiz.com/",
        description:
          "Programiz is a learning platform by Parewa Labs that helps beginners easily learn programming through interactive tutorials, coding challenges, and real-world projects. Covering languages like Python, C, C++, Java and many more. It serves over 10 million learners globally through its website, mobile apps, and Programiz PRO subscription.",
      },
    ],
  },
  {
    sponsorLevelName: "Media Partner",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "Become a sponsor!",
        logoUrl: annapurna.src,
        url: "https://amnnepal.com/",
        description:
          "Annapurna Media Network (AMN) is a leading media company in Nepal, dedicated to promoting the country’s social and economic development through responsible media practices.  Established in 2002, AMN has expanded its reach across various platforms, including print, radio, television, and digital media.",
      },
    ],
  },
  {
    sponsorLevelName: "Community Partners",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: false,
    list: [
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
    ],
  },
];
