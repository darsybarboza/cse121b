/* Project */

// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

/* FETCH */
// Declare a global empty array variable to store a list of hats
var saleList = new Array();
// Declare a global empty array variable to store a filtered list of hats
var filteredSales = new Array();

// Output function
function output(sales) {
  sales.forEach((sale) => {
    let article = document.createElement("article");

    let img = document.createElement("img");
    img.setAttribute("src", sale.imageUrl);
    img.setAttribute("alt", sale.saleName);

    let saleName = document.createElement("h3");
    saleName.textContent = sale.saleName;

    let salePrice = document.createElement("h4");
    salePrice.textContent = "$" + sale.salePrice;

    article.appendChild(img);
    article.appendChild(saleName);
    article.appendChild(salePrice);

    document.querySelector("#sales").appendChild(article);
  });
}

// Function to get data
async function getSales(url) {
  const response = await fetch("data/sales.json");
  if (response.ok) {
    saleList = await response.json();
    output(saleList);
  }
}

getSales();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of hats
function reset() {
  document.querySelector("#sales").innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global hat list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of hats
function sortBy() {
  reset();
  filterByPrice(false);

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "saleNameAscending":
      output(
        filteredSales.sort((sale1, sale2) => {
          let saleName1 = sale1.saleName.toLowerCase();
          let saleName2 = sale2.saleName.toLowerCase();
          if (saleName1 < saleName2) return -1;
          else if (saleName1 > saleName2) return 1;
          else return 0;
        })
      );
      break;
    case "saleNameDescending":
      output(
        filteredSales.sort((sale1, sale2) => {
          let saleName1 = sale1.saleName.toLowerCase();
          let saleName2 = sale2.saleName.toLowerCase();
          if (saleName1 > saleName2) return -1;
          else if (saleName1 < saleName2) return 1;
          else return 0;
        })
      );
      break;
    case "salePriceLowToHigh":
      output(
        filteredSales.sort((sale1, sale2) => {
          let salePrice1 = parseInt(sale1.salePrice);
          let salePrice2 = parseInt(sale2.salePrice);
          if (salePrice1 < salePrice2) return -1;
          else if (salePrice1 > salePrice2) return 1;
          else return 0;
        })
      );
      break;
    case "salePriceHighToLow":
      output(
        filteredSales.sort((sale1, sale2) => {
          let salePrice1 = parseInt(sale1.salePrice);
          let salePrice2 = parseInt(sale2.salePrice);
          if (salePrice1 > salePrice2) return -1;
          else if (salePrice1 < salePrice2) return 1;
          else return 0;
        })
      );
      break;
    default:
      // using ternary operators
      output(
        filteredSales.sort((sale1, sale2) =>
          sale1.saleName.toLowerCase() > sale2.saleName.toLowerCase()
            ? 1
            : sale2.saleName.toLowerCase() >
              sale1.saleName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
}

function filterByPrice(print = true) {
    reset();

    filteredSales = [];

    document.querySelectorAll(".priceRange").forEach((checkbox) => {
        if (checkbox.checked) {
            const min = parseInt(checkbox.dataset.min);
            const max = parseInt(checkbox.dataset.max);

            const sales = saleList.filter(sale => {
                return parseInt(sale.salePrice) >= min && parseInt(sale.salePrice) <= max;
            });

            filteredSales = filteredSales.concat(sales);
        }

    });

    if (filteredSales.length === 0)
      filteredSales = saleList;

    if (print)
      output(filteredSales)
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);
document.querySelector(".filtering").addEventListener("change", filterByPrice);

