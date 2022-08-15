import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import gender from '../data/DataGender';



const PersonalDetails = ({ nextStep, handleChange, values }) => {

  // for validate form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      birthDay: "",
      birthPlace: "",
      handphone: "",
      country: "",
      address: "",
    },
    validationSchema: yup.object({
      name: yup.string().required('Please enter your name'),
      email: yup.string().email().required('Please enter your email'),
      gender: yup.string().required('Please select gender'),
      birthDay: yup.string().required('Please select date birth day'),
      birthPlace: yup.string().required('Please enter birth place'),
      handphone: yup.string().required('Please enter number phone'),
      country: yup.string().required('Please enter country'),
      address: yup.string().required('Please enter address')
    }),
    onSubmit: (values)=> {
      // console.log(values)
      const data = JSON.stringify(values)
      localStorage.setItem("Data Personal", data)

      // for next event listener
      nextStep()
    },
  })
  
  return (
    <div className='container'>
      <h2 className='text-center'>
        Data User
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}} onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="form-group mb-3">
            <label className="form-label">Name</label>
            <input type="text" placeholder='Name' name='name' className="form-control" onChange={handleChange('name')} value={values.name} {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? <span className="text-danger">{formik.errors.name}</span> : null}
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input type="email" placeholder='Email' name='email' className="form-control" onChange={handleChange('email')} value={values.email} {...formik.getFieldProps("email")}  />
            {formik.touched.email && formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null}
          </div>

          {/* Gender */}
          <div className="form-group mb-3">
            <label className="form-label">Gender</label>
            <select className='form-control' value={values.gender} onChange={handleChange('gender')} {...formik.getFieldProps("gender")}>
              <option value="" hidden>Select Gender</option>
              {gender.map(item => (
                <option value={item.value} key={item.id} >{item.label}</option>
              )) }
            </select>
            {formik.touched.gender && formik.errors.gender ? <span className="text-danger">{formik.errors.gender}</span> : null}
          </div>

          {/* Birth Day && Birth Place */}
          <div className='row'>
            {/* Birth Day */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Birth Day</label>
              <input type="date" name='birthDay' className="form-control" onChange={handleChange('birthDay')} value={values.birthDay} {...formik.getFieldProps("birthDay")} />
              {formik.touched.birthDay && formik.errors.birthDay ? <span className="text-danger">{formik.errors.birthDay}</span> : null}
            </div>
            {/* BirthPlace */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Birth Place</label>
              <input type="text" name='birthPlace' className="form-control" onChange={handleChange('birthPlace')} value={values.birthPlace} {...formik.getFieldProps("birthPlace")}  />
              {formik.touched.birthPlace && formik.errors.birthPlace ? <span className="text-danger">{formik.errors.birthPlace}</span> : null}
            </div>
          </div>

          {/* Handphone && Country */}
          <div className='row'>
            {/* Handphone */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Handphone</label>
              <input type="number" name='handphone' className="form-control" onChange={handleChange('handphone')} value={values.handphone} {...formik.getFieldProps("handphone")}  />
              {formik.touched.handphone && formik.errors.handphone ? <span className="text-danger">{formik.errors.handphone}</span> : null}
            </div>
            {/* Country */}
            <div className="col-6 form-group mb-3">
              <label className="form-label">Country</label>
              <input type="text" name='country' className="form-control" onChange={handleChange('country')} value={values.country} {...formik.getFieldProps("country")}  />
              {formik.touched.country && formik.errors.country ? <span className="text-danger">{formik.errors.country}</span> : null}
            </div>
          </div>

          {/* Address */}
          <div className="form-group mb-3">
            <label className="form-label">Address</label>
            <textarea placeholder='Address' name='address' className="form-control" onChange={handleChange('address')} value={values.address} {...formik.getFieldProps("address")}></textarea>
            {formik.touched.address && formik.errors.address ? <span className="text-danger">{formik.errors.address}</span> : null}
          </div>

          {/* Button */}
          <div>
            <button onClick={formik.isValid ? false : true } className='btn btn-primary col-md-5 col-12 ms-0 ms-lg-2' type='submit'>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalDetails
