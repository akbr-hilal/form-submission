import React from "react";
import { useFormik } from 'formik'
import * as yup from 'yup'


const SkillDetails = ({ nextStep, prevStep, handleChange, values }) => {

  // for validate form
  const formik = useFormik({
    initialValues: {
      skill: "",
    },
    validationSchema: yup.object({
      skill: yup.string().required('Please enter your skill')
    }),
    onSubmit: (values)=> {
      // console.log(values)
      const data = JSON.stringify(values)
      localStorage.setItem("Data Skill", data)

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
        Skill Data
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}} onSubmit={formik.handleSubmit}>
          {/* Skill */}
          <div className="form-group mb-3">
            <label className="form-label">Skill</label>
            <textarea placeholder='Skill' name='skill' className="form-control" onChange={handleChange('skill')} defaultValue={values.skill} {...formik.getFieldProps("skill")} />
            {formik.touched.skill && formik.errors.skill ? <span className="text-danger">{formik.errors.skill}</span> : null}
          </div>

          {/* Button */}
          <div className='text-center'>
            <button onClick={formik.isValid ? false : true } className='btn btn-primary col-md-5 col-12 me-0 me-lg-5' type='submit'>
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

export default SkillDetails