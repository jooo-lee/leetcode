/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // If starting pixel's color is equal to color, return original image
    if (image[sr][sc] == color) return image;

    fill(image, sr, sc, image[sr][sc], color);

    return image;
};

// Helper function
function fill(image, sr, sc, startColor, newColor) {
    // Check if current row and column is out of bounds
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
        return;
    }

    // Check if current pixel color does not match starting pixel color
    if (image[sr][sc] != startColor) {
        return;
    }

    // Change color of current pixel to newColor
    image[sr][sc] = newColor;

    // Recursively call fill() for 4-directionally connected pixels
    fill(image, sr + 1, sc, startColor, newColor);
    fill(image, sr - 1, sc, startColor, newColor);
    fill(image, sr, sc + 1, startColor, newColor);
    fill(image, sr, sc - 1, startColor, newColor);
}