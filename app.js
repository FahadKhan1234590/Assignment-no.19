//Questions PDF 26-30

//Chapter 26 (Rounding Numbers)

//Q1
var a = Math.round(0.67)
console.log(a)

//Q2
var origNum = 0.75
var roundNum = Math.round(origNum)
console.log(roundNum)

//Q3
var origNum = 0.75
var roundNum = Math.floor(origNum)
console.log(roundNum)

//Q4
var b = 0.89
var c = Math.round(b)
console.log(c)

//Q5
var d = 0.5
var e = Math.round(d)
console.log(e)


// Chapter 27 (Random Numbers)

//Q1
var random_number = Math.random() * 50
console.log(random_number)  

//Q2
var f = Math.random() * 20
console.log(f)

//Q3
var dice_numbers  = 
[".",  ". .",  ". . .",  ". . \n. .",  ".  .\n . \n.  .",  ". . .\n. . ."]

var random_dice_numbers = dice_numbers[Math.floor(Math.random() * dice_numbers.length)]
console.log(random_dice_numbers)

//Q4
var toss = ["head","tail"]
var random_toss = toss[Math.floor(Math.random() * toss.length)]
console.log(random_toss)


//Chapter 28, 29 (Converting Strings)

//Q1
var string = "25"
var number = Number(string)
console.log(typeof number)

//Q2
var string_2 = "123"
function toNumber(param) {
    return Number(param)
}
console.log(typeof toNumber(string_2))

//Q3
var string_3 = "123.75"
var string_3_tofloat = parseFloat(string_3)
console.log(string_3_tofloat)

//Q4
var string_4 = "12345"
var check = /^\d+$/.test(string_4)

if (check == true){
    console.log("var string_4 can be converted into number")
}
else{
    console.log("var string_4 cannot be converted into number")
}

//Q5
var number_2 = 23
var number_2_tostring = number_2.toString()
console.log(typeof number_2_tostring)

//Q6
var number_3 = 42
function to_string(param){
    return param.toString()
}
console.log(typeof to_string(number_3))

//Q7
var string_4 = "3.14"
var string4_tonum = Number(string_4)
var string4_toint = parseInt(string4_tonum)
console.log(string4_toint)


//Chapter 30 (Controlling the length of decimals)

//Q1
var num = 4.7569
var round_num = Math.round(num)
var newNum = to_string(round_num)
console.log(newNum)

//Q2
var num_2 = Math.round(2.89), num_2 = to_string(num_2), num_2 = toNumber(num_2)
console.log(typeof num_2)

//Q3
if(num.length > 4 ){
   console.log("yes")
}else{
    console.log("no")
}

//Q4
var num_3 = 3.64934349
alert(to_string(num_3.toFixed(2)))  


document.write("<h2><a href='chapters2630.html' target='_blank'>Chapters26-30</a></h2>")