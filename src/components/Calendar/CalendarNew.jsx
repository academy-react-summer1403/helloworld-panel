// // import React, { useState } from 'react';
// // import Calendar from 'react-calendar';
// // import moment from 'jalali-moment';
// // import 'react-calendar/dist/Calendar.css';

// // function PersianCalendar() {
// //   const [date, setDate] = useState(new Date());
// //   const [details, setDetails] = useState('');

// //   // جزییات هر تاریخ (این جزییات می‌تواند از API یا دیتاهای ثابت باشد)
// //   const dateDetails = {
// //     '2024-11-24': 'مناسبت: روز استقلال',
// //     '2024-11-25': 'یادآوری: تولد علی',
// //     '2024-11-26': 'تعطیل: روز جهانی محیط زیست',
// //     // اضافه کردن جزییات برای دیگر تاریخ‌ها
// //   };

// //   const onChange = (newDate) => {
// //     setDate(newDate);
// //   };

// //   const formattedDate = moment(date).format('jYYYY/jMM/jDD'); // تاریخ شمسی

// //   // نمایش جزییات تاریخ انتخاب شده
// //   const getDetails = (selectedDate) => {
// //     const dateString = moment(selectedDate).format('YYYY-MM-DD');
// //     return dateDetails[dateString] || 'هیچ جزییاتی برای این تاریخ وجود ندارد';
// //   };

// //   // جزییات تاریخ انتخابی
// //   const selectedDetails = getDetails(date);

// //   return (
// //     <div>
// //       <h2>تقویم فارسی</h2>
// //       <Calendar
// //         onChange={onChange}
// //         value={date}
// //         locale="fa-IR"  // نمایش تاریخ‌ها به فارسی
// //       />
// //       <div>
// //         <h3>تاریخ انتخابی: {formattedDate}</h3>
// //         <p>{selectedDetails}</p> {/* نمایش جزییات تاریخ */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default PersianCalendar;





// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import moment from 'jalali-moment';
// import axios from 'axios'; // برای فراخوانی API
// import 'react-calendar/dist/Calendar.css';

// function PersianCalendar() {
//   const [date, setDate] = useState(new Date());
//   const [dateDetails, setDateDetails] = useState({}); // ذخیره جزییات تاریخ‌ها
//   const [selectedDetails, setSelectedDetails] = useState(null); // ذخیره جزییات تاریخ انتخاب‌شده

//   // فراخوانی داده‌ها از API
//   useEffect(() => {
//     // فرض کنید API شما به این صورت است
//     axios.get('https://classapi.sepehracademy.ir/api/Course/CourseList?PageNumber=1&SortingCol=DESC&SortType=Expire') // این URL باید URL واقعی API شما باشد
//       .then(response => {
//         // فرض می‌کنیم پاسخ API به شکل { "YYYY-MM-DD": { "title": "مناسبت", "description": "توضیحات" } } باشد
//         setDateDetails(response.courseFilterDtos);
//       })
//       .catch(error => {
//         console.error('Error fetching date details:', error);
//       });
//   }, []);

//   const onChange = (newDate) => {
//     setDate(newDate);
//     const dateString = moment(newDate).format('YYYY-MM-DD');
//     // دریافت جزییات تاریخ انتخاب‌شده
//     const details = dateDetails[dateString];
//     setSelectedDetails(details || null); // اگر جزییاتی موجود است، ذخیره کن
//   };

//   const formattedDate = moment(date).format('jYYYY/jMM/jDD'); // تاریخ شمسی

//   // نمایش جزییات تاریخ انتخاب‌شده در قالب جدول
//   const renderDetailsTable = () => {
//     if (!selectedDetails) {
//       return <p>هیچ جزییاتی برای این تاریخ وجود ندارد.</p>;
//     }
    
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>عنوان</th>
//             <th>توضیحات</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{selectedDetails.title}</td>
//             <td>{selectedDetails.describe}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div>
//       <h2>تقویم فارسی</h2>
//       <Calendar
//         onChange={onChange}
//         value={date}
//         locale="fa-IR"  // نمایش تاریخ‌ها به فارسی
//       />
//       <div>
//         <h3>تاریخ انتخابی: {formattedDate}</h3>
//         {renderDetailsTable()} {/* نمایش جزییات تاریخ انتخابی در قالب جدول */}
//       </div>
//     </div>
//   );
// }

// export default PersianCalendar;

