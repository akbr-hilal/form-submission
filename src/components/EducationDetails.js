import React from "react";
import { useFormik } from 'formik'
import * as yup from 'yup'
import { levelEducation } from '../data/DataEducation';

const EducationDetails = ({ nextStep, prevStep, handleChange, values }) => {

  // for validate form
  const formik = useFormik({
    initialValues: {
      lastEducation: '',
      finalScore: '',
      graduationDate: ''
    },
    validationSchema: yup.object({
      lastEducation: yup.string().required('Please select level education'),
      finalScore: yup.string().required('Please enter your final score'),
      graduationDate: yup.string().required('Please enter your graduation date')
    }),
    onSubmit: (values)=> {
      // console.log(values)
      const data = JSON.stringify(values)
      localStorage.setItem("Data Education", data)

      // for next event listener
      nextStep()
    },
  })

  // for previous event listener
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  

  return (
    <div className='container'>
      <h2 className='text-center'>
        Last Education History Data
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}} onSubmit={formik.handleSubmit}>
          {/* Last Education */}
          <div className="form-group mb-3">
            <label className="form-label">Last Education</label>
            <select className='form-control' value={values.lastEducation} onChange={handleChange('lastEducation')} {...formik.getFieldProps("lastEducation")} name="lastEducation">
              <option value="" hidden>Select Last Education</option>
              {levelEducation.map((item, index) => (
                <option value={item.value} key={index} >{item.label}</option>
              )) }
            </select>
            {formik.touched.lastEducation && formik.errors.lastEducation ? <span className="text-danger">{formik.errors.lastEducation}</span> : null}
          </div>

          {/* Final Score */}
          <div className="form-group mb-3">
            <label className="form-label">Final Score / GPA</label>
            <input type="number" placeholder='Final Score / GPA' name='finalScore' className="form-control" onChange={handleChange('finalScore')} defaultValue={values.finalScore} {...formik.getFieldProps("finalScore")} />
            {formik.touched.finalScore && formik.errors.finalScore ? <span className="text-danger">{formik.errors.finalScore}</span> : null}
          </div>

          {/* Graduation Date */}
          <div className="form-group mb-3">
            <label className="form-label">Graduation Date</label>
            <input type="date" name='graduationDate' className="form-control" onChange={handleChange('graduationDate')} defaultValue={values.graduationDate} {...formik.getFieldProps("graduationDate")} />
            {formik.touched.graduationDate && formik.errors.graduationDate ? <span className="text-danger">{formik.errors.graduationDate}</span> : null}
          </div>

          {/* Button */}
          <div className='text-center'>
            <button onClick={formik.isValid ? false : true } className='btn btn-primary col-md-5 col-12 me-0 me-lg-5' type='submit' >
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

export default EducationDetails