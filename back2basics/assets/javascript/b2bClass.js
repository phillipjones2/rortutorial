var beginningScenarios = ["Waking up to walking dead",
                          "At the mall and walkin dead are shopping next you",
                          "Visiting you mom and a zombie knocks on the door"]

var weaponList = ['cat','stick','shoe','apple']

function randomNumber(range) {
   return Math.round(Math.random() * range );
}

var weapon = weaponList[randomNumber(weaponList.length-1)];

alert( beginningScenarios[randomNumber(beginningScenarios.length - 1)]);
alert('you grab a ' + weapon);

var survival = randomNumber(2);

if (survival === 0) {
  alert("the "+ weapon + " was useless. The zombie bites you and you die.")
} else {
  alert("your " + weapon + ' is deadly.  you kill the zombie')
}
