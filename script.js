const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll(".price");
	let sum;
	for(let i = 0; i < prices.length; i++){
		sum += prices[i];
	}
    let table = document.querySelector("table");

    let row = document.createElement("tr");
	let cell = document.createElement("td");

    cell.textContent = "Total sum ="+ sum;

    row.appendChild(cell);
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

