const superHeroes = {
    Tony: 42,
    Peter: 18,
    Steve: 104,
    Bruce: 38,
    Thor: 1055
    };

const averageAge = (superHeroes) => {
    let totalAge = 0;
    let i = 0;
    for (key in superHeroes) {
        totalAge += superHeroes[key];
        i++;
    }
    let avgAge = totalAge/i;
    return avgAge;
};

document.getElementById("btn").addEventListener("click", () => {
    const avgAge = averageAge(superHeroes);
    output.innerHTML = "";
    for (key in superHeroes) {
        document.getElementById("output").innerHTML +=
        "<p>" + key + ": " + superHeroes[key] + "</p>"; 
    }
    document.getElementById("output").innerHTML +=
        "<p>" + "Average age of all superheros: " + avgAge.toFixed(2) + "</p>";
    console.log(avgAge);
});