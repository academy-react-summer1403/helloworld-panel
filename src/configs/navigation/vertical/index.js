import { BookOpen, Home,Mic,Calendar,Activity,Aperture,Command,Shuffle,Star,Square,ThumbsUp } from "react-feather";
import { Layers,Circle,Users } from "react-feather";

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
    // navLink: "/blog",

    children: [
      {
        id: "user",
        title: "  لیست اخبار و مقالات",
        icon: <Circle size={12}/>,
        navLink: "/blog",
      },
      {
        id: "third1Page",
        title: "  دسته‌بندی مقالات",
        icon: <Circle size={12} />,
        navLink: "/blogcategory",
      }
      
    ],
  },
  {
    id: "allcomment",
    title: "مدیریت کامت ها",
    icon: <Command/>,
    navLink: "/comment",
  },
  {
    id: "assistancework",
    title: " تسک‌ها",
    icon: <Activity/>,
    navLink: "/assistancework",
  },
  {
    id: "building",
    title: " ساختمان‌ها",
    icon: <Aperture/>,
    navLink: "/building",
  },
  {
    id: "classroom",
    title: " کلاس‌ها",
    icon: <Command/>,
    navLink: "/classroom",
  },
  {
    id: "department",
    title: " بخش‌های پژوهشگاه",
    icon: <Shuffle/>,
    navLink: "/department",
  },
  {
    id: "term",
    title: "ترم",
    icon: <Star/>,
    navLink: "/term",
  },
  {
    id: "status",
    title: "وضعیت",
    icon: <Square/>,
    navLink: "/status",
  },
  {
    id: "technology",
    title: "تکنولوژی",
    icon: <ThumbsUp/>,
    navLink: "/technology",
  },
  // {
  //   id: "podcast",
  //   title: " پادکست",
  //   icon: <Mic/>,
  //   navLink: "/podcast",
  // },
  {
    id: "calendar",
    title: " تقویم آموزشی",
    icon: <Calendar/>,
    navLink: "/calendar",
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
