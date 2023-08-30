window.addEventListener('DOMContentLoaded', () => {
    let map = L.map('map').setView([8.6813539, -76.0296769], 40);
    let urlIEL = 'https://www.google.com/maps/@8.6813539,-76.0296769,3a,75y,337.56h,85.73t/data=!3m7!1e1!3m5!1slpUpyQ-sEJifKXa4UVNWVw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlpUpyQ-sEJifKXa4UVNWVw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D309.59302%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=es&entry=ttu'

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        minZoom: 1
    }).addTo(map);
    let myMarker = L.marker([8.6813539, -76.0296769]).addTo(map);
    myMarker.bindPopup(`<a href="${urlIEL}"  target="_blank">Institucion Educativa leticia</a>`).openPopup();
});