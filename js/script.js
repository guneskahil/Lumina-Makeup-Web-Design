const numberInput = document.getElementById('number');

function increaseValue() {
    let value = parseInt(numberInput.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    numberInput.value = value;
}

function decreaseValue() {
    let value = parseInt(numberInput.value, 10);
    value = isNaN(value) ? 1 : value;
    value < 2 ? value = 1 : value--;
    numberInput.value = value;
}

function readMore() {
    var moreText = document.getElementById("moreText");
    var hideBtn = document.getElementById("hideBtn");
    var readMoreBtn = document.getElementById("readMoreBtn");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        hideBtn.style.display = "inline";
        readMoreBtn.style.display = "none";
    }
}

function hideMore() {
    var moreText = document.getElementById("moreText");
    var hideBtn = document.getElementById("hideBtn");
    var readMoreBtn = document.getElementById("readMoreBtn");
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        hideBtn.style.display = "none";
        readMoreBtn.style.display = "inline";
    }
}

function toggleImages(imgId, imgId2) {
    var firstImg = document.getElementById(imgId);
    var secondImg = document.getElementById(imgId2);
    firstImg.style.display = (firstImg.style.display === 'none') ? 'inline-block' : 'none';
    secondImg.style.display = (secondImg.style.display === 'none') ? 'inline-block' : 'none';
}

function showDropdown() {
    var dropdownMenu = document.getElementById("navbarDropdownMenu");
    dropdownMenu.style.display = "block";
}

function hideDropdown() {
    var dropdownMenu = document.getElementById("navbarDropdownMenu");
    dropdownMenu.style.display = "none";
}

function changeMainImage(source) {
    document.getElementById("mainImg").src = source;
}

function toggleProfile() {
    var profileInfo = document.getElementById('profile-info');
    var profileForm = document.getElementById('profile-form');

    if (profileInfo.style.display === 'none') {
        profileInfo.style.display = 'block';
        profileForm.style.display = 'none';
    } else {
        profileInfo.style.display = 'none';
        profileForm.style.display = 'none';
    }
}

function drawOrderChart() {
    //-----günlük ürün popülerliği
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Ruj', 'Göz Farı', 'Allık', 'Aydınlatıcı', 'Kapatıcı', 'Fondöten'],
            datasets: [{
                label: 'Bu Ayki Satış Miktarları',
                data: [60, 32, 59, 86, 43, 73],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        }
    });


    //-----haftalık ürün popülerliği
    var ctx2 = document.getElementById('popularProductsChart').getContext('2d');
    var popularProductsChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Ruj', 'Fondöten', 'Göz Farı', 'Allık', 'Aydınlatıcı', 'Kapatıcı'],
            datasets: [{
                label: 'Ürün Popülerliği',
                data: [153, 108, 98, 210, 200, 110], // Örnek veri (satış miktarları)
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        }
    });


    //----Aktif kullanıcı sayısı grafiği
    var ctx3 = document.getElementById('activeUsersChart').getContext('2d');
    var activeUsersChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Ruj', 'Göz Farı', 'Fondöten', 'Kapatıcı', 'Allık', 'Aydınlatıcı'],
            datasets: [{
                label: 'Kategorilerin Görüntülenme Sayıları',
                data: [
                    Math.floor(Math.random() * 100) +1,
                    Math.floor(Math.random() * 100) +1,
                    Math.floor(Math.random() * 100) +1,
                    Math.floor(Math.random() * 100) +1,
                    Math.floor(Math.random() * 100) +1,
                    Math.floor(Math.random() * 100) +1
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    // Saniyede bir çağrı yaparak verileri güncelle
    function updateData() {
        // Yeni verilerin oluşturulması (örneğin, rastgele veri)
        var newData = activeUsersChart.data.datasets[0].data.map(function() {
            return Math.floor(Math.random() * 200); // Rastgele sayılar oluşturuluyor (0 ile 200 arası)
        });

        activeUsersChart.data.datasets[0].data = newData;
        activeUsersChart.update(); // Grafik güncelleniyor
    }

    // Verilerin 5 saniyede bir güncellenmesi
    setInterval(updateData, 5000); // 5000 milisaniye = 5 saniye


    //----Stok grafiği
    // Kategori isimleri
    const categories = ['Ruj', 'Far', 'Aydınlatıcı', 'Allık', 'Kapatıcı', 'Fondöten'];

// Örnek stok miktarları
    const stockData = [5000, 2342, 7102, 4215, 3818, 2200];

// Sütun grafiği oluşturma
    const ctx4 = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Stok Miktarı',
                data: stockData,
                backgroundColor: 'rgba(255,123,123,0.73)',
                borderColor: 'rgb(206,154,153)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    ``

}

window.onload = function () {
    drawOrderChart();
};

function showPhoneNumber() {
    var phoneNumberElement = document.getElementById("phone-number");
    if (phoneNumberElement.style.display === "none") {
        phoneNumberElement.style.display = "block";
    } else {
        phoneNumberElement.style.display = "none";
    }
}

function toggleAddresses() {
    var addresses = document.querySelectorAll('#addresses .address');
    addresses.forEach(function (address) {
        if (address.style.display === 'none') {
            address.style.display = 'block';
        } else {
            address.style.display = 'none';
        }
    });
}

//kullanıcı sayfasında adres düzenleme fonksiyonu
function editAddress(addressNumber) {
    var newAddress = prompt("Yeni adresi girin:");
    if (newAddress != null) {
        var addressElement = document.querySelector(`#addresses .address:nth-of-type(${addressNumber}) p`);
        addressElement.textContent = "Adres " + addressNumber + ": " + newAddress;
    }
}

//sepete ekleme fonksiyonu
function addToCart(productId) {
    var cart = document.getElementById('cart');
    var cartItems = document.getElementById('cart-items');
    var listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(productId));
    cartItems.appendChild(listItem);
    cart.style.display = 'block'; // kartı göster
}


function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// kullanıcı giriş modalını açma
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// kullanıcı giriş modalını kapama
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

//Admin paneline giriş fonksiyonu
function checkCredentials(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Admin bilgileri burada kontrol edilecek
    var adminMail = "admin@lumina.com";
    var adminPassword = "admin123";

    if (username === adminMail && password === adminPassword) {
        window.location.href = "admin_page.html"; // Yönlendirilecek sayfanın URL'si
    } else {
        alert("Hatalı giriş! Lütfen doğru bilgileri girin.");
    }
}







