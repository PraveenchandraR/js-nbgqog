// Import stylesheets
import './style.css';
// Sample array of student objects
var students = [
  {
    name: 'John',
    chemistryMarks: 80,
    biologyMarks: 90,
    dateOfBirth: '01-01-2000',
  },
  {
    name: 'Alice',
    chemistryMarks: 85,
    biologyMarks: 95,
    dateOfBirth: '05-03-1999',
  },
  {
    name: 'Bob',
    chemistryMarks: 90,
    biologyMarks: 80,
    dateOfBirth: '12-06-2001',
  },
  {
    name: 'Baba',
    chemistryMarks: 91,
    biologyMarks: 81,
    dateOfBirth: '12-07-2001',
  }
  // Add more student objects as needed
];

// Custom sort function based on the given rules
function sortStudents(a, b) {
  // Sorting by total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (
    a.chemistryMarks + a.biologyMarks <
    b.chemistryMarks + b.biologyMarks
  ) {
    return 1;
  }

  // Sort by biology marks (second priority)
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // Sort by date of birth (third priority)
  return 0;
}
students.sort(sortStudents);
//printing only names of the students using map function
var names = students.map(function (student) {
  return student.name;
});

// Output the names
var output = document.getElementById('output');
output.textContent = names.join(', ');
