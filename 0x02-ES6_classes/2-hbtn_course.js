export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof length !== 'number') throw new TypeError('length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students must be an array');

    for (const stud of students) {
      if (typeof stud !== 'string') throw new TypeError('students must only be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') throw new TypeError('length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(values) {
    if (!Array.isArray(values)) throw new TypeError('students must be an array');
    for (const val of values) {
      if (typeof val !== 'string') throw new TypeError('students should only contain strings');
    }
    this._students = values;
  }
}
