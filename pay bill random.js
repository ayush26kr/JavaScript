 /*Write a function
  which will select a random name
   from a list of names.
   The selected will have to pay
    for Everybody's food bill.*/
function whosPaying(names){
    var numberOfPeople=names.length;
    var randomPos=Math.floor(Math.random()*numberOfPeople);
    var randomPerson=names[randomPos];

    return randomPerson+" is going to buy lunch today!";
}
names=["Ayush","John","Harry","Joey"];
whosPaying(names);
