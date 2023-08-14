function initMap() 
    const storeLocation = { lat: -23.5678, lng: -46.7890 }; // Coordenadas da loja

    const map = new google.maps.Map(document.getElementById('google-map'), {
      center: storeLocation,
      zoom: 15
    });

    const marker = new google.maps.Marker({
      position: storeLocation,
      map: map,
      title: 'Nossa Loja'
    });