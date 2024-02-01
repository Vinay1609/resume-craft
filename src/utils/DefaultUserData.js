export const userdata = {
  name: "John",
  lastname: "Doe",
  title: "Software Engineer",
  quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  email: "john.doe@example.com",
  contactInformation: "1234567890",
  personal: {
    name: "John",
    lastname: "Doe",
    title: "Software Engineer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took.",
    email: "john.doe@example.com",
    city: "New York",
    country: "USA",
    image:
      "https://media.istockphoto.com/id/1281997438/photo/portrait-of-young-business-woman.jpg?s=170667a&w=0&k=20&c=iqr2wESpmBr5LmVrbWHzEc1ZkZ5w-KIo1bHg4aHmRyo=",
    technicalskill: [
      { skill: "JavaScript", rate: 4 },
      { skill: "React", rate: 4 },
      { skill: "Node.js", rate: 2 },
    ],
    interest: [
      { hobbie: "Reading" },
      { hobbie: "Traveling" },
      { hobbie: "Photography" },
    ],
  },
  link: {
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
  },
  experience: [
    {
      worktitle: "Software Engineer",
      company: "ABC Tech",
      yearfrom: "2018",
      yearto: "2022",
      present: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
  project: [
    {
      name: "Project X",
      tech: "React, Node.js, MongoDB",
      des: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "Project Y",
      tech: "Angular, Express, PostgreSQL",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ..",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science",
      university: "University XYZ",
      yearfrom: "2014",
      yearto: "2018",
      grade: "3.8",
      gradetype: "grade",
    },
  ],
  course: [
    {
      name: "Web Development Bootcamp",
      provider: "XYZ Academy",
    },
    {
      name: "React Masterclass",
      provider: "ABC Institute",
    },
  ],
};

export const emptydata = {
  name: "",
  lastname: "",
  title: "",
  quote: "",
  email: "",
  contactInformation: "",
  personal: {
    name: "",
    lastname: "",
    title: "",
    quote: "",
    email: "",
    contactInformation: "",
    city: "",
    country: "",
    image: "",
    technicalskill: [],
    interest: [],
  },
  link: {
    linkedin: "",
    github: "",
  },
  experience: [
    {
      worktitle: "",
      company: "",
      yearfrom: "",
      yearto: "",
      present: false,
      description: "",
    },
  ],
  project: [
    {
      name: "",
      tech: "",
      des: "",
    },
    {
      name: "",
      tech: "",
      des: "",
    },
  ],
  education: [
    {
      degree: "",
      university: "",
      yearfrom: "",
      yearto: "",
      grade: "",
      gradetype: "",
    },
  ],
  course: [
    {
      name: "",
      provider: "",
    },
    {
      name: "",
      provider: "",
    },
  ],
};
