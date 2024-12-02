import { BookOpen, Home,Mic,Calendar } from "react-feather";
import { Layers,Circle,Users,Command } from "react-feather";

export default [
  {
    id: "home",
    title: "خانه",
    icon: <Home />,
    navLink: "/home",
  },
  {
    id: "user",
    title: "کاربران",
    icon: <Users/>,
    navLink: "/user",
  },
  {
    id: "thirdPage",
    title: "مدیریت دوره",
    icon: <Layers />,
    // navLink: "/courses",
    children: [
      {
        id: "third1Page",
        title: "لیست دوره ها",
        icon: <Circle size={12} />,
        navLink: "/course",
      },
      {
        id: "coursecreat",
        title: "افزودن دوره جدید",
        icon: <Circle size={12} />,
        navLink: "/creatcourse",
      },
    ],
  },
  {
    id: "user",
    title: "اخبار و مقالات",
    icon: <BookOpen/>,
    navLink: "/blog",
  },
  {
    id: "podcast",
    title: " پادکست",
    icon: <Mic/>,
    navLink: "/podcast",
  },
  {
    id: "calendar",
    title: " تقویم آموزشی",
    icon: <Calendar/>,
    navLink: "/calendar",
  },
  {
    id: "allcomment",
    title: "مدیریت کامت ها",
    icon: <Command/>,
    navLink: "/comment",
  },
  // {
  //   id: "secondPage",
  //   title: "صفحه نمونه",
  //   icon: <Mail size={20} />,
  //   navLink: "/second-page",
  // },
  // {
  //   id: "smaplePage",
  //   title: "نمونه",
  //   icon: <Airplay size={20} />,
  //   children: [
  //     {
  //       id: "invoiceList",
  //       title: "لیست",
  //       icon: <Circle size={12} />,
  //       navLink: "/apps/invoice/list",
  //     },
  //   ],
  // },
];
