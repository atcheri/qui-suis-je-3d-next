export type ExperienceTypes = "studies" | "works";
export type ExperienceType = "work" | "study";

export const studies: string[] = ["statistics-finance", "aerodynamics-aeroacoustic"];

export const works: string[] = ["affinidi", "realt", "sestrel", "actineo", "investbook", "tsa", "cfm", "cfm-intern"];

export const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

type WorkExperience = {
  title: string;
  type: ExperienceType;
  place: string;
  logoPath?: string;
  url?: string;
  sector: string;
  location: string;
  period: {
    year: string;
    from: string;
    to: string;
  };
  content: string;
  stack: {
    langs: string[];
    tools: string[];
  };
  description: {
    content: string;
    url?: string;
  }[];
  what: string;
};

export const workExperiences: WorkExperience[] = [
  {
    title: "Full-Stack Software Engineer",
    type: "work",
    place: "Affinidi GMBH",
    logoPath: "/images/companies/affinidi.svg",
    sector: "Permanent",
    location: "Berlin (Remote)",
    period: {
      year: "2021 ~",
      from: "July",
      to: "Present",
    },
    content: "Building privacy preserving tools",
    url: "https://affinidi.com",
    stack: {
      langs: ["go", "typescript"],
      tools: [
        "aws",
        "react",
        "openapi",
        "alpinejs",
        "rest",
        "jest",
        "cypress",
        "vuejs",
        "docker",
        "kubernetes",
        "mongo",
        "mysql",
        "postgres",
        "gitlab",
      ],
    },
    description: [
      {
        content: "Developer portal Back-end: refactor legacy code while adding unit and integration tests.",
      },
      {
        content:
          "Developer portal Front-end: While adding new features to the webapp, I've also significantly contributed to add components and pages tests, as well as end-to-end tests. And transferred development technique to my peers.",
      },
      {
        content: "Contributed to open-source SDK in multiple technologies: typescript, java, dart, php and python:",
        url: "https://github.com/affinidi/affinidi-tdk",
      },
      {
        content:
          "Data analytics pipeline using AWS CDK (Cloud Development Kit). This project consists of collecting events sent from any affinidi services. Moniroring with Cloudwatch Alarms, Ingesting data through Kinesis Data Stream via Firehose Delivery Stream to S3 Bucket; ETL with Glue jobs and querying using Athena; Integration of synthetic canary tests",
      },
      {
        content:
          "Data connector framekwork using AWS CDK. This project consists of connecting & unifying user data (linkedin, strava, discord, spotify etc...) into one unique tool. Monitoring with cloudwatch, deploying lambda functions with a Dynamo DB persistent layer.",
      },
      {
        content: "Open-source command line interface:",
        url: "https://github.com/affinidi/affinidi-cli",
      },
      {
        content: "Set up and grew a culture of automated tests multiple teams",
      },
      {
        content:
          "Started and maintained a &quot;Guild&quot; focussed on Test-Driven-Development and Mob-Programming. Trained peers on that topic",
      },
      {
        content: "Mentored interns and external students from:",
        url: "https://www.wbscodingschool.com",
      },
      {
        content: "A rules-engine api using openapi using golang and gRPC",
      },
      {
        content: "A web user-interface using the micro frontend architecture:",
      },
    ],
    what: "Affinidi is a Singapore-based technology company that offers a secure and interoperable digital identity platform for individuals and businesses to manage their verifiable digital identities and data.",
  },
  {
    title: "Front-End Engineer",
    type: "work",
    place: "RealT",
    logoPath: "/images/companies/realt.png",
    url: "https://realt.co/",
    sector: "Freelance",
    location: "USA (Remote)",
    period: {
      year: "2021",
      from: "March",
      to: "June",
    },
    content: "RealT TOKEN rent calculation system",
    stack: {
      langs: ["typescript"],
      tools: ["metamask", "react", "jest", "nextjs", "heroku", "gitlab"],
    },
    description: [
      { content: "Improved the the daily/weekly rent TOKEN payment calculation" },
      { content: "Collecting data from side chains such as Polygon (Matic)" },
    ],
    what: "RealToken provides investors with a simple, intelligent, and user-friendly method to buy into fractional, tokenized properties.",
  },
  {
    title: "Front-End Engineer",
    type: "work",
    place: "Sestrel",
    sector: "Freelance",
    location: "Hong-Kong (Remote)",
    period: {
      year: "2020 ~ 2021",
      from: "October",
      to: "April",
    },
    content: "Contributed to the mobile version of the marketplace",
    stack: {
      langs: ["nodejs", "typescript", "solidity"],
      tools: ["metamask", "docker", "react", "react-native", "jest", "netlify"],
    },
    description: [
      {
        content: "Created github actions to build and deploy the reat-native based mobile application (Expo)",
      },
      {
        content: "Migrated the nodejs backend code from javascript to typescript",
      },
    ],
    what: "",
  },
  {
    title: "Full-Stack Software Engineer",
    type: "work",
    place: "Actineo GMBH",
    logoPath: "/images/companies/actineo.png",
    url: "https://www.actineo.de",
    sector: "Permanent",
    location: "Cologne",
    period: {
      year: "2017 ~ 2020",
      from: "October",
      to: "September",
    },
    content: "Designed a claim management system",
    stack: {
      langs: ["nodejs", "typescript"],
      tools: ["apollo", "graphql", "react", "jest", "docker", "mongo", "rest"],
    },
    description: [
      { content: "Designed and built a whole claim management system for insurance companies" },
      { content: "Supervised outsourced development" },
    ],
    what: "Actineo is the German market leader for digitization and medical assessment of personal injury.",
  },
  {
    title: "Full-Stack Software Engineer",
    type: "work",
    place: "Investbook.fr SAS",
    logoPath: "/images/companies/investbook.svg",
    url: "https://www.investbook.fr",
    sector: "Permanent",
    location: "Paris",
    period: {
      year: "2015 ~ 2017",
      from: "July",
      to: "September",
    },
    content: "Crowdfunding platform for the company from idea to production",
    stack: {
      langs: ["php", "typescript", "nodejs"],
      tools: ["symfony", "mysql", "rest", "jquery"],
    },
    description: [{ content: "Built and deployed a whole crowdfunding platform for the company (Full-Stack)" }],
    what: "Invertbook is a a crowdfunding site specialized in issuing french SMEs Obligations.",
  },
  {
    title: "Full-Stack Software Engineer",
    type: "work",
    place: "TSA SAS",
    sector: "Permanent",
    location: "Paris",
    period: {
      year: "2012 ~ 2015",
      from: "March",
      to: "August",
    },
    content: "Crafted a complete booking system for the company",
    stack: {
      langs: ["php", "typescript", "nodejs"],
      tools: ["symfony", "mysql", "rest", "jquery"],
    },
    description: [{ content: "Built and deployed a whole booking system for the company (Full-Stack)" }],
    what: "Company allocating licensed Guides-Assistants to tourists groups from different countries of the world (mostly Japan) during their visit in France, in Paris and it's neighboring areas.",
  },
  {
    title: "Software Engineer",
    type: "work",
    place: "CFM SA",
    logoPath: "/images/companies/cfm-vector.svg",
    url: "https://www.cfm.fr",
    sector: "Permanent",
    location: "Tokyo",
    period: {
      year: "2010 ~ 2012",
      from: "June",
      to: "February",
    },
    content: "Worked on a HFT in-house application built with in c++",
    stack: {
      langs: ["c++", "python", "nodejs"],
      tools: ["mysql", "rest"],
    },
    description: [
      { content: "Contributed to develop in-house high frenquency trading application in c++" },
      { content: "Trading application Production Support on Asian and Australian capital market open hours" },
      { content: "Continued the work started during the internship" },
    ],
    what: "A french Hedge Fund spcialized in High Frequency Trading (HFT) or systemic-trading",
  },
  {
    title: "Junior Software Engineer",
    type: "work",
    place: "CFM SA",
    url: "https://www.cfm.fr",
    sector: "Permanent",
    location: "Paris",
    period: {
      year: "2009 ~ 2010",
      from: "January",
      to: "May",
    },
    content: "6 month post graduate Internship",
    stack: {
      langs: ["c++", "python", "nodejs"],
      tools: ["mysql", "rest"],
    },
    description: [
      { content: "Graphical user interface that displays daily asset prices using highcharts" },
      { content: "Tools to calculate latency statistics of order messages" },
    ],
    what: "A french Hedge Fund spcialized in High Frequency Trading (HFT) or systemic-trading",
  },
];
