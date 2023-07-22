function calculateArea(length, width) {
  // Check if the provided arguments are valid numbers
  if (typeof length !== 'number' || typeof width !== 'number') {
    throw new Error('Both "length" and "width" should be numbers.');
  }

  // Calculate the area by multiplying length and width
  const area = length * width;

  return area;
}