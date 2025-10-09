function calculate(operation) {
    const number1 = parseInt(document.getElementById('num1').value);
    const number2 = parseInt(document.getElementById('num2').value);
    const resultDisplay = document.getElementById('result');
    let result = 0;
    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = 'Vui lòng nhập số hợp lệ!';
        return;
    }
    if (operation === 'multiply') {
        result = number1 * number2;
    } else if (operation === 'divide') {
        if (number2 === 0) {
            resultDisplay.textContent = 'Không thể chia cho 0!';
            return;
        }
        result = (number1 / number2); 
    }
    resultDisplay.textContent = result;
    console.log("Script đã tải thành công!");
}