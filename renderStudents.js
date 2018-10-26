
function renderStudents(students) {
    var finalHTML = '<div class="container">Roll Call!</div>';

    // var studentAttendance = []
    
    // for (i = 0; i < `${students.length}`; i++) {
    //     if (`${students.isPresent}` = true) {
    //         studentAttendance.push('Present');
    //     } else {
    //         studentAttendance.push('Absent');
    //     }
    // }

    // return studentAttendance
    
    var studentsHTML = students.map(function (student) {
        var student = `
        <div class='student'>
        <h3>${student.name}</h3>
        <b>${student.isPresent}</b>
        </div>
        `
        return student
    }).join('')
    
    finalHTML += studentsHTML
    
    return finalHTML
}




function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}