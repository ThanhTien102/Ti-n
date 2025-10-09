
const PRICE_LIST = {
    "Bún bò": 20000,
    "Hủ tiếu": 18000,
    "Bánh canh": 17000,
    "Phở bò": 19000,
    "Nuôi": 15000,
    "Bánh mì thịt": 12000,
    "Bánh cuốn": 15000,
    
    "Cà phê đá": 12000,
    "Cà phê sữa đá": 15000,
    "Chanh dây": 13000,
    "Chanh muối": 12000,
    "Xí muội": 14000,
    "Sữa tươi": 13000,
    "Cam vắt": 17000
};

function calculateBill() {
    let totalBill = 0;
    const selectedItems = []; // Lưu trữ các món đã chọn (tên và giá)
    const foodSelect = document.getElementById('thucan');
    const drinkSelect = document.getElementById('nuocuong');

    // 2. Thu thập các món ăn đã chọn
    collectItems(foodSelect, selectedItems, totalBill);
    // Thu thập các món nước uống đã chọn
    collectItems(drinkSelect, selectedItems, totalBill);

    // Dùng forEach để tính tổng tiền (vì totalBill trong collectItems chỉ nhận bản sao)
    totalBill = selectedItems.reduce((sum, item) => sum + item.price, 0);

    // 3. Kiểm tra thời điểm
    const isNightTime = document.getElementById('dem').checked;
    let finalTotal = totalBill;

    // 4. Áp dụng phụ phí Ban đêm (10%)
    if (isNightTime && totalBill > 0) {
        const surcharge = totalBill * 0.10;
        finalTotal += surcharge;
    }
    displayResult(selectedItems, finalTotal);
}

// Hàm phụ trợ để thu thập dữ liệu từ thẻ <select>
function collectItems(selectElement, itemsArray) {
    // Duyệt qua tất cả các <option>
    for (let i = 0; i < selectElement.options.length; i++) {
        const option = selectElement.options[i];
        
        // Kiểm tra nếu option này được chọn
        if (option.selected) {
            const itemName = option.text;
            const itemPrice = PRICE_LIST[itemName];
            
            if (itemPrice) { // Đảm bảo món ăn có trong bảng giá
                itemsArray.push({ name: itemName, price: itemPrice });
            }
        }
    }
}

// Hàm phụ trách tạo và cập nhật bảng kết quả
function displayResult(items, total) {
    const tableContainer = document.querySelector('body > table');
    
    // Nếu bảng kết quả cũ đã tồn tại, xóa nó đi
    const existingResultTable = document.getElementById('resultTable');
    if (existingResultTable) {
        existingResultTable.remove();
    }

    // Tạo bảng mới để hiển thị kết quả
    const resultTable = document.createElement('table');
    resultTable.id = 'resultTable';
    resultTable.border = '1';
    resultTable.style.marginTop = '20px';
    resultTable.style.width = tableContainer.offsetWidth + 'px'; // Kích thước bằng bảng thực đơn

    let tableHTML = `
        <tr><th colspan="2">Các món đã dùng</th><th>Tiền</th></tr>
        <tr><td colspan="3" style="text-align: center; color: red;">${items.length === 0 ? 'Chưa chọn món nào!' : ''}</td></tr>
    `;

    items.forEach(item => {
        tableHTML += `
            <tr>
                <td colspan="2">${item.name}</td>
                <td align="right">${item.price.toLocaleString('vi-VN')} đ</td>
            </tr>
        `;
    });

    // Thêm hàng Tổng tiền
    tableHTML += `
        <tr>
            <td colspan="2"><b>Tổng tiền phải trả</b></td>
            <td align="right" style="color: red;"><b>${total.toLocaleString('vi-VN')} đồng</b></td>
        </tr>
    `;
    
    resultTable.innerHTML = tableHTML;
    
    // Chèn bảng kết quả ngay sau bảng thực đơn
    tableContainer.parentNode.insertBefore(resultTable, tableContainer.nextSibling);
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('button[type="submit"]');
    if (calculateButton) {
        calculateButton.addEventListener('click', function(event) {
            // Ngăn chặn hành vi mặc định của button type="submit" (gửi form)
            event.preventDefault(); 
            calculateBill();
        });
    }
    calculateBill();
});