import { Box, Button, IconButton, Stack } from '@mui/material'
import { Link, useLoaderData } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


export default function Home() {

  const data = useLoaderData() as courseResponse;

  return (
    <Box component='div' sx={{ m:'0 auto', mt:'2rem' }} width='70%' >
      <Box 
        component='div' 
        sx={{fontSize: '3rem'}}
      >
        CS Fundamentals
      </Box>
      <Stack spacing={4} sx={{ fontSize:'20px', mt: '2rem'}}>
        {data?.courses?.map((course: course) => (
          <Link key={course.courseId} to={`/${course.courseId}/${course.courseName}`} >
            <Stack  direction='row' component='div' >
              <Button 
                sx={{ 
                  color: 'black', 
                  fontSize:'1rem',
                  p: "0.25rem"
                }}
              > 
                {course.courseName} 
              </Button>
              <IconButton>
                <KeyboardDoubleArrowRightIcon/>
              </IconButton>
            </Stack>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}
