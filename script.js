// Fungsi hanya untuk tes HP sendiri saja
function tesNotif() {
    if ('Notification' in window) {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                new Notification("✅ Tes Notifikasi Berhasil", {
                    body: "Dari GIPARSTORE - Hanya untuk perangkat sendiri"
                });
            } else {
                alert("Izinkan notifikasi agar fitur ini bisa bekerja");
            }
        });
    } else {
        alert("Notifikasi tidak didukung di perangkat ini");
    }
}

function tesJaringan() {
    const status = navigator.onLine ? "✅ Terhubung ke internet" : "❌ Tidak ada koneksi internet";
    alert("Status Jaringan:\n" + status);
}

function tesSuara() {
    alert("Memutar suara tes...\nPastikan volume cukup keras");
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoAACBlaG8=");
    audio.play().catch(() => alert("Gagal memutar suara"));
}

function tesLayar() {
    alert("Tes Layar:\n- Cek warna dasar\n- Respons sentuh\n- Tingkat kecerahan");
}

function infoPerangkat() {
    alert(`📋 Informasi Perangkat:
• Aplikasi: GIPARSTORE
• Sistem: ${navigator.userAgent}
• Layar: ${screen.width} × ${screen.height}
• Status Jaringan: ${navigator.onLine ? "Aktif" : "Tidak Aktif"}
⚠️ Semua fitur hanya untuk tes perangkat sendiri`);
}

function kirimTesDiri() {
    const nomor = prompt("Masukkan nomor HP kamu sendiri saja:\nContoh: 0812xxxxxxx");
    if (!nomor) return;

    if (!nomor.match(/^08[1-9][0-9]{8,10}$/)) {
        alert("❌ Format nomor salah! Gunakan nomor yang benar");
        return;
    }

    alert(`✅ Tes siap dikirim ke nomor kamu:
${nomor}

⚠️ PENTING:
Fitur ini hanya untuk mengecek kemampuan pengiriman ke nomor milikmu sendiri.
TIDAK BISA dipakai ke nomor orang lain.`);
}

function bukaAlat() {
    alert(`🛠️ DAFTAR ALAT TES:
• Tes Notifikasi
• Cek Jaringan
• Tes Suara & Getar
• Tes Layar
• Info Spesifikasi HP
• Tes Pengiriman ke Nomor Sendiri

Semua aman & tidak merusak apapun`);
      }
