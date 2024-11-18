// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/app/layouts/VerticalLayout";
import HorizontalLayout from "@src/app/layouts/HorizontalLayout";
// import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
import LayoutWrapper from "@src/components/common/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@coreComponents/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";


const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/home";

const Home = lazy(() => import("../../pages/Home/Home"));

const Courses = lazy(() => import("../../pages/Courses/Courses"));

const User = lazy(() => import("../../pages/User/User"));
const UserDetail = lazy(() => import("../../pages/UserDetail/UserDetil"));
const EditUser = lazy(() => import("../../pages/EditUser/EditUser"));

const CourseDeatil = lazy(() => import("../../pages/CourseDeatil/CourseDeatil"));
const DeleteUserPage = lazy(() => import("../../pages/DeleteUser/DeleteUser"));

const SecondPage = lazy(() => import("../../pages/SecondPage"));
const Login = lazy(() => import("../../pages/Auth/Login"));
const Register = lazy(() => import("../../pages/Auth/Register"));
const ForgotPassword = lazy(() => import("../../pages/Auth/ForgotPassword"));
const Error = lazy(() => import("../../pages/Error/Error"));
const Sample = lazy(() => import("../../pages/Sample"));
const Blogs = lazy(() => import("../../pages/Blogs/Blogs"));


// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User/>
  },
  {
    path: "/user/:id",
    element: <UserDetail/>
  },
  {
    path: "/user/edit/:id",
    element: <EditUser/>
  },
  {
    path: "/user/delete/:id",
    element: <DeleteUserPage/>
  },
  {

    path: "/course",
    element: <Courses />

  },
  {
    path: "/course/:id",
    element: <CourseDeatil/>
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/blog",
    element: <Blogs/>
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
