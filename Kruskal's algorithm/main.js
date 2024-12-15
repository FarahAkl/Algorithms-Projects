// DisjointSet class for union-find operations
class DisjointSet {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.parent[rootY] = rootX;
    if (this.rank[rootX] === this.rank[rootY]) {
      this.rank[rootX]++;
    }
    return true;
  }
}

class Edge {
  constructor(src, dest, weight) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

function kruskalMST(vertices, edges) {
  // Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);

  const disjointSet = new DisjointSet(vertices);
  const mst = [];
  let mstWeight = 0;

  for (let edge of edges) {
    // If including this edge doesn't create a cycle
    if (disjointSet.union(edge.src, edge.dest)) {
      mst.push(edge);
      mstWeight += edge.weight;
    }
  }

  return {
    minimumSpanningTree: mst,
    totalWeight: mstWeight,
  };
}

// Example usage:
function example() {
  const vertices = 4;
  const edges = [
    new Edge(0, 1, 10),
    new Edge(0, 2, 6),
    new Edge(0, 3, 5),
    new Edge(1, 3, 15),
    new Edge(2, 3, 4),
  ];

  const result = kruskalMST(vertices, edges);

  console.log("Edges in the Minimum Spanning Tree:");
  result.minimumSpanningTree.forEach((edge) => {
    console.log(`${edge.src} -- ${edge.weight} --> ${edge.dest}`);
  });
  console.log("Total MST weight:", result.totalWeight);
}
let ex = example()
console.log(ex)