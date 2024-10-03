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
    if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter for the length
  get length() {
    return this._length;
  }

  // setter for the length
  set length(newLength) {
    if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter for the students
  get students() {
    return this._students;
  }

  // setter for the students
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
        throw TypeError('Students must be an array');
    }
    this._students = newStudents;
  }
}
export default HolbertonCourse;
