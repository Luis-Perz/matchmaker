function darkMode(){
    var element = document.body;
    element.className = "dark-mode";
};

function lightMode(){
    var element = document.body;
    element.className = "light-mode";
    
};




document.getElementById("dmBtn").addEventListener("click", () => {
    darkMode();
    document.a.style.color = orange;

});

document.getElementById("lmBtn").addEventListener("click", () => {
    lightMode();
});



