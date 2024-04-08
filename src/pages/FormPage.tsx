import {  Box, Button, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Form, useFetcher, useLoaderData, useParams } from 'react-router-dom'
import CustomAutoComplete from '../components/CustomAutoComplete';
import useFetch from '../Hooks/useFetch';
import { ControlPointSharp } from '@mui/icons-material';

export default function FormPage() {

  const data = useLoaderData() as course[];
  const [tagList,setTagList] = useState<string[]>([])
  const [enrolled,setEnrolled] = useState<enrolledList[]>([])
  const {enrolledList,tags } = useFetch();

  const [tagValues,setTagValues] = useState<string[]>(data[0].tags)
  const [enrollValues,setEnrollvalues] = useState<Student[]>(data[0].students)

  const handleTagClick = async() => {
    const tagData = await tags();
    setTagList(tagData.tags);
  }

  const handleEnrolledClick = async () => {
    const enrolledListData = await enrolledList();
    setEnrolled(enrolledListData.enrolledList)
  }

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('tags',tagValues)
    formData.append('enrolled',JSON.stringify(enrollValues))
    const submission = {
      courseName: formData.get('course'),
      instructorName: formData.get('instructor'),
      tags: formData.get('tags'),
      students: formData.get('enrolled')
    }
    console.log(submission);
  }

  return (
    <Box component='div' sx={{ m:'0 auto',mt:'2rem'  }} width='50%'>
      <Box sx={{m:'30px 0', fontSize:"40px"}}>Edit Course Details</Box>
      <Form method='POST' action='/' onSubmit={handleSubmit}>
        <TextField name='course' label="Course Name" value={data[0].courseName} sx={{ width:'100%',mb:'15px'}} />
        <TextField name='instructor' label="Instructor Name" value={data[0].instructorName} sx={{ width:'100%',mb:'15px'}} />
        <CustomAutoComplete
          name="tags"
          defaultData={data[0].tags} 
          options={tagList} 
          handleDataFetch={handleTagClick}  
          handleChange={setTagValues}
        />
        <CustomAutoComplete
          name="students"
          defaultData={data[0].students} 
          options={enrolled}
          handleChange={setEnrollvalues}
          handleDataFetch={handleEnrolledClick} 
          renderOption={(option) => <div>{option.name}</div>}
        />
        <button style={{ 
          padding:'7px', 
          fontSize:'13px', 
          fontWeight:'bold',
          backgroundColor:'orange',
          border:'none', 
          borderRadius:'3px'
          }}>UPDATE FORM</button>
      </Form>
    </Box>
  )
}
