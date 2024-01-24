type tabsData = {
  id: number;
  title: string;
  picked: boolean;
  link: string;
};

const data: tabsData[] = [
  {
    id: 1,
    title: "Home",
    picked: true,
    link: "/",
  },
  {
    id: 2,
    title: "ToBuy",
    picked: false,
    link: "/shop",
  },
  {
    id: 3,
    title: "ToDo",
    picked: false,
    link: "/",
  },
  {
    id: 4,
    title: "ToDoWork",
    picked: false,
    link: "/",
  },
  {
    id: 5,
    title: "ToPlan",
    picked: false,
    link: "/",
  },
];

export default data;
