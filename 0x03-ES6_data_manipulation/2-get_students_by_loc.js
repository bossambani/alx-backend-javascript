export default function getStudentsByLocation(students, location) {
  // check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // check if location is a string
  if (typeof location !== 'string') {
    return [];
  }

  return students.filter((student) => student.location === location);
}
