import {  Box, Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Form, useFetcher, useLoaderData, useParams } from 'react-router-dom'
import CustomAutoComplete from '../components/CustomAutoComplete';
import useFetch from '../Hooks/useFetch';



export default function FormPage() {

  const {course,tagsList,enrolledListItems} = useLoaderData() ;
  const fetcher = useFetcher();


  // const handleSubmit = async (event: Event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   formData.append('tags',tagValues)
  //   formData.append('enrolled',JSON.stringify(enrollValues))
  //   const submission = {
  //     courseName: formData.get('course'),
  //     instructorName: formData.get('instructor'),
  //     tags: formData.get('tags'),
  //     students: formData.get('enrolled')
  //   }
  //   console.log(submission);
  // }

  return (
    <Box component='div' sx={{ m:'0 auto',mt:'2rem'  }} width='50%'>
      <Box sx={{m:'30px 0', fontSize:"40px"}}>Edit Course Details</Box>
      <Form method='POST' >
        <TextField name='course' label="Course Name" defaultValue={course[0].courseName} sx={{ width:'100%',mb:'15px'}} />
        <TextField name='instructor' label="Instructor Name" defaultValue={course[0].instructorName} sx={{ width:'100%',mb:'15px'}} />
        <CustomAutoComplete
          name="tags"
          defaultData={course[0].tags} 
          options={tagsList.tags} 
          // handleChange={setTagValues}
        />
        <CustomAutoComplete
          name="students"
          defaultData={course[0].students} 
          options={enrolledListItems.enrolledList}
          // handleChange={setEnrollvalues}
          renderOption={(option) => <div>{option.name}</div>}
        />
        <button style={{ 
          padding:'7px', 
          fontSize:'13px', 
          fontWeight:'bold',
          backgroundColor:'orange',
          border:'none', 
          borderRadius:'3px'
          }} type='submit' >UPDATE FORM</button>
      </Form>
    </Box>
  )
}


export async function contentAction({ request }){
    let formData = await request.formData();
    let course = formData.get('course')
    let instructor = formData.get('instructor');
    let submission = {
      courseName: course,
      instructorName: instructor
    }
    console.log(submission);
    return submission;

}