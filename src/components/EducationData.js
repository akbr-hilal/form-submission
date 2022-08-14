import React from 'react';

import { levelEducation } from '../data/DataEducation';

function EducationData({ prevStep ,nextStep, handleChange, values}) {

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  const Previous = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <div className='container'>
      <h2 className='text-center'>
        Last Education History Data
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}}>
          {/* Last Education */}
          <div className="form-group mb-3">
            <label className="form-label">Last Education</label>
            <select className='form-control' value={values.lastEducation} onChange={handleChange('lastEducation')}>
              <option value="" hidden>Select Last Education</option>
              {levelEducation.map(item => (
                <option value={item.value} key={item.id} >{item.label}</option>
              )) }
            </select>
          </div>

          {/* Final Score */}
          <div className="form-group mb-3">
            <label className="form-label">Final Score / GPA</label>
            <input type="number" placeholder='Final Score / GPA' name='finalScore' className="form-control" onChange={handleChange('finalScore')} defaultValue={values.finalScore}  />
          </div>

          {/* Graduation Date */}
          <div className="form-group mb-3">
            <label className="form-label">Graduation Date</label>
            <input type="date" name='graduationDate' className="form-control" onChange={handleChange('graduationDate')} defaultValue={values.graduationDate}  />
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
        </form>
      </div>
    </div>
  )
}

export default EducationData