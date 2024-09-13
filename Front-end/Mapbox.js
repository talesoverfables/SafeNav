mapboxgl.accessToken = 'pk.eyJ1IjoiZGhydXRoaSIsImEiOiJjbHRpcXlzMjAwZjdiMmtxd2M0bzA5b2Q5In0.kRZRe2qbs0d3X14ndRcGZg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 9
});

map.on('load', function () {
  document.getElementById('routeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    fetchRoute(from, to);
  });
});

function fetchRoute(from, to) {
  var requestOptions = {
    method: 'GET'
  };
  
  fetch('https://api.geoapify.com/v1/routing?waypoints=' + from + '|' + to + '&mode=drive&apiKey=cd527acd5fa64a17a59ed21976769105', requestOptions)
    .then(response => response.json())
    .then(result => {
      // Assuming 'safetyValues' is an object mapping street names to safety values
      var filteredStreets = result.routes[0].segments.filter(segment => safetyValues[segment.street] > 0.7);
      var coordinates = filteredStreets.map(segment => segment.geometry.coordinates).flat();
      
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': coordinates
            }
          }
        },
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#888',
          'line-width': 8
        }
      });
    })
    .catch(error => console.log('Error:', error));
}
function fetchRoute(from, to) {
    var requestOptions = {
      method: 'GET'
    };
  
    fetch('https://api.geoapify.com/v1/routing?waypoints=' + from + '|' + to + '&mode=drive&apiKey=YOUR_GEOAPIFY_API_KEY', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.routes && result.routes.length > 0) {
          var routeCoordinates = result.routes[0].geometry.coordinates;
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: routeCoordinates
                }
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 8
            }
          });
        } else {
          console.error('No routes found');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
