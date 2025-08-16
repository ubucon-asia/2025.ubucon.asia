import UCALogo from "./assets/logo.svg";
import PashupatinathTempleImage from "@assets/pashupatinath_temple.jpg";
import UbuConAsiaCommitteeLogo from "@assets/UbuConAsiaCommittee.svg";
import Floor4 from "@assets/floor-map/4.png";
import Floor6 from "@assets/floor-map/6.png";
import GroundFloor from "@assets/floor-map/g.png";
import OSCollectiveLogo from "@assets/oscollective.webp";
import GNOMENepal from "@assets/gnomenepal.svg";
import PreviewImage from "@assets/ogimage.png";
import UbuntuNepal from "@assets/ubuntu_nepal.png";
import CfpPromoImage from "@assets/uca25cfp_promo.jpg";
import impact_nexus from "@assets/sponsors/impact_nexus_nepal.png";
import boothImage from "@assets/floor-map/booth.png"

export interface SubMenuItem {
  link: string;
  label: string;
}

export const WebsiteConfig = {
  siteTitle: "UbuCon Asia 2025",
  siteDescription: "Kathmandu, Nepal | August 30-31",
  faviconPath: UCALogo.src,
  openGraph: {
    imagePath: PreviewImage.src,
  },
  navigation: [
    {
      label: "About",
      link: "#",
      childs: [
        {
          label: "About the event",
          link: "/about",
        },
        {
          label: "Code of conduct",
          link: "/code-of-conduct",
        },
      ],
    },
    {
      label: "Venue & Travel",
      link: "#",
      childs: [
        {
          label: "Venue & Safety",
          link: "/venue-and-travel/venue-and-safety",
        },
        {
          label: "Visas and other travel requirements",
          link: "/venue-and-travel/visas-and-other-travel-requirements",
        },
        {
          label: "Accommodations",
          link: "/venue-and-travel/accommodations",
        },
        {
          label: "Getting to the city",
          link: "/venue-and-travel/getting-to-the-city",
        },
        {
          label: "Exploring the city",
          link: "/venue-and-travel/explore-city",
        },
        {
          label: "Travel grant",
          link: "/venue-and-travel/travel-grant",
        },
      ],
    },
    {
      label: "Programs",
      link: "#",
      childs: [
        {
          label: "Call for proposals",
          link: "/cfp",
        },
        {
          label: "Timetable",
          link: "https://events.canonical.com/event/127/timetable/",
        },
        {
          label: "Social events",
          link: "/programs/social-events/",
        },
        {
          label: "Exhibitions",
          link: "/programs/exhibitions/",
        },
        {
          label: "Important dates",
          link: "/programs/important-dates/",
        },
      ],
    },
    {
      label: "Sponsors/Patrons",
      link: "#",
      childs: [
        {
          label: "Become a sponsor",
          link: "/sponsors/become-a-sponsor/",
        },
        {
          label: "Our sponsors",
          link: "/sponsors/our-sponsors/",
        },
        {
          label: "Patrons",
          link: "/sponsors/patrons/",
        },
      ],
    },
    {
      label: "Links",
      link: "#",
      childs: [
        {
          label: "News",
          link: "https://blog.ubucon.asia/",
        },
        {
          label: "Docs",
          link: "https://docs.ubucon.asia",
        },
        {
          label: "Chat",
          link: "https://docs.ubucon.asia/chat",
        },
      ],
    },
  ],
  subNavigation: [
    {
      label: "🎟️",
      link: "/tickets",
      childs: [],
    },
  ],
  footer: {
    copyright:
      "© 2024-Present UbuCon Asia Committee. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
    contactUs: "mailto:contact@ubucon.asia",
    srcRepoUrl: "https://github.com/ubucon-asia/2025.ubucon.asia",
    organizers: [
      {
        name: "UbuCon Asia Committee",
        logoImage: UbuConAsiaCommitteeLogo.src,
        link: "https://www.ubucon.asia",
      },
      {
        name: "GNOME Nepal",
        logoImage: GNOMENepal.src,
        link: "https://nepal.gnome.org/",
      },
      {
        name: "Ubuntu Nepal",
        logoImage: UbuntuNepal.src,
      },
      {
        name: "Open Source Collective",
        logoImage: OSCollectiveLogo.src,
        link: "https://www.oscollective.org/",
      },
      {
        name: "Impact Nexus Nepal",
        logoImage: impact_nexus.src,
        link: "https://www.impactnexusnepal.org.np/",
      },
    ],
  },
  mainBanner: {
    dates: "August 30-31",
    venue: "St. Xavier’s College, Kathmandu, Nepal",
    description:
      "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. \
            Join us in Kathmandu for two days memorable of conference that connects \
            enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
    footnote: "",
    buttons: [
      {
        label: "Register",
        link: "/tickets",
        class: "p-button--positive",
      },
      {
        label: "Become a sponsor!",
        link: "/sponsors/become-a-sponsor",
        class: "p-button--positive",
      },
    ],
    logo: UCALogo,
  },
  featuredSpeakers: {
    displayOnMainPage: true,
    indicoExportUrl:
      "https://events.canonical.com/export/event/127.json?detail=contributions&occ=yes&pretty=yes",
    contributionIds: [26, 30, 68, 16, 13, 37, 61],
    speakerIds: [
      { db_id: 921, user: 914 },
      { db_id: 950, user: 912 },
      { db_id: 963, user: 942 },
      { db_id: 925, user: 929 },
      { db_id: 926, user: 928 },
      { db_id: 928, user: 931 },
      { db_id: 964, user: 974 },
      { db_id: 943, user: 902 },
      { db_id: 944, user: 970 },
    ],
    fullSchedulesUrl: "ddd",
  },
  otherSpeakers: {
    displayOnMainPage: true,
    indicoExportUrl:
      "https://events.canonical.com/export/event/127.json?detail=contributions&occ=yes&pretty=yes",
    contributionIds: [
      19, 21, 43, 71, 12, 6, 1, 31, 64, 22, 59, 40, 38, 32, 10, 34, 11, 36, 41,
      46, 18,
    ],
    speakerIds: [
      { db_id: 923, user: 917 },
      { db_id: 949, user: 923 },
      { db_id: 918, user: 895 },
      { db_id: 959, user: 896 },
      { db_id: 956, user: 904 },
      { db_id: 929, user: 932 },
      { db_id: 942, user: 969 },
      { db_id: 954, user: 924 },
      { db_id: 934, user: 898 },
      { db_id: 930, user: 947 },
      { db_id: 935, user: 943 },
      { db_id: 936, user: 944 },
      { db_id: 955, user: 909 },
      { db_id: 966, user: 910 },
      { db_id: 931, user: 900 },
      { db_id: 937, user: 953 },
      { db_id: 920, user: 911 },
      { db_id: 957, user: 956 },
      { db_id: 958, user: 919 },
      { db_id: 932, user: 950 },
      { db_id: 939, user: 934 },
      { db_id: 946, user: 938 },
      { db_id: 953, user: 948 },
      { db_id: 937, user: 953 },
    ],
    fullSchedulesUrl: "",
  },
  cityBanner: {
    cityImage: PashupatinathTempleImage.src,
  },
  blog: {
    rssFeedUrl: "https://blog.ubucon.asia/tags/uca25/index.xml",
    viewMoreUrl: "https://blog.ubucon.asia/tags/uca25",
  },
  cfpLink: {
    headMetaDescription: "Submit to speak today! Deadline April 15th, 2025",
    socialCardImage: CfpPromoImage.src,
    cfpLink: "https://events.canonical.com/event/127/abstracts/",
  },
  tickets: {
    eventbriteId: "1311936359969",
    eventbriteSlug: "ubucon-asia-2025-tickets-1311936359969",
  },
};

export const VenueFloorMaps = [
  {
    floor: "4th Floor",
    image: Floor4.src,
    alt: "4th Floor Map",
  },
  {
    floor: "6th Floor",
    image: Floor6.src,
    alt: "6th Floor Map",
  },
  {
    floor: "Ground Floor",
    image: GroundFloor.src,
    alt: "Ground Floor Map",
  },
  {
    floor: "Booth Area",
    image: boothImage.src,
    alt: "Booth Area Map",
  },
];
