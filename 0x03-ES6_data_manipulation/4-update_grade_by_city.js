export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // check if city is a string
  if (typeof city !== 'string') {
    return [];
  }

  // check if newGrades is an array
  if (!Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter((student) => student !== undefined)
    .map((student) => {
      if (student.location === city) {
        const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: gradeRecord ? gradeRecord.grade : 'N/A',
        };
      }
      return student;
    });
}
