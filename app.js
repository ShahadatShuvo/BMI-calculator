const heightFeet = document.querySelector('#heightFeet');
const heightInches = document.querySelector('#heightInches');
const weight = document.querySelector('#weight');
const btn = document.querySelector('#btn');
const result = document.querySelector('.result');
const output = document.querySelector('#res');
const box2 = document.querySelector('.box2');
const resType = document.querySelector('#resType');


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
    console.log(hFeet);
    console.log(hInches);
    console.log(weightValue);
    if (hFeet == 0 || hInches == 0 || weightValue == 0) {
        alert(`Please enter required values. Don't leave input boxes empty.`);
    } else {
        let BMI = generateBMI(hFeet, hInches, weightValue);
        output.textContent = BMI;
        if (BMI <= 18.5) {
            box2.style.backgroundColor = 'yellow';
            resType.textContent = '(Underweight)';
            output.style.color = 'black';
        } else if (BMI >= 18.5 && BMI <= 25) {
            box2.style.backgroundColor = 'green';
            resType.textContent = '(Normal Weight)';
        } else if (BMI > 25 && BMI <= 30) {
            box2.style.backgroundColor = 'orange';
            resType.textContent = '(Overweight)';
        } else {
            box2.style.backgroundColor = 'red';
            resType.textContent = '(Obese)';
        }
        result.style.display = 'flex';
    }
}