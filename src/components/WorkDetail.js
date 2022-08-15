import React from "react";
import { useFormik } from 'formik'
import * as yup from 'yup'

const WorkDetails = ({ nextStep, prevStep, handleChange, values }) => {

  const formik = useFormik({
    initialValues: {
      lastJob: "",
      companyName: "",
      outDate: "",
      reasonResign: "",
    },
    validationSchema: yup.object({
      lastJob: yup.string().required('Please enter your last job'),
      companyName: yup.string().required('Please enter your last company name'),
      outDate: yup.string().required('Please select out date your last job'),
      reasonResign: yup.string().required('Please enter your reason resign from last job'),
    }),
    onSubmit: (values)=> {
      // console.log(values)
      const data = JSON.stringify(values)
      localStorage.setItem("Data Work", data)

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
        Last Work History Data
      </h2>
      <div className='d-flex justify-content-center'>
        <form style={{ width: "400px"}} onSubmit={formik.handleSubmit}>
          {/* Last Job */}
          <div className="form-group mb-3">
            <label className="form-label">Last Job</label>
            <input type="text" placeholder='Last Job' name='lastJob' className="form-control" onChange={handleChange('lastJob')} defaultValue={values.lastJob} {...formik.getFieldProps("lastJob")}  />
            {formik.touched.lastJob && formik.errors.lastJob ? <span className="text-danger">{formik.errors.lastJob}</span> : null}
          </div>

          {/* Company Name */}
          <div className="form-group mb-3">
            <label className="form-label">Company Name</label>
            <input type="text" placeholder='Company Name' name='companyName' className="form-control" onChange={handleChange('companyName')} defaultValue={values.companyName} {...formik.getFieldProps("companyName")}  />
            {formik.touched.companyName && formik.errors.companyName ? <span className="text-danger">{formik.errors.companyName}</span> : null}
          </div>

          {/* Graduation Date */}
          <div className="form-group mb-3">
            <label className="form-label">Out Date</label>
            <input type="date" name='outDate' className="form-control" onChange={handleChange('outDate')} defaultValue={values.outDate}  {...formik.getFieldProps("outDate")}  />
            {formik.touched.outDate && formik.errors.outDate ? <span className="text-danger">{formik.errors.outDate}</span> : null}
          </div>

          {/* Reason Resign */}
          <div className="form-group mb-3">
            <label className="form-label">Reason Resign</label>
            <textarea placeholder='Reason Resign' name='reasonResign' className="form-control" onChange={handleChange('reasonResign')} defaultValue={values.reasonResign} {...formik.getFieldProps("reasonResign")} />
            {formik.touched.reasonResign && formik.errors.reasonResign ? <span className="text-danger">{formik.errors.reasonResign}</span> : null}
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

export default WorkDetails