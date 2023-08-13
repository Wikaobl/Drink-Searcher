const search = document.querySelector(".search");
const liItems = document.querySelectorAll("li");

const searchDrink = (e) => {
  const text = e.target.value.toLowerCase();

  liItems.forEach((li) => {
    if (li.textContent.toLowerCase().indexOf(text) !== -1) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
};

search.addEventListener("keyup", searchDrink);
