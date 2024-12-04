import UCALogo from './assets/uca25logotmp.png'
import PashupatinathTempleImage from '@assets/pashupatinath_temple.jpg'
import UbuConAsiaCommitteeLogo from "@assets/UbuConAsiaCommittee.svg"
import OSCollectiveLogo from "@assets/oscollective.webp";

export interface SubMenuItem {
    link: string;
    label: string;
}

export const WebsiteConfig = {
    siteTitle: "UbuCon Asia 2025",
    siteDescription: "Kathmandu, Nepal | August 30-31",
    faviconPath: UCALogo.src,
    navigation: [
        {
            label: "About",
            link: "/about",
            childs: []
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
                }
            ]
        },
        {
            label: "Programs",
            link: "#",
            childs: [
                {
                    label: "Timetable",
                    link: "https://events.canonical.com/event/127/timetable/"
                },
                {
                    label: "Social events",
                    link: "/programs/social-events/"
                }
            ]
        },
        {
            label: "Sponsors/Patrons",
            link: "#",
            childs: [
                {
                    label: "Become a sponsor",
                    link: "/sponsors/become-a-sponsor/"
                },
                {
                    label: "Our sponsors",
                    link: "/sponsors/our-sponsors/"
                },
                {
                    label: "Patrons",
                    link: "/sponsors/patrons/"
                }
            ]
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
                }
            ]
        }
    ],
    subNavigation: [
        {
            label: "🎟️",
            link: "#",
            childs: [

            ]
        }
    ],
    footer: {
        copyright: "© 2024-Present UbuCon Asia Committee. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubucon.asia",
        srcRepoUrl: "https://github.com/ubucon-asia/2025.ubucon.asia",
        organizers: [
            { name: "UbuCon Asia Committee", logoImage: UbuConAsiaCommitteeLogo.src, link: "https://www.ubucon.asia" },
            { name: "Open Source Collective", logoImage: OSCollectiveLogo.src, link: "https://www.oscollective.org/" }
        ]
    },
    mainBanner: {
        dates: "August 30-31*",
        venue: "St. Xavier’s College, Kathmandu, Nepal*",
        description: "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. \
            Join us in Kathmandu for two days memorable of conference that connects \
            enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
        footnote: "*To be confirmed",
        buttons: [
            {
                label: "Become a sponsor!",
                link: "/sponsors/become-a-sponsor",
                class: "p-button--positive"
            }
        ],
        logo: UCALogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/47.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [20, 46, 43, 34, 19],
        speakerIds: [{ db_id: 522, user: 107 }, { db_id: 517, user: 166 }, { db_id: 494, user: 615 }, { db_id: 515, user: 628 }, { db_id: 516, user: 271 }, { db_id: 487, user: 3 }],
        fullSchedulesUrl: "https://events.canonical.com/event/47/contributions/"
    },
    cityBanner: {
        cityImage: PashupatinathTempleImage.src
    },
    blog: {
        rssFeedUrl: "https://blog.ubucon.asia/tags/uca25/index.xml",
        viewMoreUrl: "https://blog.ubucon.asia/tags/uca25"
    },
}
