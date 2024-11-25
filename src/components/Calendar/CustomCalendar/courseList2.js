import http from "@src/core/services/interceptor/interceptor";
import moment from "moment";

const getCourseList = async (sDate, eDate) => {
  try {
    console.log("fetching started...");
    const result = await http.get(
      "/Home/GetCoursesWithPagination?SortingCol=Active&TechCount=0",
      {
        params: {
          PageNumber: 1,
          RowsOfPage: 15,
          StartDate: sDate,
          EndDate: eDate,
        },
      }
    );

    console.log("result courseList:", result);
    return result.data.courseFilterDtos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Helper function to get random week and day of the month
const getRandomWeekDay = (month) => {
    const weeks = [1, 2, 3, 4]; // Weeks of the month
    const randomWeek = weeks[Math.floor(Math.random() * weeks.length)];
  
    const startDate = moment().month(month).startOf("month").date(1);
    const startOfWeek = startDate.add((randomWeek - 1) * 7, "days");
  
    // Get a random day of the selected week
    const randomDay = startOfWeek
      .add(Math.floor(Math.random() * 7), "days")
      .format("YYYY-MM-DD");
    return randomDay;
  };

export const getCustomCourseList = async () => {
  try {
    const novemberList = await getCourseList("2024-11-01", "2024-11-20");

    const getRandomizedCourses = (courses, month) => {
      return courses.map((course) => {
        const randomDay = getRandomWeekDay(month); // Get a random day for the course in the given month
        return {
          title: course.title,
          start: randomDay,
          end: randomDay,
          allDay: true,
          month: month,
        };
      });
    };

    const allEvents = [
      ...getRandomizedCourses(novemberList, 10), // November
    ];
    console.log("final allEvents", allEvents);
    return allEvents;
  } catch (error) {
    console.error("Error fetching course list", error);
    return [];
  }
};
