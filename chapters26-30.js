//Chapters26-30

//MATH METHODS

//Q1
var user_input = +prompt("Enter any positive integer")

document.write(
`<h2>
number: ${user_input}<br>
round off value: ${Math.round(user_input)}<br>
floor value: ${Math.floor(user_input)}<br>
ceil value: ${Math.ceil(user_input)} 
 </h2>
`
)

//Q2
var user_input_2 = +prompt("Enter any negative floating (decimal) point number")
document.write(
    `<h2>
    number: ${user_input_2}<br>
    round off value: ${Math.round(user_input_2)}<br>
    floor value: ${Math.floor(user_input_2)}<br>
    ceil value: ${Math.ceil(user_input_2)} 
     </h2>
    `
    )

//Q3
var user_input_3 = +prompt("Enter any number")
document.write(
    `<h2>
       The absolute value of ${user_input_3} is ${Math.abs(user_input_3)}
     </h2>
    `
    )

//Q4
var dice_numbers  = 
[1,2,3,4,5,6]

var random_dice_numbers = dice_numbers[Math.floor(Math.random() * dice_numbers.length)]
document.write(`<h2>Random dice value: ${random_dice_numbers}</h2>`)

//Q5
var toss = ["Heads","Tails"]
var random_toss = toss[Math.floor(Math.random() * toss.length)]
document.write(`<h2>Random coin value: ${random_toss}</h2>`)

//Q6
document.write(`
<h2>
random number between 1 and 100 : ${Math.floor(Math.random() * 100)}
</h2>
`)

//Q7

//Q8
var guess = +prompt("Guess the number between 1 and 10")
var random_number = Math.floor(Math.random() * 10)
if(random_number == guess){
    alert("You guessed the number right!")
}else{
    alert("You guessed the number wrong!")

}