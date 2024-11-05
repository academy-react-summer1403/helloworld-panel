import { Home } from "react-feather";
import { Layers,Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "خانه",
    icon: <Home />,
    navLink: "/home",
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
        id: "creatcourse",
        title: "افزودن دوره جدبد",
        icon: <Circle size={12} />,
        navLink: "/cours",
      },
    ],
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
