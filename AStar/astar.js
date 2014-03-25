/*
  Hello, algorithmicists!  Today we're going to implement the A* search algorithm.

  The fundamental unit of this algorithm is the `node`.  Nodes represent spaces on the
  board, and have the following properties and methods.

    Properties:
      f: // estimated path length through this node.
      g: // shortest path found (so far) from start to this node.

    Methods:
      indexIn(set):    // returns the index of the node in the set, or -1 if not present.
      isGoal():        // returns whether the node is the goal.
      neighbors():     // returns a list of nodes adjacent to the current one.
      calcHeuristic(): // returns the heuristic distance from this node to the goal.
      visit():         // tells the visualizer that you've visited the current node. (good for debugging)

  You should also note that we've given you the first two lines, defining the closed
  and open sets.  The closed set is a list of nodes that you've visited already, and
  the open set is a list of nodes "on the boundary" - that is, you've visited one of
  their neighbors, but you haven't yet processed them.  You don't have to mess with
  the sets directly - you can also use Node.indexIn(set).

  Finally, we've done a little magic with the "neighbors" function, which will allow
  the visualizer to retrace your steps and draw the path.  Don't worry about this part!

  Just be sure to return the goal node once you've found it.

*/

window.solve = function(startNode) {
  var open = [startNode];
  var closed = [];

  var current = startNode;

  if (current.isGoal()) {
    return current;
  }
};



