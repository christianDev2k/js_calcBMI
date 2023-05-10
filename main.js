const bmiHeight = document.querySelector('#bmi__height');
const bmiWeight = document.querySelector('#bmi__weight');
const btnResult = document.querySelector('#btn__result');
const outputArea = document.querySelector('#output__area');

function calcBMI(height, weight) {
    if (isNaN(height) || isNaN(weight) || height === '' || weight === '') {
        return false;
    }
    else {
        return weight / (Math.pow((height / 100), 2));
    }
}

btnResult.addEventListener('click', function (e) {
    e.preventDefault();
    let result = calcBMI(bmiHeight.value, bmiWeight.value);
    if (result === false) {
        outputArea.innerHTML = `
            <h3 class="text-white">Bạn nhập sai rồi! Nhập lại nhaaaa!</h3>
        `
    }
    else {
        if (result < 18.5) {
            console.log('vap if');
            outputArea.innerHTML = `
                <img src="./img/body-1.png" alt="img" class="w-100">
                <p class="mb-0 text-white">Under weight : ${result.toFixed(2)}</p>
            `;
        }
        else if (result >= 18.5 && result <= 24.9) {
            outputArea.innerHTML = `
                <img src="./img/body-2.png" alt="img" class="w-100">
                <p class="mb-0 text-white">Normal : ${result.toFixed(2)}</p>
            `;
        }
        else if (result >= 25 && result <= 29.9) {
            outputArea.innerHTML = `
                <img src="./img/body-3.png" alt="img" class="w-100">
                <p class="mb-0 text-white">Over weight : ${result.toFixed(2)}</p>
            `;
        }
        else {
            outputArea.innerHTML = `
                <img src="./img/body-4.png" alt="img" class="w-100">
                <p class="mb-0 text-white">Severe obesity : ${result.toFixed(2)}</p>
            `;
        }
    }
})

