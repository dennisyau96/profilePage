import EducationCard from "./EducationCard.jsx";
import styles from "./Education.module.css";

function Education() {
  const PrimaySchool = {
    name: "Po Leung Kuk Horizon East Primary School",
    year: "2003-2009",
    achievement: "Primary 1 - Primary 6",
    img: "",
  };

  const SecondarySchool = {
    name: "Po Leung Kuk Centenery Li Shiu Chung Memorial College ",
    year: "2009-2015",
    achievement: "Secondary 1 - Secondary 6",
    img: "",
  };

  const University = {
    name: "The Chinese University of Hong Kong",
    year: "2015-2019",
    achievement: "Bachelor of Sciences(Biology)",
    img: "",
  };

  const PDDICT = {
    name: "Douglas College",
    year: "2023-2024",
    achievement: "Post-Degree Diploma of Information, Communication Technology",
  };
  return (
    <>
      <div id="educationDiv" className="educationDiv">
        <EducationCard content={PrimaySchool} />
        <EducationCard content={SecondarySchool} />
        <EducationCard content={University} />
        <EducationCard content={PDDICT} />
      </div>
    </>
  );
}

export default Education;
