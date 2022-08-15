import React, { useState} from 'react'
import { Container } from 'react-bootstrap';
import { List, ListItem, ListItemText } from '@material-ui/core'

const Confirmation = ({ prevStep, nextStep }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  
  const [educationData] = useState(JSON.parse(localStorage.getItem('Data Education')) || [])
  const [personalData] = useState(JSON.parse(localStorage.getItem('Data Personal')) || [])
  const [workData] = useState(JSON.parse(localStorage.getItem('Data Work')) || [])
  const [skillData] = useState(JSON.parse(localStorage.getItem('Data Skill')) || [])

  return (
    <Container className='py-2'>
      <div> 
        <div className='row'>

          {/* Personal Data */}
          <div className='col'>
            <h3>Personal Data</h3>
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={personalData.name}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={personalData.email}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={personalData.gender}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Birth Day" secondary={personalData.birthDay}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Birth Place" secondary={personalData.birthPlace}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="HandPhone" secondary={personalData.handphone}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Country of Residence" secondary={personalData.country}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={personalData.address}/>
              </ListItem>
            </List>
          </div>

          {/* Education Data */}
          <div className='col'>
            <h3>Education Data</h3>
            <List>
              <ListItem>
                <ListItemText primary="Level of Education Last" secondary={educationData.lastEducation}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Final Score" secondary={educationData.finalScore}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Gradtuation Date" secondary={educationData.graduationDate}/>
              </ListItem>
            </List>
          </div>

          {/* Work Data */}
          <div className='col'>
            <h3>Work Data</h3>
            <List>
              <ListItem>
                <ListItemText primary="Last Job" secondary={workData.lastJob}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Company Name" secondary={workData.companyName}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Out Date" secondary={workData.outDate}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Reason Resign" secondary={workData.reasonResign}/>
              </ListItem>
            </List>
          </div>

          {/* Skill Data */}
          <div className='col'>
            <h3>Skill Data</h3>
            <List>
              <ListItem>
                <ListItemText primary="Skill" secondary={skillData.skill}/>
              </ListItem>
            </List>
          </div>
        </div>
        <br />
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
    </Container>
  )
}

export default Confirmation
