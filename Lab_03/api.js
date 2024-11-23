async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products.slice(0, 30);
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);
    return [];
  }
}
function displayProducts(products) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");

    // Zdjęcie
    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.thumbnail;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // Tytuł
    const titleCell = document.createElement("td");
    titleCell.textContent = product.title;
    row.appendChild(titleCell);

    // Opis
    const descCell = document.createElement("td");
    descCell.textContent = product.description;
    row.appendChild(descCell);

    // Cena
    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;
    row.appendChild(priceCell);

    // Ocena
    const rateCell = document.createElement("td");
    rateCell.textContent = product.rating;
    row.appendChild(rateCell);

    // Ile w magazynie
    const magCell = document.createElement("td");
    magCell.textContent = product.stock;
    row.appendChild(magCell);

    tableBody.appendChild(row);
  });
}

function sortProd(prod, order) {
  if (order == "asc")
    return [...prod].sort((a, b) => a.title.localeCompare(b.title));
  else if (order == "desc")
    return [...prod].sort((a, b) => b.title.localeCompare(a.title));
  else return prod;
}
function filterProd(prod, filter) {
  return prod.filter(
    (product) =>
      product.title.toLowerCase().includes(filter.toLowerCase()) ||
      product.description.toLowerCase().includes(filter.toLowerCase())
  );
}

async function setup() {
  const allProducts = await fetchProducts();
  let filteredProducts = [...allProducts]; //kopia aby sortować

  const filter = document.getElementById("filter");
  const sort = document.getElementById("sort");

  filter.addEventListener("input", () => {
    const filterText = filter.value;
    filteredProducts = filterProd(allProducts, filterText);
    filteredProducts = sortProd(filteredProducts, sort.value);
    displayProducts(filteredProducts);
  });

  sort.addEventListener("change", () => {
    const sortedProd = sortProd(filteredProducts, sort.value);
    displayProducts(sortedProd);
  });

  displayProducts(allProducts);
}

setup();
