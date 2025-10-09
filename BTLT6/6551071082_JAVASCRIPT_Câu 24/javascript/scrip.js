function displayDayOfWeek() {
    // SỬ DỤNG ID ĐÃ SỬA: dayInput, monthInput, yearInput
    const day = parseInt(document.getElementById('dayInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const year = parseInt(document.getElementById('yearInput').value);
    
    const resultSpan = document.getElementById('resultDate');

    if (isNaN(day) || isNaN(month) || isNaN(year) || year < 1000) {
        resultSpan.textContent = 'Vui lòng nhập Ngày, Tháng, Năm hợp lệ!';
        return;
    }

    const date = new Date(year, month - 1, day);

    if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
        resultSpan.textContent = 'Ngày tháng năm không tồn tại!';
        return;
    }
    const dayIndex = date.getDay(); 
    let dayName;
    
    if (dayIndex === 0) {
        dayName = "Chủ Nhật";
    } else {
        dayName = "Thứ " + (dayIndex + 1); 
    }
    
    resultSpan.textContent = `${dayName} Ngày ${day} tháng ${month} năm ${year}`;
}