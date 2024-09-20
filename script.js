function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let previewContainer = document.querySelector('.experience-preview')
let previewBox = previewContainer.querySelectorAll('.preview')

document.querySelectorAll('.experience-article-container .exp, .experience-article-container .text-container, .experience-article-container .text-containers').forEach(exp => {
    exp.onclick = () => {
        const previewContainer = document.querySelector('.experience-preview');
        const previewBoxes = previewContainer.querySelectorAll('.preview');
        const name = exp.getAttribute('data-name');
        // Hide all preview boxes
        previewBoxes.forEach(box => {
            box.classList.remove('active');
        });
        
        // Show the relevant preview box
        const activePreview = previewContainer.querySelector(`[data-target="${name}"]`);
        if (activePreview) {
            previewContainer.style.display = 'flex';
            activePreview.classList.add('active');
        }
    };
});


document.querySelectorAll('.experience-preview .fa-times').forEach(close => {
    close.onclick = () => {
        const previewContainer = document.querySelector('.experience-preview');
        const previewBox = previewContainer.querySelector('.preview');
        previewBox.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

function toggleDetails(button) {
    var projectCard = button.closest(".project-card");
    projectCard.classList.toggle("flipped");
}
function closeDetails(button) {
    var projectCard = button.closest(".project-card");
    projectCard.classList.remove("flipped");
}


// // Select all elements with the class 'exp'
// document.querySelectorAll('.experience-article-container .exp, .experience-article-container .text-container, .experience-article-container .text-containers').forEach(exp => {
//     // Add event listener for mouseover event
//     exp.addEventListener('mouseover', () => {
//         const previewContainer = document.querySelector('.experience-preview');
//         const previewBoxes = previewContainer.querySelectorAll('.preview');
//         const name = exp.getAttribute('data-name');
        
//         // Hide all preview boxes
//         previewBoxes.forEach(box => {
//             box.classList.remove('active');
//         });
        
//         // Show the relevant preview box
//         const activePreview = previewContainer.querySelector(`[data-target="${name}"]`);
//         if (activePreview) {
//             previewContainer.style.display = 'flex';
//             activePreview.classList.add('active');
//         }
//     });


//     // Add event listener for mouseout event
//     exp.addEventListener('mouseout', () => {
//         const previewContainer = document.querySelector('.experience-preview');
//         const previewBox = previewContainer.querySelector('.preview');
//         previewBox.classList.remove('active');
//         previewContainer.style.display = 'none';
//     });
// });
