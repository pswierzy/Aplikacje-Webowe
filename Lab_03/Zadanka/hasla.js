function getRandomInt(min, max) {
  // Losowa liczba z zakresu <min, max>
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomLower() {
  // Losowa mała litera - 26 znaków
  return getRandomInt(97, 122);
}

function randomUpper() {
  // Losowa wielka litera - 26 znaków
  return getRandomInt(65, 90);
}

function randomSpec() {
  // Losowy znak specjalny - 27 znaków
  const special = [
    33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64,
    91, 92, 93, 94, 95, 123, 124, 125,
  ];
  const rand = getRandomInt(0, special.length - 1);
  return special[rand];
}

function onlyLower(tab, length) {
  for (let i = 0; i < length; i++) {
    tab.push(randomLower());
  }
  return tab;
}

function lowerUpper(tab, length) {
  for (let i = 0; i < length; i++) {
    if (getRandomInt(0, 1) === 0) tab.push(randomLower());
    else tab.push(randomUpper());
  }
  return tab;
}

function lowerSpec(tab, length) {
  for (let i = 0; i < length; i++) {
    if (getRandomInt(1, 26 + 27) < 27) tab.push(randomLower());
    else tab.push(randomSpec());
  }
  return tab;
}

function allChars(tab, length) {
  for (let i = 0; i < length; i++) {
    const rand = getRandomInt(1, 26 + 26 + 27);
    if (rand < 27) tab.push(randomLower());
    else if (rand < 27 + 26) tab.push(randomUpper());
    else tab.push(randomSpec());
  }
  return tab;
}

function generate() {
  const min = parseInt(document.getElementById("min_len").value);
  const max = parseInt(document.getElementById("max_len").value);
  const big = document.getElementById("big").checked;
  const spec = document.getElementById("spec").checked;

  if (min <= 0) {
    alert("Minimalna długość musi być większa od 0");
    return;
  }
  if (min > max) {
    alert("Minimalna długość nie może być większa od maksymalnej");
    return;
  }

  const length = getRandomInt(min, max);
  let tab = [];

  if (!big && !spec) tab = onlyLower(tab, length);
  else if (big && !spec) tab = lowerUpper(tab, length);
  else if (!big && spec) tab = lowerSpec(tab, length);
  else tab = allChars(tab, length);

  const password = tab.map((num) => String.fromCharCode(num)).join("");
  alert(`Twoje hasło to: ${password}`);
}
