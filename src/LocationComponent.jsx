// import React, { useState, useEffect } from 'react';

// const LocationComponent = () => {
// //   const [latitude, setLatitude] = useState(null);
// //   const [longitude, setLongitude] = useState(null);
// const latitude = 40.712776; // Replace with your latitude
// const longitude = -74.005974; 
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [error, setError] = useState(null);
//   const apikey='AIzaSyBhCOEcZ6V6TAVACtXp1-A-m8HtsUrkUqI'
//   const encodedLatitude = encodeURIComponent(latitude);
//   const encodedLongitude = encodeURIComponent(longitude);

//   useEffect(() => {
//     // Check if geolocation is available in the browser
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//         //   setLatitude(position.coords.latitude);
//         //   setLongitude(position.coords.longitude);

//           // Fetch city and state using reverse geocoding (Google Maps Geocoding API)

          
//           fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${encodedLatitude},${encodedLongitude}&key=${apikey}`)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.results && data.results.length > 0) {
//                 const addressComponents = data.results[0].address_components;
//                 let foundCity = '';
//                 let foundState = '';

//                 for (let component of addressComponents) {
//                   if (component.types.includes('locality')) {
//                     foundCity = component.long_name;
//                   } else if (component.types.includes('administrative_area_level_1')) {
//                     foundState = component.long_name;
//                   }
//                 }

//                 setCity(foundCity);
//                 setState(foundState);
//               }
//             })
//             .catch((error) => {
//               setError('Error fetching location data');
//               console.error(error);
//             });
//         },
//         (error) => {
//           setError(error.message);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported in this browser.");
//     }
//   }, []);

//   return (
//     <div>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div>
//           <p>
//             Latitude: {latitude}, Longitude: {longitude}
//           </p>
//           <p>
//             City: {city}, State: {state}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationComponent;


import React, { useState, useEffect } from 'react';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState(null);
  const api_key = 'AIzaSyBhCOEcZ6V6TAVACtXp1-A-m8HtsUrkUqI'; // Replace with your API key

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []); // Empty dependency array to run once when the component mounts

  useEffect(() => {
    // Fetch city and state using reverse geocoding (Google Maps Geocoding API) when latitude and longitude change
    if (latitude !== null && longitude !== null) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            const addressComponents = data.results[0].address_components;
            let foundCity = '';
            let foundState = '';

            for (let component of addressComponents) {
              if (component.types.includes('locality')) {
                foundCity = component.long_name;
              } else if (component.types.includes('administrative_area_level_1')) {
                foundState = component.long_name;
              }
            }

            setCity(foundCity);
            setState(foundState);
          }
        })
        .catch((error) => {
          setError('Error fetching location data');
          console.error(error);
        });
    }
  }, [latitude, longitude, api_key]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {latitude !== null && longitude !== null && (
            <p>
              Latitude: {latitude}, Longitude: {longitude}
            </p>
          )}
          <p>
            City: {city}, State: {state}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;

