const useFetch = () =>{

  async function courses(): Promise<courseResponse> {
    const rawCourseData = await fetch('https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/course.json');
    const courseData = await rawCourseData.json();
    return courseData as courseResponse;
  }

  async function tags() : Promise<tagsResponse>{
    const rawTagsData = await fetch('https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/tags.json');
    const tagsData = await rawTagsData.json();
    return tagsData as tagsResponse;
  }

  async function enrolledList() : Promise<enrolledResponse>{
    const rawEnrolledList = await fetch('https://raw.githubusercontent.com/thedevelopers-co-in/dummy-api/main/students.json')
    const enrolledListData = await rawEnrolledList.json();
    return enrolledListData as enrolledResponse;
  }

  return { courses, tags, enrolledList  }

}

export default useFetch;