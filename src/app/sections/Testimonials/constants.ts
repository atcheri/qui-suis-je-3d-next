export type Testimonial = {
  name: string;
  title: string;
  role: string;
  content: string[];
  github?: string;
  linkedin?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Denis Davidov",
    title: "Excellence Driven Developer",
    role: "Engineering Lead",
    content: [
      "A very skilled senior fullstack engineer with a solid understanding of the webstack.",
      "His ability to architect and implement robust solutions is an undeniable strength.",
      "He consistently delivers results and demonstrated to be a valuable asset to our team.",
    ],
    github: "https://github.com/dendavidov-affinidi",
    linkedin: "https://www.linkedin.com/in/dendavidov/",
  },
  {
    name: "Bhanupratap Singh",
    title: "Adaptable and Agile Mindset",
    role: " Senior Staff Engineer",
    content: [
      "In a rapidly evolving tech landscape, he demonstrated an adaptable and agile mindset, embracing new technologies and methodologies.",
    ],
    linkedin: "https://www.linkedin.com/in/bhprsi",
  },
  {
    name: "Jonas Etzold",
    title: "He embraces Codecraftsmanship",
    role: "Senior Full-Stack Engineer",
    content: [
      "With an unwavering commitment to codecraftsmanship, Atsuhiro delivers elegant and well-structured code that not only meets the project requirements but also sets a high standard for quality and maintainability.",
    ],
    github: "https://github.com/JonasEtzold",
    linkedin: "https://www.linkedin.com/in/jonasetzold/",
  },
  {
    name: "Dhuan Oliveira",
    title: "Passionate Learner and Contributor",
    role: "Senior Software Engineer",
    content: [
      "Appreciated his passion for continuous learning and staying up-to-date with the latest industry trends.",
      "His enthusiastic and collaborative attitude to the workplace, helped a lot to support teammates.",
    ],
    github: "https://github.com/dhuan",
    linkedin: "https://www.linkedin.com/in/dhuan",
  },
  {
    name: "Jees K. Denny",
    title: "Dedicated Team Player",
    role: "Lead Engineer",
    content: ["He was a really great team player, fostering a collaborative environment and ensuring project success."],
    github: "https://github.com/jeeskdenny",
    linkedin: "https://www.linkedin.com/in/jeeskdenny",
  },
  {
    name: "Theophane Fotso",
    title: "Client-Focused",
    role: "Software Engineer",
    content: [
      "With a keen understanding of client needs, he consistently delivered solutions that aligned with business objectives, offering valuable insights and recommendations to enhance user experience and drive client satisfaction.",
    ],
    github: "https://github.com/Fotso",
    linkedin: "https://www.linkedin.com/in/kamgaing-theophane-fotso-8336501aa",
  },
];
