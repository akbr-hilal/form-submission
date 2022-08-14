import React from 'react';

function SkillData({ prevStep ,nextStep, handleChange, values}) {

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
        Skill Data
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}}>
          {/* Skill */}
          <div className="form-group mb-3">
            <label className="form-label">Skill</label>
            <textarea placeholder='Skill' name='skill' className="form-control" onChange={handleChange('skill')} defaultValue={values.skill}></textarea>
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

export default SkillData