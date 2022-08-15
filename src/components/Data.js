import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import WorkDetails from './WorkDetail'
import EducationDetails from './EducationDetails'
import SkillDetails from './SkillDetails'
import Confirmation from './Confirmation'
import Success from './Success'

export default class Data extends Component {

  state = {
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
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
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
    } = this.state;
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
    }
    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <EducationDetails
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <WorkDetails
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
      case 4: 
        return (
          <SkillDetails
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 5: 
        return (
          <Confirmation 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            values={ values }
          />
        )
      case 6:
        return (
          <Success />
        )
      default: 
          // do nothing
    }
  }
}
