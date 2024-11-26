import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar"; // You can use Vuexy's Calendar component here
import moment from "moment";
import http from "@src/core/services/interceptor/interceptor";

const getCourseList = async (sDate,eDate) => {
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

    console.log("result courseList:", result.data.courseFilterDtos);
    return result.data.courseFilterDtos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Sample API data (simulated here for October, November, and December)
const fetchCourses = async (month) => {
  // Simulating different data for October, November, and December
  const courses = [
    { title: `Course 1 for ${month}`, term: 1 },
    { title: `Course 2 for ${month}`, term: 2 },
    { title: `Course 3 for ${month}`, term: 1 },
    { title: `Course 4 for ${month}`, term: 3 },
    // Add more courses
  ];
  return courses;
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

const CustomCalendar = () => {
  const [octCourses, setOctCourses] = useState([]);
  const [novCourses, setNovCourses] = useState([]);
  const [decCourses, setDecCourses] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const octoberCourses = await fetchCourses("October");
      // const novemberCourses = await fetchCourses("November");
      // const decemberCourses = await fetchCourses("December");
      

      // setOctCourses(octoberCourses);
      // setNovCourses(novemberCourses);
      // setDecCourses(decemberCourses);

    const novemberList = await  getCourseList("2024-11-01","2024-11-20")
    setNovCourses(novemberList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Helper to map courses to their respective months with random weeks
    const getRandomizedCourses = (courses, month) => {
      const list = courses.map((course) => {
        const randomDay = getRandomWeekDay(month); // Get a random day for the course in the given month
        return {
          title: course.title,
          start: randomDay,
          end: randomDay,
          allDay: true,
          month: month,
        };
      });
      // console.log("final list",list)
      return list
    };

    if (
      octCourses.length > 0 ||
      novCourses.length > 0 ||
      decCourses.length > 0
    ) {
      const allEvents = [
        // ...getRandomizedCourses(octCourses, 9), // October (index 9)
        ...getRandomizedCourses(novCourses, 10), // November (index 10)
        // ...getRandomizedCourses(decCourses, 11), // December (index 11)
      ];
      setEvents(allEvents);
      console.log("final allEvents",allEvents)
    }
  }, [octCourses, novCourses, decCourses]);

  // useEffect(()=>{
  //   getCourseList("2024-11-01","2024-11-20")
  // },[])
  return (
    <div>
      <h1>کلندر خودمون</h1>
      <Calendar
        events={events} // Pass the generated events to Vuexy's Calendar
        // You can style and configure the calendar as needed
      />
    </div>
  );
};

export default CustomCalendar;
