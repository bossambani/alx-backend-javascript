interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Bossy",
    lastName: "Ambaka",
    age: 21,
    location: "Maseno"
}


const student2: Student = {
    firstName: "Tash",
    lastName: "Atozo",
    age: 19,
    location: "Maseno"
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    ageCell.textContent = student.age.toString();
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);