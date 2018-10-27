
function renderStudents(students) {
    var finalHTML = '<div class="container">Roll Call!</div>';
    
    var studentsHTML = students.map(function (student) {
        var student = `
        <div class='student' style='background-color: ${backgroundColor(student.isPresent)}'>
        <h3>${student.name}</h3>
        <b>${attendance(student.isPresent)}</b>
        </div>
        `
        return student
    }).join('')
    
    
    return `<div class="container">
                <h1>${finalHTML}</h1>
                <div>${studentsHTML}</div>
            </div>
            `
}

function attendance (input) {
    if (input === true) {
        return 'Present';
    } else {
        return 'Absent';
    }
}

function backgroundColor (input) {
    if (input === true) {
        return 'green';
    } else {
        return 'red';
    }
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