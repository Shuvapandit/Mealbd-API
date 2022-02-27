
const searchFood =()=>{
    const searchField= document.getElementById('search-field')
    const searchText=searchField.value;
    console.log(searchText)
    searchField.value= '';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`;
    fetch(url)
    //console.log(url)
     .then(res => res.json())
    .then(data => dispalysearchResult(data.meals)) 
}
const dispalysearchResult=(meals)=>{
    const searchresult=document.getElementById('search-result')
   // searchresult.innerHTML='';
    searchresult.textContent='';

    meals.forEach(meal => {
        const div=document.createElement('div')
        div.classList.add('col');
        div.innerHTML=`
        <div onClick="mealdtails(${meal.idMeal})" class="card">
        <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        
        `
        searchresult.appendChild(div)
        console.log(meal)
        
    });
   
    
}
const  mealdtails =mealId=>
{
//console.log(mealId)
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
fetch(url)
    //console.log(url)
     .then(res => res.json())
    .then(data => dispalymealdtails(data.meals[0]))  


}
const dispalymealdtails=meal=>{
    const mealdetails=document.getElementById('meal-details')
    mealdetails.innerHTML='';

    
        const div=document.createElement('div')
        div.classList.add('card');
        div.innerHTML=`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
        
        `
        mealdetails.appendChild(div)
    
    //console.log(meal);
}