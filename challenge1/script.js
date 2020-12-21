function ageInDays (){
    var birthYear = prompt("Enter your Year of Birth");
    var ageDays = (2020 - birthYear) * 365;
    var h1 =  document.createElement('h1');
    var textResult = document.createTextNode('You are ' + ageDays + ' days Old')
    h1.setAttribute('id' , 'ageDays');
    h1.appendChild(textResult);
    document.getElementById('flex-box-result').appendChild(h1)
    console.log(ageDays);
}

function reset() {
    document.getElementById('ageDays').remove();
}