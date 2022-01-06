const heightFeet = document.querySelector('#heightFeet');
const heightInches = document.querySelector('#heightInches');
const weight = document.querySelector('#weight');
const btn = document.querySelector('#btn');
const result = document.querySelector('.result');
const output = document.querySelector('#res');
const box2 = document.querySelector('.box2');


function generateBMI(hFeet, hInches, weightValue) {
    let totalFeet = hFeet + hInches / 12;
    let meter = totalFeet * 0.3048;
    let res = weightValue / (meter * meter);
    res = res.toFixed(1);
    return res;
}

btn.onclick = function(event) {
    event.preventDefault();
    let hFeet = Number(heightFeet.value);
    let hInches = Number(heightInches.value);
    let weightValue = Number(weight.value);

    let BMI = generateBMI(hFeet, hInches, weightValue);
    console.log(BMI);
    output.textContent = BMI;
    if (BMI <= 18.5) {
        box2.style.backgroundColor = 'yellow';
        output.style.color = 'black';
    } else if (BMI >= 18.5 && BMI <= 25) {
        box2.style.backgroundColor = 'green';
    } else if (BMI > 25 && BMI <= 30) {
        box2.style.backgroundColor = 'orange';
    } else {
        box2.style.backgroundColor = 'red';
    }
    result.style.display = 'flex';
}