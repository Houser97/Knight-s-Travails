class Node{
    constructor(x, y, parent = null){
        this.x = x;
        this.y = y;
        this.parent = parent;
    };
};

// Se crean los arreglos con los posibles movimientos de un caballo.
let row = [2, 2, -2, -2, 1, 1, -1, -1];
let col = [-1, 1, 1, -1, 2, -2, 2, -2];

// Se crea el arreglo que contendrá a los nodos visitados.
let visited = [];

// Se crea el arreglo que actuará como QUEUE.
let queue = [];

const isValid = (x, y, N) => {
    return (x >= 0 && y >= 0 && x <= N && y <= N);
};