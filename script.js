
class Budget{
    expense = [];
    income = [];


    addExpense(expense){
this.expense.push(expense)
console.log("expense added")
    }



    addIncome(income){
this.income.push(income)
console.log("income added")

    }



    calculateBudget(){
var budget=this.calculateIncome()-this.calculateExpenses()
return budget
    }



    calculateExpenses(){
        var total=0
        this.expense.forEach((expense)=>{
            total+=expense.amount
        })
        return total
    }

    calculateIncome(){
        var total=0
        this.income.forEach((income)=> {
            total+=income.amount
        })
        
        return total
    }
}


const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error') // selecting where error message will be displayed
    
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    }


const validateInput = ()=>{
    const descriptionValue = description.value.trim(); // trim method is used to remove white space
    const amountValue = amount.value.trim(); //when validating the form we must get rid of whitespace to prevent the possibility of the form accepting white space as a valid entry
    const dateValue = date.value.trim();
    var flag=0
    
    
    if(descriptionValue === '') {
        setError(description, 'Description is required'); // if fields are empty error message will appear
    flag=1
    }
    
    if(amountValue === ''|| isNaN(Number(amount.value))) {
        setError(amount, 'amount is required and must be a number');
        flag=1
    }
    
    if(dateValue === '') {
        setError(date, 'enter a date');
        flag=1


    }
    
 return flag
    
    };


const bud = new Budget(); // creating new budget

const addItem = document.getElementById("add");

const description = document.getElementById("description");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const type = document.getElementsByClassName('dropbth')[0]; // button for selecting income or expense 
const tbody = document.getElementById('table-content');
const expenses = document.getElementById('totalExpense');
const income = document.getElementById('totalIncome');
const budget = document.getElementById('budget');


addItem.onclick = () =>{
if(validateInput()==1){
    return
}
    console.log(validateInput())
tbody.insertAdjacentHTML('beforeend', `<tr>
        <td>
            <div class="type">${type.value}</div>
        </td>
        <td>
            <div class="description">${description.value}</div>
        </td>
        <td>
            <div class="amount">${amount.value}</div>
        </td>
        <td>
            <div class="date">${date.value}</div>
        </td>
    </tr>`);

if(type.value === "expense" ){
bud.addExpense({description: description.value, amount: Number(amount.value), date:date.value})
console.log(bud.calculateExpenses())
} else {
bud.addIncome({description: description.value, amount:Number(amount.value), date:date.value})
console.log(bud.calculateIncome())
}
  expenses.value = bud.calculateExpenses();
  income.value = bud.calculateIncome();
  budget.value = bud.calculateBudget();
};