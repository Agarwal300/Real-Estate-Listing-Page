// Dark Mode
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Search + Price Filter
const input = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");

function filter(){
  let val = input.value.toLowerCase();
  let priceVal = priceFilter.value;
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name");
    let price = parseInt(card.getAttribute("data-price"));

    let matchSearch = name.includes(val);

    let matchPrice =
      priceVal === "all" ||
      (priceVal === "low" && price < 50) ||
      (priceVal === "mid" && price >= 50 && price <= 100) ||
      (priceVal === "high" && price > 100);

    card.style.display = (matchSearch && matchPrice) ? "block" : "none";
  });
}

input.addEventListener("keyup", filter);
priceFilter.addEventListener("change", filter);