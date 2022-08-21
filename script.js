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

const isValid = (x, y, N) => {
    return (x >= 0 && y >= 0 && x <= N && y <= N);
};

const knightMoves = (start, end) => {
    // Se crea el arreglo que contendrá a los nodos visitados.
    let visited = [];

    // Se crea el nodo de inicio.
    let node = new Node(start[0], start[1], null);

    // Se crea el arreglo que actuará como QUEUE y se le agrega el nodo de inicio.
    let queue = [node];

    while(queue.length > 0){
        let node = queue.shift();
        if(visited.indexOf(node) < 0){

            visited.push(node);

            //Si el nodo ya es la solución, se retorna y acaba la función.
            if(node.x === end[0] && node.y === end[1]){
                queue = [];
                return node;
            };

            //Se calculan los siguiente movimientos del caballo.
            for(let i = 0; i < col.length; i++){
                let nextMove = [node.x + row[i], node.y + col[i]];
                //Se comprueba que es un movimiento válido.
                if(isValid(nextMove[0], nextMove[1], 8)){
                    let newNode = new Node(nextMove[0], nextMove[1], node);
                    queue.push(newNode);
                };
            };
        };
    };
    return 'No such position is reachable.'
};

console.log(knightMoves([3,3], [4,3]));