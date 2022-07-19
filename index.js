document.getElementById('btnInSo_8').onclick = function () {
    //    input:số tử ngưởi dùng
    var number = Number(document.getElementById('nhapSo_5').value);
    // output:số nguyên tô
    var ketQua = '';
    for (var iSo = 2; iSo < number; iSo++) {
        // Kiểm tar mỗi số là nt
        var checkSNT = true;
        for (var i = 2; i < Math.sqrt(iSo); i++) {
            if (iSo % i === 0) {
                checkSNT = false;
                break;
            }
        };
        if (checkSNT) {
            ketQua += iSo + '';
        }
    }
    document.getElementById('ketQua5').innerHTML=ketQua;
    
}