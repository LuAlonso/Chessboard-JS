function criarChessBoard() {
    let chessboard = "";
    for (let i = 0; i < 8; i++) {
        let linha = "";
        for (let j = 0; j < 8; j++) {
            // Determinar se coloca um espaço ou # baseado na soma do indice de coluna ou linha
            linha += (i + j) % 2 === 0 ? "#" :" ";
            
        }
        chessboard += linha + "\n";
    }
    return chessboard;
}

let board = criarChessBoard();
console.log(board);
