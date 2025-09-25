        function hienThiMatKhau(event) {
            event.preventDefault();
            const oMatKhau = document.getElementById('matkhau');
            const giaTriMatKhau = oMatKhau.value;
            const khungHienThi = document.getElementById('panel');
            khungHienThi.innerHTML =  giaTriMatKhau 
            khungHienThi.style.display = 'block';
        }