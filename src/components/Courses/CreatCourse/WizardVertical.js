// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "../../common/wizard";

// ** Steps
import Address from "./steps/Address";
import SocialLinks from "./steps/SocialLinks";
import PersonalInfo from "./steps/PersonalInfo";
import AccountDetails from "./steps/AccountDetails";

import { sendCourses } from "../../../core/services/api/Coueses/CreatCourse";
import { useEffect } from "react";

const WizardVertical = () => {
  // ** Ref
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const [formData, setFormData] = useState({
    accountDetails: {},
    address: {},
    personalInfo: {},
    socialLinks: {},
  });

  // console.log("formData", formData);

  // const obj = {
  //   Title: formData.accountDetails.Title,
  //   Describe: formData.accountDetails.Describe,
  //   MiniDescribe: formData.accountDetails.MiniDescribe,
  //   Capacity: formData.accountDetails.Capacity,
  //   CourseTypeId: formData.address.CourseTypeId,
  //   CourseLvlId: formData.address.CourseLvlId,
  //   ClassId: formData.address.ClassId,
  //   SessionNumber: formData.address.SessionNumber,
  //   TeacherId: formData.address.TeacherId,
  //   TremId: formData.address.TremId,
  //   Cost: formData.personalInfo.Cost,
  //   StartTime: formData.personalInfo.StartTime,
  //   EndTime: formData.personalInfo.EndTime,
  //   UniqeUrlString: formData.personalInfo.UniqeUrlString,
  //   // CourseTypeId: formData.accountDetails.CourseTypeId,
  // };

  // console.log("title", obj);

  // const handleCreatCourse = async (e) => {
  //   try {
  //     const res = await sendCourses(e);
  //     console.log("res", res);
  //   } catch (error) {
  //     console.error("ERROR: ", error);
  //   }
  // };

  // useEffect(() => {
  //   handleCreatCourse();
  // }, []);

  const steps = [
    {
      id: "account-details",
      title: "مرحله اول",
      subtitle: "اطلاعات را وارد کنید",
      content: (
        <AccountDetails
          setFormData={setFormData}
          formData={formData}
          stepper={stepper}
          type="wizard-vertical"
        />
      ),
    },
    {
      id: "step-address",
      title: "مرحله دوم",
      subtitle: "اطلاعات را وارد کنید",
      content: (
        <Address
          stepper={stepper}
          setFormData={setFormData}
          formData={formData}
          type="wizard-vertical"
        />
      ),
    },
    {
      id: "personal-info",
      title: "مرحله سوم",
      subtitle: "اطلاعات را وارد کنید",
      content: (
        <PersonalInfo
          stepper={stepper}
          setFormData={setFormData}
          formData={formData}
          type="wizard-vertical"
        />
      ),
    },
    {
      id: "social-links",
      title: "مرحله چهارم",
      subtitle: "اطلاعات را وارد کنید",
      content: (
        <SocialLinks
          // handleCreatCourse={handleCreatCourse}
          stepper={stepper}
          // obj={obj}
          setFormData={setFormData}
          formData={formData}
          type="wizard-vertical"
        />
      ),
    },
  ];

  return (
    <div className="vertical-wizard">
      <Wizard
        type="vertical"
        ref={ref}
        steps={steps}
        options={{
          linear: false,
        }}
        instance={(el) => setStepper(el)}
      />
    </div>
  );
};

export default WizardVertical;
