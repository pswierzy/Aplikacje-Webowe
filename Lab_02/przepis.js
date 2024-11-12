function updateHungerLabel(value) {
  document.getElementById("hunger-label").innerText = `Poziom głodu: ${value}`;
}

function generateRecipe() {
  const hungerLevel = document.getElementById("hunger-slider").value;
  const recipeSection = document.getElementById("recipe-section");
  const formSection = document.getElementById("main-form");
  const recipeList = document.getElementById("recipe-list");
  const numPeople = document.getElementById("num-people").value;

  if (numPeople < 1) {
    document.getElementById("main-form").style.display = "none";
    document.getElementById("no-cat").style.display = "initial";
  } else {
    formSection.style.display = "none";
    recipeSection.style.display = "block";

    const baseAmount = hungerLevel * 0.1 * numPeople;

    const twojczywasz = numPeople > 1 ? "Wasz" : "Twój";
    recipeSection.querySelector(
      "h2"
    ).innerText = `Przepis na ${twojczywasz} głód`;

    recipeList.innerHTML = `
        <li>${(baseAmount * 250).toFixed(0)}g makaronu (${(
      baseAmount * 2
    ).toFixed(2)} szklanki)</li>
        <li>${(baseAmount * 200).toFixed(
          0
        )}g sera cheddar (może być zmieszany z innymi rodzajami sera)</li>
        <li>${(baseAmount * 250).toFixed(0)}ml mleka</li>
        <li>${(baseAmount * 2).toFixed(2)} łyżki masła</li>
        <li>${(baseAmount * 2).toFixed(2)} łyżki mąki</li>
        <li>Sól (do ugotowania makaronu) i dużo pieprzu</li>
    `;
  }
}

function goBack() {
  document.getElementById("main-form").style.display = "block";
  document.getElementById("no-cat").style.display = "none";
  document.getElementById("recipe-section").style.display = "none";
}
