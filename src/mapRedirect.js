/** @format */

const latitude = 27.693385064671805; // Replace with your location's latitude
const longitude = 85.34744826462192; // Replace with your location's longitude

export const redirectToMaps = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  window.open(mapsUrl, "_blank");
};
