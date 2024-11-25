import React from "react";

const readMe = () => {
  return (
    <div>
      hey, I'm working on a React project using Vuexy. I need to use its
      calendar component. first of all, I'm confused how it works. second I have
      a list of courses like this :
      {/* [ {title:"course1",term:1},{title:"course2",term:2},...] */}
      which are list of the courses that has duration of first day of a month
      till last day of a month. I'm fetching this data from an api call. I want
      to get data of each month seperately and save them. then randomly , I want
      to set them on a specific day of a week of their month. for example , if
      my getting the November courses, I want to set the course1 on second week,
      the course1 on forth week. completely random. and at the end show them on
      the Calender of Vuexy. provide me the code ************* no. look. i will
      call the api three times . first for october, and I will save them in
      octCourses state, and then for november and then for december. after that,
      I want to show them in their month's week randomly. now provide the code
    </div>
  );
};

export default readMe;
