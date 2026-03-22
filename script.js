
let history = [];
function rollDice(){

    const dice = document.getElementById("diceImage");
    const result = document.getElementById("result");
    const historyList = document.getElementById("historyList");

    dice.classList.add("rolling");
    result.innerHTML = "Rolling...";

    let interval = setInterval(() => {
        let randomFace = Math.floor(Math.random() * 6) + 1;
        dice.src = `dice${randomFace}.png`;
    }, 100);

    setTimeout(() => {

        clearInterval(interval);
        dice.classList.remove("rolling");

        let finalRoll = Math.floor(Math.random() * 6) + 1;
        dice.src = `dice${finalRoll}.png`;

        result.innerHTML = `You rolled: ${finalRoll}`;

        /* ===== ADD TO HISTORY ===== */
        history.unshift(finalRoll); // add to top

        // keep only last 5 rolls
        if(history.length > 5){
            history.pop();
        }

        // update UI
        historyList.innerHTML = "";

        history.forEach((roll, index) => {
            let li = document.createElement("li");
            li.textContent = `Roll ${history.length - index}: ${roll}`;
            historyList.appendChild(li);
        });

    }, 1000);
}