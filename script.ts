document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const output = document.getElementById("resumeOutput") as HTMLDivElement;

    interface ResumeData {
        name: string;
        email: string;
        phone: string;
        experience: string;
        skills: string;
    }

    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const formData: ResumeData = {
            name: (document.getElementById("name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            phone: (document.getElementById("phone") as HTMLInputElement).value,
            experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
            skills: (document.getElementById("skills") as HTMLTextAreaElement).value
        };

        generateResume(formData);
    });

    function generateResume(data: ResumeData): void {
        output.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Skills</h3>
            <p>${data.skills}</p>
        `;
    }
});
