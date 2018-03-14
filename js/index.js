var objective = document.getElementById("objective");
var experience = document.getElementById("experience");
var skills = document.getElementById("skills");
var contact = document.getElementById("contact");

function dispObj(){
    objective.style.display = "flex";
    experience.style.display = "none";
    skills.style.display = "none";
    
};

function dispExp(){
    objective.style.display = "none";
    experience.style.display = "block";
    skills.style.display = "none";
    
};
function dispSkills(){
    objective.style.display = "none";
    experience.style.display = "none";
    skills.style.display = "flex";
    
};
