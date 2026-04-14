// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Sujay Kumar",
  description:
    "I bridge the gap between project management and technical implementation. I lead teams to deliver innovative solutions and digital content.",
  siteUrl: "https://sujaykumar.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I manage and lead projects",
  "I coordinate innovative initiatives",
  "I design digital content",
  "I mentor student organizations",
];

export const EMAIL = "sujaykumarsk12@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sujay-kumar22/",
  instagram: "https://www.instagram.com/creative_sujay/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Student Body Leadership (DU-SOL)",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Led 100+ members, organized hackathons and workshops for 1000+ students.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://sol.du.ac.in/",
    tech: [],
  },
  {
    name: "IIC Innovator Coordination",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Connecting student teams with IIC-MHRD initiatives and mentor sessions.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://iic.mic.gov.in/",
    tech: [],
  },
  {
    name: "Graphic Design & IT Initiatives",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Created assets for official government campaigns at CEO, New Delhi.",
    gradient: ["#245B57", "#004741"],
    url: "https://ceodelhi.gov.in/",
    tech: ["canva", "figma"],
  },
  {
    name: "Placement Drive Management",
    image: "/projects/placement-drive.jpg",
    blurImage: "/projects/placement-drive.jpg",
    description: "Organized recruitment efforts and skill development workshops.",
    gradient: ["#003052", "#167187"],
    url: "https://sol.du.ac.in/",
    tech: [],
  },
];

export const SKILLS = {
  management: ["leadership", "management", "coordination"],
  design: ["canva"],
  other: ["python", "cpp"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IIC Innovator Coordinator",
    size: ItemSize.SMALL,
    subtitle:
      "Coordinating innovation activities for DU SOL, connecting student teams with IIC-MHRD initiatives.",
    slideImage: "/timeline/iic.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Event Coordinator",
    size: ItemSize.SMALL,
    subtitle:
      "Planned and executed a college-level event managing logistics and on-ground coordination.",
    slideImage: "/timeline/event-coordinator.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student President & Team Lead",
    size: ItemSize.SMALL,
    subtitle:
      "Leading and mentoring a team of 100+ members in the student body at DU-SOL.",
    slideImage: "/timeline/student-president.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Placement Cell Head",
    size: ItemSize.SMALL,
    subtitle:
      "Led internship recruitment efforts and organized placement drives for DU SOL students.",
    slideImage: "/timeline/placement-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graphic Design & IT Intern",
    size: ItemSize.SMALL,
    subtitle:
      "Created graphic assets and managed social media handles for the Chief Electoral Office, New Delhi.",
    slideImage: "/timeline/it-work.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor of Computer Applications (BCA)",
    size: ItemSize.SMALL,
    subtitle:
      "Started foundation in Computer Science, Python, C++, and Data Structures at DU SOL.",
    slideImage: "/timeline/sujay.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
