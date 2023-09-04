// Add an event listener for the Enter key press on the input field
const searchField = document.getElementById("search-field");

searchField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // Call the searchFood function when Enter key is pressed
    searchFood();
  }
});

const searchFood = () => {
  const searchText = searchField.value;
  console.log(searchText);
  searchField.value = "";
  document.getElementById("error-message").style.display = "none";
  if (searchText.trim() === "") {
    // Handle empty search text here, if needed
    return;
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispalysearchResult(data.meals))
      .catch((error) => displayError(error));
  }
};

document.getElementById("error-message").style.display = "none";

const displayError = (error) => {
  document.getElementById("error-message").style.display = "block";
};
const dispalysearchResult = (meals) => {
  const searchresult = document.getElementById("search-result");
  // searchresult.innerHTML='';
  searchresult.textContent = "";

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div onClick="mealdtails(${meal.idMeal})" class="card">
        <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
        
        `;
    searchresult.appendChild(div);
    console.log(meal);
  });
};
const mealdtails = async (mealId) => {
  //console.log(mealId)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispalymealdtails(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
  //console.log(url)

  /*   
   fetch(url)
   .then(res => res.json())
    .then(data => dispalymealdtails(data.meals[0])) */
};
const dispalymealdtails = (meal) => {
  const mealdetails = document.getElementById("meal-details");
  mealdetails.innerHTML = "";

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
        
        `;
  mealdetails.appendChild(div);

  //console.log(meal);
};
const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
const info = { name: "", phoneNumber: null };
console.log(JSON.stringify(info));
