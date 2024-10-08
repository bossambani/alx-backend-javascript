export default function getListStudentIds(listStudents) {
  // check if listStudents is an array
  if (!Array.isArray(listStudents)) {
    return [];
  }

  return listStudents.map((student) => student.id);
}
