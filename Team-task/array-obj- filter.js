const students = [ 

     { name: 'visha', std: 10, maths: 80, physics: 11, english: 85 }, 

    { name: 'nisha', std: 10, maths: 30, physics: 23, english: 75 }, 

     { name: 'dev', std: 10, maths: 60, physics: 70, english: 80 }, 

    { name: 'ram', std: 10, maths: 20, physics: 65, english: 90 }, 

     { name: 'shyam', std: 10, maths: 25, physics: 90, english: 80 }, 

  ]; 

   

     const passingStudents = students.filter((student) => { 

     return student.maths > 33 && student.physics > 33 && student.english > 33; 

   }); 
  console.log(passingStudents);