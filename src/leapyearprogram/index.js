//My implementation
// function leapYear(year) {
//   if (year % 400 == 0) {
//     return true;
//   } else if (year % 100 == 0) {
//     return false;
//   } else if (year < 1582) {
//     alert("Only works for years after 1582");
//   } else if (year % 4 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Thinkful implementation
function leapYear(year) {
  if (year < 1582) {
    throw new Error('Leap year rules do not work before 1582');
  }

  const div400 = year % 400 === 0;
  const div100 = year % 100 === 0;
  const div4 = year % 4 === 0;
  return div400 || (div4 && !div100);
}

export default leapYear;