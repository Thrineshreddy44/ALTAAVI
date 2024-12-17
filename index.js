/* ------------------------------------------Splash Screen pg--------------------------------------- */
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

