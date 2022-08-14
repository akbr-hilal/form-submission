import React from 'react';

function WorkData({ prevStep ,nextStep, handleChange, values}) {

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
        Last Work History Data
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}}>
          {/* Last Job */}
          <div className="form-group mb-3">
            <label className="form-label">Last Job</label>
            <input type="text" placeholder='Last Job' name='lastJob' className="form-control" onChange={handleChange('lastJob')} defaultValue={values.lastJob}  />
          </div>

          {/* Company Name */}
          <div className="form-group mb-3">
          <label className="form-label">Company Name</label>
            <input type="text" placeholder='Company Name' name='companyName' className="form-control" onChange={handleChange('companyName')} defaultValue={values.companyName}  />
          </div>

          {/* Graduation Date */}
          <div className="form-group mb-3">
            <label className="form-label">Out Date</label>
            <input type="date" name='outDate' className="form-control" onChange={handleChange('outDate')} defaultValue={values.outDate}  />
          </div>

          {/* Reason Resign */}
          <div className="form-group mb-3">
            <label className="form-label">Reason Resign</label>
            <textarea placeholder='Reason Resign' name='reasonResign' className="form-control" onChange={handleChange('reasonResign')} defaultValue={values.reasonResign}></textarea>
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

export default WorkData