import React, { useEffect } from "react";
import { useState } from "react";

import PersonalData from "./PersonalData";
import EducationData from "./EducationData";
import WorkData from './WorkData'
import SkillData from './SkillData'
import Confirm from "./Confirm";

function Data() {
  const [state, setState] = useState({
    step: 1,
    name: "",
    email: "",
    gender: "",
    birthDay: "",
    birthPlace: "",
    handphone: "",
    country: "",
    address: "",
    lastEducation: "",
    finalScore: "",
    graduationDate: "",
    lastJob: "",
    companyName: "",
    outDate: "",
    reasonResign: "",
    skill: "",
  });

 

  const prevStep = () => {
    const { step } = state;
    setState({ step: step - 1 });
  };

  const nextStep = () => {
    const { step } = state;
    setState({ step: step + 1 });


    const dataPersonal = JSON.stringify(state)
    localStorage.setItem("data personal", dataPersonal)
  };

  const handleChange = (input) => (e) => {
    setState({ 
      ...state, 
      [input]: e.target.value 
    });

    const json = JSON.stringify(state)
    localStorage.setItem("Data", json)
  };

  const { step } = state;
  const {
    name,
    email,
    gender,
    birthDay,
    birthPlace,
    handphone,
    country,
    address,
    lastEducation,
    finalScore,
    graduationDate,
    lastJob,
    companyName,
    outDate,
    reasonResign,
    skill,
  } = state;
  const values = {
    name,
    email,
    gender,
    birthDay,
    birthPlace,
    handphone,
    country,
    address,
    lastEducation,
    finalScore,
    graduationDate,
    lastJob,
    companyName,
    outDate,
    reasonResign,
    skill,
  };
  
   
  // useEffect(() => {
  //   const dataPersonal = JSON.stringify({ name, email, gender, birthDay, birthPlace, handphone, country, address})
  //   localStorage.setItem("data personal", dataPersonal)
  // })
  switch (step) {
    case 1:
      return (
        <PersonalData
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
      // break;
    case 2:
      return(
        <EducationData 
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
      // break;
    case 3: 
      return (
        <WorkData 
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      )
      // break;
    case 4:
      return (
        <SkillData 
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      )
      // break;
    case 5: 
      return (
        <Confirm 
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      )
    default:
      break;
  }
}

export default Data;
