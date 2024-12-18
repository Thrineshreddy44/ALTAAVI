window.onload = function() {
    
    if (!sessionStorage.getItem('splashShown')) {
        setTimeout(function() {
            document.getElementById("splash-screen").style.display = "none"; 
            document.body.style.overflow = "auto"; 
            const nav = document.querySelector('nav');
            if (nav) nav.style.display = "flex";
        }, 3000);

      
        sessionStorage.setItem('splashShown', 'true');
    } else {
        
        document.getElementById("splash-screen").style.display = "none";
        document.body.style.overflow = "auto";
        const nav = document.querySelector('nav');
        if (nav) nav.style.display = "flex";
    }
};


// NEXT

// Get elements
const nextButton = document.getElementById('nextButton');
const info6Section = document.querySelector('.info6');
const checkboxesSection = document.querySelector('.checkboxes');
const backButton = document.getElementById('backButton');
const nextButton2 = document.getElementById('nextButton2');

// Event listener for "Next" button in .info6 section
nextButton.addEventListener('click', () => {
    // Hide the .info6 section
    info6Section.style.display = 'none';
    // Show the checkboxes section
    checkboxesSection.style.display = 'block';
});

// Event listener for "Back" button in checkboxes section
backButton.addEventListener('click', () => {
    // Show the .info6 section
    info6Section.style.display = 'flex';
    // Hide the checkboxes section
    checkboxesSection.style.display = 'none';

});

// Event listener for "Next" button in checkboxes section
nextButton2.addEventListener('click', () => {
    // Hide the checkboxes section completely
    checkboxesSection.style.display = 'none';
});

