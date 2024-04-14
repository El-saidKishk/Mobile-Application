const searchTerm = document.querySelector('#inp-food');
const outputList = document.getElementById('list-output');
const foodTitle = document.getElementById('title-food');
const changeButton = document.querySelector('#btn-nut');

//When the change button is pressed, the getDetails function is run
changeButton.addEventListener('click', getDetails);
//changeButton.addEventListener('click', makeDetailsList);

let foodName = "";

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients?limitLicense=false&minProtein=0&minVitaminC=0&minSelenium=0&maxFluoride=50&maxVitaminB5=50&maxVitaminB3=50&maxIodine=50&minCarbs=0&maxCalories=250&minAlcohol=0&maxCopper=50&maxCholine=50&maxVitaminB6=50&minIron=0&maxManganese=50&minSodium=0&minSugar=0&maxFat=20&minCholine=0&maxVitaminC=50&maxVitaminB2=50&minVitaminB12=0&maxFolicAcid=50&minZinc=0&offset=0&maxProtein=100&minCalories=0&minCaffeine=0&minVitaminD=0&maxVitaminE=50&minVitaminB2=0&minFiber=0&minFolate=0&minManganese=0&maxPotassium=50&maxSugar=50&maxCaffeine=50&maxCholesterol=50&maxSaturatedFat=50&minVitaminB3=0&maxFiber=50&maxPhosphorus=50&minPotassium=0&maxSelenium=50&maxCarbs=100&minCalcium=0&minCholesterol=0&minFluoride=0&maxVitaminD=50&maxVitaminB12=50&minIodine=0&maxZinc=50&minSaturatedFat=0&minVitaminB1=0&maxFolate=50&minFolicAcid=0&maxMagnesium=50&minVitaminK=0&maxSodium=50&maxAlcohol=50&maxCalcium=50&maxVitaminA=50&maxVitaminK=50&minVitaminB5=0&maxIron=50&minCopper=0&maxVitaminB1=50&number=10&minVitaminA=0&minPhosphorus=0&minVitaminB6=0&minFat=5&minVitaminE=0';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69e238c1c8mshb909bba32a52b96p1dfe0bjsn32a4127364c0',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

//First assign the api address to the food const then fetch the food/api, then apply the getJson function, then apply the updateDisplay function, then report any errors.
async function getDetails(){


  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    //console.log(result);
    
    //outputList.appendChild(result);


    for(var i=0; i<=result.length; i++){
      console.log(result[i]);
      if (result[i].title == searchTerm.value){
      const newItem = document.createElement('ion-item');
      let theTitle = result[i].title;
      let theId = result[i].id;
      let theCalories = result[i].calories;
      let theCalcium = result[i].calcium;
      let theCarbs = result[i].carbs;
      let theFat = result[i].fat;
      let theFibre = result[i].fiber;
      let theProtein = result[i].protein;
      let theVitaminA = result[i].vitaminA;
      let theVitaminB = result[i].vitaminB1;
      let theVitaminC = result[i].vitaminC;
      let theVitaminD = result[i].vitaminD;
      let theSaturatedFat = result[i].saturatedFat;
      let theCholesterol = result[i].cholesterol;
//--------------------------------------------------------//
newItem.textContent = "Query: "+theTitle+", ";
newItem.textContent += "Id: "+theId+", ";
newItem.textContent += "Calories: "+theCalories+", ";
newItem.textContent += "Calcium: "+theCalcium+", ";
newItem.textContent += "Carbs: "+theCarbs+", ";
newItem.textContent += "Fat: "+theFat+", ";
newItem.textContent += "Fibre: "+theFibre +", ";
newItem.textContent += "Protein: "+theProtein +", ";
newItem.textContent += "Vitamin A: "+theVitaminC +", ";
newItem.textContent += "Vitamin B: "+theVitaminB   +", ";
newItem.textContent += "Vitamin C: "+theVitaminC +", ";
newItem.textContent += "Vitamin D: "+theVitaminD +", ";
newItem.textContent += "Saturated Fat: "+theSaturatedFat +", ";
newItem.textContent += "Cholesterol: "+theCholesterol+",";
outputList.appendChild(newItem);
//--------------------------------------------------------//
    }
  }
    
  } catch (error) {
    console.error(error);
  }

}
//-------------------------------------------------------------------
//A constant called theResponse is assigned the JSONified aResponse parameter, it is then returned from the function.
function getJson(aResponse){
  //console.log(aResponse);
  const theResponse =  aResponse.json();
  console.log(theResponse);
  return theResponse;
}

//A variable called foodNameInput is assigned the value of the searchTerm variable
function updateDisplay(jsonObj){
}
function reportError(anError){
  console.log(anError);
}

function getFoodNameInput(){
  //console.log(searchTerm.value);
  return searchTerm.value;
  //return "Rick Sanchez";
}
