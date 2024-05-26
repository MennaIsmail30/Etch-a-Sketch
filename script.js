
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const button = document.getElementById('gridButton');
    function createGrid(squaresPerSide) {
        container.innerHTML = '';
        const squareSize = 960 / squaresPerSide;
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            container.appendChild(div);
        }
    }
    createGrid(32);
    button.addEventListener('click', () => {
        let squaresnum = prompt("Enter the number of squares per side (maximum 100):");
        squaresnum = parseInt(squaresnum);
        if (isNaN(squaresnum) || squaresnum < 1 || squaresnum > 100) {
            alert("Please enter a number between 1 and 100.");
        } else {
            createGrid(squaresnum);
        }
    });
});
