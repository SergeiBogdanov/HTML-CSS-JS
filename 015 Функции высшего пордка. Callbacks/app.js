// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('Denis Mescheryakov');

function question(job) {
  const jobsDictionary = {
    developer: 'что такое JS?',
    teacher: 'какой предмет вы преподаете?',
  };

  return function(name) {
    return name + ', ' + jobsDictionary[job] ;
  };
}

const developerQustion = question('developer');
const teacherQustion = question('teacher');
console.log(developerQustion('John'));
console.log(teacherQustion('John'));
