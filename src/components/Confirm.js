import React from 'react'
// import dateFormat from 'dateformat';


function Confirm({ prevStep, nextStep, values }) {
  console.log(values)
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
  } = values;

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  const Previous = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <div className='Container'>
      {/* Personal Data */}
      <div className='mb-3'>
        <h3>Personal Data</h3>
        <div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Name: {name}</li>
            <li className='list-group-item'>Email: {email}</li>
            <li className='list-group-item'>Gender: {gender}</li>
            <li className='list-group-item'>Birth Day: {birthDay}</li>
            <li className='list-group-item'>Birth Place: {birthPlace}</li>
            <li className='list-group-item'>HandPhone: {handphone}</li>
            <li className='list-group-item'>Country: {country}</li>
            <li className='list-group-item'>Address: {address}</li>
          </ul>
        </div>
      </div>

      {/* Last Education History Data */}
      <div className='mb-3'>
        <h3>Last Education History Data</h3>
        <div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Level of Education Last: {lastEducation}</li>
            <li className='list-group-item'>Final Score / GPA: {finalScore}</li>
            <li className='list-group-item'>Gradutaion Date: {graduationDate}</li>
          </ul>
        </div>
      </div>

      {/* Last Work History Data */}
      <div className='mb-3'>
        <h3>Last Work History Data</h3>
        <div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Last Job: {lastJob}</li>
            <li className='list-group-item'>Company Name: {companyName}</li>
            <li className='list-group-item'>Out Date: {outDate}</li>
            <li className='list-group-item'>Reason Resign: {reasonResign}</li>
          </ul>
        </div>
      </div>

      {/* Skill */}
      <div className='mb-3'>
        <h3>Skill Data</h3>
        <div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Skill: {skill}</li>
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className='text-center'>
        <button onClick={Continue} className='btn btn-primary col-md-5 col-12 me-0 me-lg-5' type='submit'>
          Next
        </button>
        <button onClick={Previous} className='btn btn-outline-primary col-md-5 col-12 mt-3 mt-lg-0' type='submit'>
          Back
        </button>
      </div>
    </div>
  )
}

export default Confirm