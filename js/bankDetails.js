document.getElementById("btn-diposite").addEventListener("click", function () {
  let dipositeInput = document.getElementById("diposite-field");
  let dipositeValue = dipositeInput.value;
  dipositeInput.value = "";
  if(isNaN(parseInt(dipositeValue))){
    alert('please enter the amount');
    return;
  }
  let dipositeField = document.getElementById("diposite");
  let dipositeFieldValue = dipositeField.innerText;
  let dipositeTotal = parseInt(dipositeFieldValue) + parseInt(dipositeValue);
  dipositeField.innerText = dipositeTotal;

  let balanceField = document.getElementById("balance");
  let balanceFieldvalue = parseInt(balanceField.innerText);
  let totalBalance = balanceFieldvalue + parseInt(dipositeValue);
  balanceField.innerText = totalBalance;
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawInput = document.getElementById("withdraw-field");
  let withdrawInputValue = parseFloat(withdrawInput.value);
  withdrawInput.value = "";
  if(isNaN(withdrawInputValue)){
    alert('please enter the amount');
    return;
  }
  let withdrawField = document.getElementById("withdraw");
  let withdrawFieldValue = parseFloat(withdrawField.innerText);
  let withdrawFieldTotal = withdrawFieldValue + withdrawInputValue;

  let balanceField = document.getElementById("balance");
  let balanceFieldvalue = parseInt(balanceField.innerText);
  let totalBalance = balanceFieldvalue - withdrawInputValue;
  if (withdrawFieldValue > totalBalance) {
    alert("you total Balance is lower than your Demand");
    return;
  }
 
  withdrawField.innerText = withdrawFieldTotal;
  balanceField.innerText = totalBalance;
});
