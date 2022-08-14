import React from 'react';

import gender from '../data/DataGender';

const PersonalData = ({nextStep, handleChange, values}) => {

  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className='container'>
      <h2 className='text-center'>
        Data User
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}}>
          {/* Name */}
          <div className="form-group mb-3">
            <label className="form-label">Name</label>
            <input type="text" placeholder='Name' name='name' className="form-control" onChange={handleChange('name')} value={values.name} />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input type="email" placeholder='Email' name='email' className="form-control" onChange={handleChange('email')} value={values.email}  />
          </div>

          {/* Gender */}
          <div className="form-group mb-3">
            <label className="form-label">Gender</label>
            <select className='form-control' value={values.gender} onChange={handleChange('gender')}>
              <option value="" hidden>Select Gender</option>
              {gender.map(item => (
                <option value={item.value} key={item.id} >{item.label}</option>
              )) }
            </select>
          </div>

          {/* Birth Day && Birth Place */}
          <div className='row'>
            {/* Birth Day */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Birth Day</label>
              <input type="date" name='birthDay' className="form-control" onChange={handleChange('birthDay')} value={values.birthDay}  />
            </div>
            {/* BirthPlace */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Birth Place</label>
              <input type="text" name='birthPlace' className="form-control" onChange={handleChange('birthPlace')} value={values.birthPlace}  />
            </div>
          </div>

          {/* Handphone && Country */}
          <div className='row'>
            {/* Handphone */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Handphone</label>
              <input type="number" name='handphone' className="form-control" onChange={handleChange('handphone')} value={values.handphone}  />
            </div>
            {/* Country */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Country</label>
              <input type="text" name='country' className="form-control" onChange={handleChange('country')} value={values.country}  />
            </div>
          </div>

          {/* Address */}
          <div className="form-group mb-3">
            <label className="form-label">Address</label>
            <textarea placeholder='Address' name='address' className="form-control" onChange={handleChange('address')} value={values.address}></textarea>
          </div>

          {/* Button */}
          <div>
            <button onClick={ Continue } className='btn btn-primary col-md-5 col-12 ms-0 ms-lg-2' type='submit'>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalData