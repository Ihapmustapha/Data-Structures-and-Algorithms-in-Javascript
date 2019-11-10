/*
 * https://www.hackerrank.com/challenges/grading/problem
 */

const gradingStudents = grades => {
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37 && 5 - (grades[i] % 5) < 3) {
      roundedGrades.push(grades[i] + 5 - (grades[i] % 5));
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
};

/***********Tests************/
console.log(gradingStudents([73, 67, 38, 33]));
