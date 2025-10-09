function calculateSalary() {
        const salaryText = document.getElementById('baseSalary').value;
        const baseSalary = parseFloat(salaryText);
        const salaryFactor = parseFloat(document.getElementById('salaryFactor').value);
        const resultDisplay = document.getElementById('monthlySalary');
        const monthlySalary = baseSalary * salaryFactor;
        resultDisplay.textContent = monthlySalary; 
    }
    document.addEventListener('DOMContentLoaded', calculateSalary);