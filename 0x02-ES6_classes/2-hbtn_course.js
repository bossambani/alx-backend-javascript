class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the name
  get name() {
    return this._name;
  }

  // setter for the name
  set name(newName) {
    this._name = newName;
  }

  // Getter for the length
  get length() {
    return this._length;
  }

  // setter for the length
  set length(newLength) {
    this._length = newLength;
  }

  // Getter for the students
  get students() {
    return this._students;
  }

  // setter for the students
  set students(newStudents) {
    this._students = newStudents;
  }
}
export default HolbertonCourse;
