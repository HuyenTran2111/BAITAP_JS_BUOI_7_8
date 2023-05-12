function getEle(id) {
    return document.getElementById(id);
};

var listNumber = [];
var printNumber = "";
getEle('btnAddNumber').onclick = function () {
    // dom tơi sther input#txtNumber lấy value
    var number = getEle('txtNumber').value * 1;

    // thêm phần tử vào mảng listNumber
    listNumber.push(number);

    if (printNumber === "") {
        printNumber += listNumber[listNumber.length - 1];
    } else {
        printNumber += ',' + listNumber[listNumber.length - 1];
    };


    document.getElementById('footerCard').innerHTML = printNumber;
    getEle('')
};

// 1. Tổng số dương

getEle('btnTinhTong').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var sum = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            sum += listNumber[i];
        }
    }
    document.getElementById('footerTinhTong').innerHTML = 'Tổng số dương: ' + sum;
};

// 2. Đếm số dương

getEle('btnDemSo').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var count = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            count += 1;
        }
    }
    document.getElementById('footerDemSo').innerHTML = 'Số dương: ' + count;
};

// 3. Tìm số nhỏ nhất

getEle('btnSoNhoNhat').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var minNumber = listNumber[0];

    for (var i = 0; i < listNumber.length; i++) {
        if (minNumber > listNumber[i]) {
            minNumber = listNumber[i];

        }
    }
    document.getElementById('footerSoNhoNhat').innerHTML = 'Số nhỏ nhất: ' + minNumber;
};

// 4. Tìm số dương nhỏ nhất

getEle('btnSoDuongNN').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var temp = [];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] >= 1) {
            temp.push(listNumber[i]);
        }
    }

    if (temp.length == 0) {
        document.getElementById('footerSoDuongNN').innerHTML = 'Không có số dương nào trong mảng';
    } else {
        var smallestPositiveNumber = temp[0];

        for (var i = 0; i < temp.length; i++) {
            if (smallestPositiveNumber > temp[i]) {
                smallestPositiveNumber = temp[i];
            }
        }
        document.getElementById('footerSoDuongNN').innerHTML = 'Số dương nhỏ nhất: ' + smallestPositiveNumber;

    }
};

// 5. Tìm số chẵn cuối cùng

getEle('btnSoChan').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var lastEvenNumber = -1;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 === 0) {
            lastEvenNumber = listNumber[i];
        }
    }
    document.getElementById('footerSoChan').innerHTML = 'Số chẵn cuối cùng: ' + lastEvenNumber;
};

// 6. Đổi chỗ

getEle('btnDoiCho').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var index1 = document.getElementById('index1').value * 1;
    var index2 = document.getElementById('index2').value * 1;

    if (typeof listNumber[index1] == 'undefined' || typeof listNumber[index2] == 'undefined') {
        document.getElementById('footerDoiCho').innerHTML = 'Không tìm thấy số tại vị trí 1 hoặc vị trí 2';
    } else {
        var temp = listNumber[index1];
        listNumber[index1] = listNumber[index2];
        listNumber[index2] = temp;

        document.getElementById('footerDoiCho').innerHTML = 'Mảng sau khi đổi: ' + listNumber;
    }

};

// 7. Sắp xếp tăng dần

getEle('btnSapXepTang').onclick = function () {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[j];
                listNumber[j] = listNumber[i];
                listNumber[i] = temp
            }

        }
    }
    document.getElementById('footerSapXepTang').innerHTML = 'Mảng sau khi sắp xếp: ' + listNumber;
};

// 8. Tìm số nguyên tố đầu tiên
getEle('btnSoNguyenToDauTien').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }

    var primeNumber = -1;

    for(var i = 0; i < listNumber.length; i++) {
        if (isPrime(listNumber[i])) {
            primeNumber = listNumber[i];
            break;
        }
    }
    document.getElementById('footerSoNguyenToDauTien').innerHTML = primeNumber;

};

function isPrime(n)
{   
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
};

// 9. Đếm số nguyên
function getEle(id) {
    return document.getElementById(id);
};

var listNumber1 = [];
var printNumber1 = "";
getEle('btnAddNumber1').onclick = function () {
    // dom tơi sther input#txtNumber lấy value
    var number = getEle('txtNumber1').value * 1;

    // thêm phần tử vào mảng listNumber
    listNumber1.push(number);

    if (printNumber1 === "") {
        printNumber1 += listNumber1[listNumber1.length - 1];
    } else {
        printNumber1 += ',' + listNumber1[listNumber1.length - 1];
    };


    document.getElementById('footerCard1').innerHTML = printNumber1;
    getEle('')
};

getEle('btnDemSoNguyen').onclick = function () {

    var count = 0;

    for( var i = 0; i < listNumber1.length; i++){
        if (Number.isInteger(listNumber1[i])) {
            count++;
        } 
    }
    document.getElementById('footerDemSoNguyen').innerHTML = 'Số nguyên: ' + count;
};


// 10. So sánh số lượng số âm và số dương

getEle('btnSoSanh').onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var countPositive = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            countPositive += 1;
        }
    }
    var countNegative = 0;
    for (var i = 0; i < listNumber.length; i++) {
       if (listNumber[i] < 0) {
           countNegative += 1;
       }
    }

    if (countPositive > countNegative) {
        document.getElementById('footerSoSanh').innerHTML = 'Số dương > số âm';
    } else if (countPositive < countNegative) {
        document.getElementById('footerSoSanh').innerHTML = 'Số âm > số dương';
    } else {
        document.getElementById('footerSoSanh').innerHTML = 'Số âm = số dương';
    }
};

test()
function test() {
    var haha = "hello case";
    var arr = haha.split(" ");
    result = '';
    for(var i = 0; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    console.log(result);
}

test1()
function test1() {
    var haha = 3;
    result = 1;
    for(var i = 1; i <= haha; i++) {
        result *= i;
    }
    console.log(result);
}




