/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person

*/
let billinput=document.getElementById('billTotalInput')
let tipinput=document.getElementById('tipInput')
let npeople=document.getElementById('numberOfPeople')
let persontotal=document.getElementById('perPersonTotal')
// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let people=Number(npeople.innerText)



// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
  const input=Number(billinput.value)
  const tips=Number(tipinput.value)
const tipper=input*tips/100
  
  const total=input+tipper
  const totalper=total/people
  console.log(totalper)
  persontotal.innerText=`Rupees ${totalper.toFixed(2)}`
}

// ** Splits the bill between more people **

const increasePeople = () => {
 people+=1
  npeople.innerText=people
 calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if(people>1){
    people-=1
  }else{
    return people
  }
  npeople.innerText=people
  calculateBill()
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  
  // decrement the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}