function kirimPesanWhatsApp(event) {
    event.preventDefault();
    
    const nama = document.getElementById('name').value;
    const pesan = document.getElementById('message').value;
    const nomorTelepon = "+6285331048542";
    
    const urlWhatsApp = `https://wa.me/${nomorTelepon}?text=Halo, nama saya ${encodeURIComponent(nama)}. ${encodeURIComponent(pesan)}`;
    
    window.open(urlWhatsApp, '_blank');
}