interface course{
  courseId: string,
  instructorName: string,
  courseName: string,
  tags: [],
  students: Student[]
}

interface Student{
  name: string
}

interface enrolledList{
  name: string
}

interface courseResponse{
  courses : []
}

interface tagsResponse{
  tags : []
}

interface enrolledResponse{
  enrolledList : []
}