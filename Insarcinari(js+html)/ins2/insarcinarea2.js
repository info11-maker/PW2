  //insarcinarea 2 fara operator !=
let accessAllowed;
let age = prompt('How old are you?', '');   
if (age < 14 || age > 90) {
accessAllowed = "Nu se afla pe interval!";
} else {
accessAllowed = "Se afla pe interval!";
        }
alert(accessAllowed);

//inscarcinarea 2 cu oper. !=
/*let age = prompt('age?', 10);
if (!(age >= 14 && age <= 90))
{
    alert('Nu se afla pe interval!');    
}
else {
  alert ('Se afla pe interval!')
}*/