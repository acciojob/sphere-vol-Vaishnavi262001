function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  let volume;

  // validate radius
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    // calculate volume: (4/3) * π * r^3
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    // round to 4 decimal places
    volume = volume.toFixed(4);
  }

  // display result
  document.getElementById("volume").value = volume;

  return false; // prevent form submission/reload
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
