function askForName() {
    var name = prompt("Masukkan nama Anda :");
    const welcomeText = ". Welcome to RewoYu";
    // Memastikan nama tidak kosong
    if (name != null && name != "") {
        alert("Welcome, " + name + "!");
        document.getElementById('output-from-askForName').innerHTML = "Hi, "+name+ welcomeText;
    } else {
        // Jika nama kosong, tampilkan pesan dan panggil kembali fungsi
        alert("Nama tidak boleh kosong. Silahkan isi nama Anda. ");
        askForName();
    }

}

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
}


// Fungsi untuk menangani pengiriman formulir
function submitForm() {
    // Ambil data dari formulir
    var now = new Date();
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById("message").value;
    
    // Tampilkan data pada Card 2
    var userData = "Name: " + name + "<br>" +
                   "Date of Birth: " + dob + "<br>" +
                   "Gender: " + gender + "<br>" +
                   "Message: " + message;
    
document.getElementById("userData").innerHTML = userData;
document.getElementById("currentTime").innerHTML = now;


}




