/*
Step 1: Identify and define the type of graph
There is no code to this part but take time to identify and define the graph.
Is this graph directed or undirected? undirected
Is this graph cyclic or acyclic?  acyclic
What are the nodes and what are the edges?  nodes are the numbers 1 or 0, edges are the adjacent nodes with 1
What kind of traversal or search will you need to solve this? Depth-first search
*/

function getNeighbors(row, col, graph) {

  let neighbours = [];
  let height = graph.length;
  let width = graph[0].length;

  // Check top

  // Check bottom
  for (let j = col - 1; j < col + 2; j += 2) {

    if (j >= 0 && j < width) {
      let el = graph[row][j];

      if (el === 1) {
        let neighbour = [row, j];
        neighbours.push(neighbour);
      }
    }
  }
  // Check left

  // Check right
  for (let i = row - 1; i < row + 2; i += 2) {

    if (i >= 0 && i < height) {
      let el = graph[i][col];

      if (el === 1) {
        let neighbour = [i, col];
        neighbours.push(neighbour);
      }
    }
  }

  return neighbours

}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add([row, col].toString());

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
    while (stack.length > 0) {
    // Pop the first node
    let currentNode = stack.pop()
    let currentRow = currentNode[0];
    let currentCol = currentNode[1];
    // DO THE THING (increment size by 1)
    size++

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

    let neighbors = getNeighbors(currentRow, currentCol, graph);
    neighbors.forEach(
      neighbor => {
        if (!visited.has(neighbor.toString())) {
          stack.push(neighbor);
          // and mark them as visited
          visited.add(neighbor.toString());
        }

      }
    );
    }
  // return size
    return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
