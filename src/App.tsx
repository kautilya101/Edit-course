import FormPage, { contentAction } from './pages/FormPage'
import useFetch from './Hooks/useFetch'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import { useState } from 'react';
function App() {
  
  const { courses, tags, enrolledList } = useFetch();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} 
          loader={
            async () => {
              return courses();
          }
        }
        />
        <Route 
          path='/:id/:name' element={<FormPage/>} 
          loader={async ({params})  => {
            try{
              const courseList = await courses();
              const course = courseList.courses.filter((course: course) => course.courseId == params.id);
              const tagsList = await tags();
              const enrolledListItems = await enrolledList();
              return {course, tagsList, enrolledListItems}
              }
            catch(e){
              console.error(e);
            }
        }}
        action={contentAction}
        
        />
        <Route path='/course' />
      </Route>
    )
  );

 

  return (
      <RouterProvider router={router}/>
  )
}

export default App
