document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var output = document.getElementById("resumeOutput");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value
        };
        generateResume(formData);
    });
    function generateResume(data) {
        output.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(data.name, "</p>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n            <h3>Experience</h3>\n            <p>").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n        ");
    }
});
