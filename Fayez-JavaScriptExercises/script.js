/*Exercise one */
var a = prompt("Enter a number");
if (a == parseInt(a, 10))
{
if(a>0)
{
var total=0;

for (var i = 1; i <= a; i++) {
    total=total+i;
}
alert(total);
}
else
{
alert('Not a positive number');
}

}
else
{
alert('Not a number'); }

/*exercise two*/
 var userResponse ='yes';
var result='';

userResponse = prompt ("Do you want to play?");
if(userResponse.toLowerCase() === "yes")
{
	do
	{
		var word = prompt ("Enter a word.");
        result=result+' '+word;
        userResponse = prompt ("Do you want to play again?");
	}
	while(userResponse.toLowerCase() === "yes");
    console.log(result);
}

/* exersise three*/

var userResponse = prompt ("Would you like to print your name?");
var name = "Sherif";
var exclamation = "";

while(userResponse.toLowerCase() === "yes"){
  console.log("Hello"+". " + "My name is " + name +exclamation);
  exclamation=exclamation+'!';
  userResponse = prompt("Would you like to print this again?");
}

/*Exercise four*/
var timeOfDay = prompt ("What time of day is it?");
var time;
var meal;
if ( timeOfDay === "morning") {
  meal = "Eat egg and toast!";
  time = "breakfast";
} else if ( timeOfDay === "noon") {
  meal = "a salad";
  time = "lunch";
} else  if ( timeOfDay === "evening") {
  meal= "chicken and rice";
  time = "dinner"
}

console.log("Since it is " + timeOfDay + "," + " you should be eating  " + time +"." +  " We suggest " + meal + ".");