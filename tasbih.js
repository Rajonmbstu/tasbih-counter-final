let count = 0;
let cycle = 0;
let goal = 0;

// Load saved progress
document.addEventListener("DOMContentLoaded", () => {
    count = Number(localStorage.getItem("count")) || 0;
    cycle = Number(localStorage.getItem("cycle")) || 0;
    goal  = Number(localStorage.getItem("goal")) || 0;
    updateDisplay();
});

function updateDisplay(){
    document.getElementById("counter").innerText = count;
    document.getElementById("cycle").innerText = cycle;
    document.getElementById("goal").innerText = goal;

    localStorage.setItem("count", count);
    localStorage.setItem("cycle", cycle);
    localStorage.setItem("goal", goal);
}

function increment(){
    const maxCount = Number(document.getElementById("maxCount").value);
    const goalLimit = Number(document.getElementById("goalLimit").value);

    count++;

    if(count >= maxCount){
        count = 0;
        cycle++;

        if(cycle % goalLimit === 0){
            goal++;
            alert("🎉 One Spiritual Goal Completed!");
        }
    }
    updateDisplay();
}

function decrement(){
    if(count > 0){
        count--;
        updateDisplay();
    }
}

function resetAll(){
    if(confirm("Reset all progress?")){
        count = 0;
        cycle = 0;
        goal = 0;
        localStorage.clear();
        updateDisplay();
    }
}
