import { Node } from "./node";

export class Graph {
    edgeDirection: GraphType;
    nodes: Map<string, Node>;

    constructor() {
        this.edgeDirection = 'UNDIRECTED';
        this.nodes = new Map();
    }

    addVertex(value: string) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value);
        }
        const vertex = new Node(value);
        this.nodes.set(value, vertex)
    }

}

type GraphType = 'DIRECTED' | 'UNDIRECTED';