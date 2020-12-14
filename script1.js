var tombol = document.getElementById('tombol');
var tubuh = document.getElementById('tubuh');
var daftarTugas = document.getElementById('daftarTugas');


// fungsi ini ada karena kita membutuhkan kode ini berulang-ulang
function tampilkan(kumpulanData) {
  var output = "";

  for (var i = 0; i < kumpulanData.length; i++) {
    output = `${output} <li>${kumpulanData[i]} 
    <button type="button" class="tombol" onclick="handleHapus(${i})"><b>X</b></button></li>`;
  }

  daftarTugas.innerHTML = output;
}

function handleHapus(indeks) {
  // menghapus data pada indeks ke sekian
  data.splice(indeks, 1);

  // tampilkan ulang dari data yang baru
  tampilkan(data);

  // update localstorage karena datanya terhapus
  // step 1: ubah dulu data localstorage ke array
  var dataLS = JSON.parse(localStorage.getItem("dataOrang"));
  // step 2: karena udah berbentuk array kita bisa menghapus berdasarkan indeks
  dataLS.splice(indeks, 1);
  // step 3: data yang udah terhapus dimasukin ke localstorage lagi, tapi jangan lupa ubah dulu datanya jadi string
  localStorage.setItem("dataOrang", JSON.stringify(dataLS));
}

var data = [];

if (localStorage.getItem('dataOrang') != null) {
  // JSON.parse() berfungsi mengubah string berbentuk array/object jadi aslinya
  data = JSON.parse(localStorage.getItem("dataOrang"));
}
var list = document.querySelector('ol');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

tampilkan(data);

tombol.addEventListener('click', function () {
  var isian = document.getElementById("inputTugas").value;
  if (isian === '') {
    alert("Kamu harus menuliskan tugasmu yang belum dan akan kamu kerjakan, jika tidak akan muncul space kosong yang tidak perlu dan kamu harus menghapusnya, merepotkan kan.....!");
  } else {
    document.getElementById("inputTugas").value;
  }
  

  // document.getElementById("input").value = "";
  // masukin data ke array
  data.push(isian);

  
  
  // panggil fungsi tampilkan supaya muncul di browser
  tampilkan(data);

  
  
  // pertahankan data dengan localStorage
  // JSON.stringify() berfungsi mengubah array/object jadi string  
  localStorage.setItem('dataOrang', JSON.stringify(data))

  // step terakhir, clear form biar bisa input data lain
  document.getElementById("inputTugas").value = "";
 })

 // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ol');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputNama").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Kamu harus menuliskan tugasmu yang belum dan akan kamu kerjakan, jika tidak akan muncul space kosong yang tidak perlu dan kamu harus menghapusnya, merepotkan kan.....!");
  } else {
    document.getElementById("daftarTugas").appendChild(li);
  }
  document.getElementById("input").value = "";

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}
