const studentsArray1 =
[
    {id: 1, name: 'kaxa', gpa: 3.7},
    {id: 2, name: 'gio', gpa: 3.6},
    {id: 3, name: 'jemali', gpa: 1},
    {id: 4, name: 'usaxelo', gpa: 2}
];
const studentsArray2 =
[
    {id: 1, name: 'qeti', gpa: 3.9},
    {id: 2, name: 'taso', gpa: 2.5},
    {id: 3, name: 'ana', gpa: 2.5},
    {id: 4, name: 'nini', gpa: 3},
    {id: 5, name: 'kato', gpa: 1.7}
];

function getTopStudents(studentsArray1, studentsArray2){

    var allStudents = studentsArray1.concat(studentsArray2);
    allStudents.sort((a, b) => a.gpa - b.gpa);

    var result = [];


    for (var i = allStudents.length - 5; i < allStudents.length; i++){
        result.push(allStudents[i]);
    }

    var lastStudentIndex = allStudents.length - 5;

    for (var i=lastStudentIndex-1; allStudents[i].gpa == allStudents[lastStudentIndex].gpa; i--){
        result.push(allStudents[i]);
    }
    
    result.sort((a, b) => a.gpa - b.gpa);

    return result;
}

var answer = getTopStudents(studentsArray1, studentsArray2);
console.log (answer.map(c => c.name));
