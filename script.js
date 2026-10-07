// 1. Array of student objects
const students = [
    { name: "Rahul Sharma", marks: "85%", class: "10th", address: "789, PQR Nagar, Bangalore" },
    { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
    { name: "Pooja Mishra", marks: "88%", class: "9th", address: "101, LMN Road, Kolkata" },
    { name: "Rajesh Singhania", marks: "92%", class: "11th", address: "222, DEF Avenue, Chennai" },
    { name: "Ananya Roy", marks: "95%", class: "12th", address: "444, STU Colony, Pune" },
    { name: "Vikram Verma", marks: "68%", class: "9th", address: "555, VWX Street, Jaipur" },
    { name: "Rahul Sharma", marks: "85%", class: "10th", address: "789, PQR Nagar, Bangalore" },
    { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
    { name: "Pooja Mishra", marks: "88%", class: "9th", address: "101, LMN Road, Kolkata" },
    { name: "Rajesh Singhania", marks: "92%", class: "11th", address: "222, DEF Avenue, Chennai" },
    { name: "Ananya Roy", marks: "95%", class: "12th", address: "444, STU Colony, Pune" },
    { name: "Vikram Verma", marks: "68%", class: "9th", address: "555, VWX Street, Jaipur" },
    { name: "Rahul Sharma", marks: "85%", class: "10th", address: "789, PQR Nagar, Bangalore" },
    { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
    { name: "Pooja Mishra", marks: "88%", class: "9th", address: "101, LMN Road, Kolkata" },
    { name: "Rajesh Singhania", marks: "92%", class: "11th", address: "222, DEF Avenue, Chennai" },
    { name: "Ananya Roy", marks: "95%", class: "12th", address: "444, STU Colony, Pune" },
    { name: "Vikram Verma", marks: "68%", class: "9th", address: "555, VWX Street, Jaipur" }
];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

 
 function renderStudents(searchTerm = "") {
     
     const filteredStudents = students.filter(student => 
         student.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
     )

     if (filteredStudents.length === 0) {
         cardsContainer.innerHTML = `<p class="no-results">No students found matching "${searchTerm}"</p>`;
         return;
     }
     
     const studentCardsHTML = filteredStudents.map(student => `
         <div class="card">
             <p><strong>Name:</strong> ${student.name}</p>
             <p><strong>Marks:</strong> ${student.marks}</p>
             <p><strong>Class:</strong> ${student.class}</p>
             <p><strong>Address:</strong> ${student.address}</p>
         </div>
     `).join('')
     
     cardsContainer.innerHTML = studentCardsHTML;
     }


 searchInput.addEventListener("input", (e) => {
     renderStudents(e.target.value);
    })
 
 renderStudents()