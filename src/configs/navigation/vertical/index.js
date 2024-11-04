import { Home } from "react-feather";
import { Layers } from "react-feather";

export default [
  {
    id: "home",
    title: "خانه",
    icon: <Home />,
    navLink: "/home",
  },
  {
    id: "course",
    title: "دوره",
    icon: <Layers />,
    navLink: "/course",
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
