const ganador = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('comenzar');
    let turn = 1;
    let player1 = [];
    let player2 = [];
    let divGanador = document.getElementById('divGanador')

    document.querySelectorAll('.cuadro').forEach(div => {
        div.addEventListener('click', function handleClick() {
            const marcado = this.getAttribute('data-value');

            if (turn % 2 !== 0) {
                this.classList.add('player1');
                
                player1.push(marcado);
                if (checkWinner(player1)) {
                    divGanador.innerHTML = 'Gano Player 1';
                sinClick();
                }
            } else {
                this.classList.add('player2');
                
                player2.push(marcado);
                if (checkWinner(player2)) {
                    divGanador.innerHTML = 'Gano Player 2';
                    sinClick();
                }
            }

            turn++;
            this.removeEventListener('click', handleClick);
        });
    });

    boton.addEventListener('click', () => {
        location.reload();
    });
});

function checkWinner(player) {
    let isWinner = false;
    ganador.forEach(combination => {
        if (combination.every(value => player.includes(value.toString()))) {
            isWinner = true;
        }
    });
    return isWinner;
}

function sinClick() {
document.querySelectorAll('.cuadro').forEach(div => {
div.style.pointerEvents = 'none';
});
}
