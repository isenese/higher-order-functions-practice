

// Given a string representation of a 2d map, return the number of islands in the map.

// Land spaces are denoted by a zero.
// Water is denoted by a dot.
// Rows are denoted by newlines ('\n').
// Two land spaces are considered connected if they are adjacent (horizontal or vertical, but not diagonal).
// Too easy? Try solving it without recursion..

// ##Example:

// You may be given the string ".0...\n.00..\n....0" as input.

// This correlates to a grid, like this:

// .0...
// .00..
// ....0

// This would be an example of a map that contains two islands; one with 3 pieces of land, one with 1 piece of land.

// ##More example:

// This is 5 islands:

// 0...0
// ..0..
// 0...0

// This is 3 islands:

// ..000.
// ..000.
// ..000.
// .0....
// ..000.




function countIslands(mapStr) {
  const map = mapStr.split('\n').map(row => row.split(''));
  let count = 0;

//console.log(map)

  map.forEach((row, x) => {
    row.forEach((point, y) => {
       // console.log(point)
      if (point === '0') {
        count += 1;
        checkAround(map, x, y);
      }
    });
  });

  return count;
}

function checkAround(grid, x, y) {
    //we make sure we stay within the limits
  const mapLimits = x < 0 || x >= grid.length || y < 0 || y >= grid[x].length;
  if (mapLimits) return;

  const value = grid[x][y];
  if (value !== '0') return;

  grid[x][y] = '.';
  checkAround(grid, x - 1, y);
  checkAround(grid, x + 1, y);
  checkAround(grid, x, y - 1);
  checkAround(grid, x, y + 1);
 //console.log(grid)
}



 countIslands('00...0\n0...00\n......\n0.0.0.\n0.....') // === 5, "");
//(countIslands("..000.\n..000.\n..000.\n.0....\n..000.") // === 3, "");





