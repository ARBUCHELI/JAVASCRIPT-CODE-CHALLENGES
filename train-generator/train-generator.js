function* getStop() {
    yield "Poughkeepsie";
    yield "Newburgh";
    yield "Peekskill";
    yield "Yonkers";
    yield "Bronx";
    yield "Grand Central";
}

const nycTrainLine = getStop();

const nextStopButton = document.querySelector("#next-stop");
nextStopButton.addEventListener("click", () => {
    let currStop = nycTrainLine.next();
    if (currStop.done) {
        console.log("We made it!");
        nextStopButton.setAttribute("disabled", true);
    } else {
        console.log(currStop.value);
    }
})