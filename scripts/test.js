function onEnterShow(inp, ...showArgs) {
    for (const showEl of showArgs) {
        showEl.hidden = true;
    }
    inp.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            for (const showEl of showArgs) {
                showEl.hidden = false;
            }
        }
    });
}
function loudPerformance(div) {
    const loudThingSec = div.appendChild(document.createElement("div"));
    const loudThingInst = div.appendChild(document.createTextNode("A loud thing I hear a lot is "));
    const loudThing = div.appendChild(document.createElement("input"));
    const performanceButton = div.appendChild(document.createElement("button"));
    performanceButton.textContent = "Performance";
    onEnterShow(loudThing, performanceButton);
    performanceButton.onclick = function () {
        const instructions = "Think about " + loudThing.value + "<br>" +
            "Move your mouth to the sounds of " + loudThing.value + " in your mind <br>" +
            "Record your mouth noises <br>" +
            "Listen to mouth noises at high volume <br>" +
            "Go and record the " + loudThing.value + "<br>" +
            "Listen the recording of " + loudThing.value + " at low volume <br>" +
            "Listen to both recordings at once";
        const instructionsDiv = div.appendChild(document.createElement("div"));
        instructionsDiv.innerHTML = instructions;
        const soundFileInput = div.appendChild(document.createElement("input"));
        soundFileInput.type = "file";
        const sound = div.appendChild(document.createElement("audio"));
        sound.controls = true;
        soundFileInput.onchange = function (e) {
            sound.src = URL.createObjectURL(e.target.files[0]);
        };
        const recordingFileInput = div.appendChild(document.createElement("input"));
        recordingFileInput.type = "file";
        const recording = div.appendChild(document.createElement("audio"));
        recording.controls = true;
        recordingFileInput.onchange = function (e) {
            recording.src = URL.createObjectURL(e.target.files[0]);
        };
    };
}
function quietPerformance(div) {
    const quietPlaceInst = div.appendChild(document.createTextNode("A quiet-feeling place I go to is "));
    const quietPlace = div.appendChild(document.createElement("input"));
    const favFoodSec = div.appendChild(document.createElement("div"));
    const favFoodInst = favFoodSec.appendChild(document.createTextNode("My favorite food is "));
    const favFood = favFoodSec.appendChild(document.createElement("input"));
    const commonThoughtSec = div.appendChild(document.createElement("div"));
    const commonThoughtInst = commonThoughtSec.appendChild(document.createTextNode("Something I think about a lot lately is "));
    const commonThought = commonThoughtSec.appendChild(document.createElement("input"));
    const thoughtFeelingSec = div.appendChild(document.createElement("div"));
    const thoughtFeelingInst = thoughtFeelingSec.appendChild(document.createTextNode("When I think that thought I feel "));
    const thoughtFeeling = thoughtFeelingSec.appendChild(document.createElement("input"));
    const performanceButton = div.appendChild(document.createElement("button"));
    performanceButton.textContent = "Performance";
    onEnterShow(quietPlace, favFoodSec);
    onEnterShow(favFood, commonThoughtSec);
    onEnterShow(commonThought, thoughtFeelingSec);
    onEnterShow(thoughtFeeling, performanceButton);
    performanceButton.onclick = function () {
        const instructions = "Go to " + quietPlace.value + "<br>" +
            "Eat " + favFood.value + "<br>" +
            "Think about " + commonThought.value + " until you don't feel " + thoughtFeeling.value;
        const instructionsDiv = div.appendChild(document.createElement("div"));
        instructionsDiv.innerHTML = instructions;
    };
}
function doPerformance(div) {
    const taskSec = div.appendChild(document.createElement("div"));
    const taskInst = taskSec.appendChild(document.createTextNode("Something I should do is "));
    const task = taskSec.appendChild(document.createElement("input"));
    const performanceButton = div.appendChild(document.createElement("button"));
    performanceButton.textContent = "Performance";
    onEnterShow(task, performanceButton);
    performanceButton.onclick = function () {
        const instructions = "Go and " + task.value;
        const instructionsDiv = div.appendChild(document.createElement("div"));
        instructionsDiv.innerHTML = instructions;
    };
}
export function showText(div) {
    const quietButton = div.appendChild(document.createElement("button"));
    quietButton.innerHTML = "Quiet Piece";
    quietButton.onclick = function () {
        div.innerHTML = "";
        quietPerformance(div);
    };
    div.appendChild(document.createElement("br"));
    const loudButton = div.appendChild(document.createElement("button"));
    loudButton.innerHTML = "Loud Piece";
    loudButton.onclick = function () {
        div.innerHTML = "";
        loudPerformance(div);
    };
    div.appendChild(document.createElement("br"));
    const doButton = div.appendChild(document.createElement("button"));
    doButton.innerHTML = "Do Piece";
    doButton.onclick = function () {
        div.innerHTML = "";
        doPerformance(div);
    };
    div.appendChild(document.createElement("br"));
    // const doButton = div.appendChild(document.createElement("button"));
    // doButton.innerHTML = "Do Piece";
    // doButton.onclick = function() {
    //   div.innerHTML = "";
    //   doPerformance(div);
    // }
    // div.appendChild(document.createElement("br"));
}
