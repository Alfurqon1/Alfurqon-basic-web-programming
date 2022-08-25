function checkForm(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var film = document.getElementById("pilihFilm").value;
    var jadwal = document.getElementById("date").value;
    var snack = document.getElementById("cemilan").value;
    var waktu = document.getElementById("time").value;
   
    document.write("INFO PESANAN <br>"); 
    document.write("Nama : "+ nama +"<br>"); 
    document.write("Email : "+ email +"<br>");
    document.write("FILM YANG DIPILIH : "+ film + "<br>");
    document.write("Jadwal : "+ jadwal + "<br>");
    document.write("Snack : "+ snack + "<br>");
    document.write("JAM :"+ waktu + "<br>");

}
