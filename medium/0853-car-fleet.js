// ---------------------- Stack solution: ----------------------

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const stack = [];
  const cars = [];
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }

  // Sort cars by descending order of position
  cars.sort((a, b) => b[0] - a[0]);

  cars.forEach((car) => {
    const time = (target - car[0]) / car[1];
    stack.push(time);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  });

  return stack.length;
};

// Time complexity: O(nlogn) - sorting is the bottleneck
// Space complexity: O(n)

// ---------------------- Iterative solution: ----------------------

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = position.map((p, i) => [p, speed[i]]);

  // Sort in descending order of position
  cars.sort((a, b) => b[0] - a[0]);

  let fleets = 1;
  let slowest = (target - cars[0][0]) / cars[0][1];
  for (let i = 1; i < cars.length; i++) {
    const time = (target - cars[i][0]) / cars[i][1];
    if (time > slowest) {
      fleets++;
      slowest = time;
    }
  }

  return fleets;
};

// Time complexity: O(nlogn) - sorting is the bottleneck
// Space complexity: O(n)
