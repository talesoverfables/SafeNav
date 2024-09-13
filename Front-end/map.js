window.onload = function() {
    var leftContainerGroup = document.querySelector('.left-container-group');
    var bigContainer = document.querySelector('.big-container');

    // Calculate the number of left containers
    var numLeftContainers = leftContainerGroup.children.length;

    // Add event listener to resize containers on window resize
    window.addEventListener('resize', function() {
        var windowWidth = window.innerWidth;
        var containerWidth = windowWidth / 5 * 4; // 4 columns for left containers
        var bigContainerWidth = windowWidth - containerWidth;

        leftContainerGroup.style.width = containerWidth + 'px';
        bigContainer.style.width = bigContainerWidth + 'px';

        for (var i = 0; i < numLeftContainers; i++) {
            leftContainerGroup.children[i].style.width = containerWidth / numLeftContainers + 'px';
        }
    });

    // Initialize the containers on page load
    var windowWidth = window.innerWidth;
    var containerWidth = windowWidth / 5 * 4;
    var bigContainerWidth = windowWidth - containerWidth;

    leftContainerGroup.style.width = containerWidth + 'px';
    bigContainer.style.width = bigContainerWidth + 'px';

    for (var i = 0; i < numLeftContainers; i++) {
        leftContainerGroup.children[i].style.width = containerWidth / numLeftContainers + 'px';
    }
};

function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -33.8688, lng: 151.2093},
            zoom: 8
        });

        // Create the autocomplete objects.
        var originField = document.getElementById('origin');
        var destinationField = document.getElementById('destination');
        var originAutocomplete = new google.maps.places.Autocomplete(originField);
        var destinationAutocomplete = new google.maps.places.Autocomplete(destinationField);

        // Add a listener for the user selecting a place.
        originAutocomplete.addListener('place_changed', function() {
            var place = originAutocomplete.getPlace();
            if (!place.place_id) {
                return;
            }

            'geocode' in map.options ?
                map.geocode({'placeId': place.place_id}) :
                map.setOptions({'geocode': true});
        });

        destinationAutocomplete.addListener('place_changed', function() {
            var place = destinationAutocomplete.getPlace();
            if (!place.place_id) {
                return;
            }

            'geocode' in map.options ?
                map.geocode({'placeId': place.place_id}) :
                map.setOptions({'geocode': true});
        });
    }

google.maps.event.addDomListener(window, 'load', initAutocomplete);
function showSafePlaces() {
    // Display the popup
         var popup = document.getElementById('popup');
         popup.style.display = 'block';
    }

    function closePopup() {
    // Close the popup
          var popup = document.getElementById('popup');
          popup.style.display = 'none';
    }
