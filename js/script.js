const keys = document.querySelectorAll('.key, .black-key');

// Função para tocar o som
function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

keys.forEach(key => {
    key.addEventListener('click', (event) => {
        // Previne a propagação do evento para teclas pretas
        if (key.classList.contains('black-key')) {
            event.stopPropagation();
        }
        const sound = key.getAttribute('data-sound');
        playSound(sound);
    });
});

// Mapeamento de teclas do teclado para notas
const keyMap = {
    'a': 'C1', 'w': 'C#1', 's': 'D1', 'e': 'D#1', 'd': 'E1',
    'f': 'F1', 't': 'F#1', 'g': 'G1', 'y': 'G#1', 'h': 'A1',
    'u': 'A#1', 'j': 'B1', 'k': 'C2', 'o': 'C#2', 'l': 'D2',
    // Adicione mais mapeamentos conforme necessário
};

// Função para adicionar classe active
function addActiveClass(note) {
    const key = document.querySelector(`[data-sound="${note}"]`);
    if (key) key.classList.add('active');
}

// Função para remover classe active
function removeActiveClass(note) {
    const key = document.querySelector(`[data-sound="${note}"]`);
    if (key) key.classList.remove('active');
}

// Eventos do teclado
document.addEventListener('keydown', (e) => {
    const note = keyMap[e.key.toLowerCase()];
    if (note) {
        playSound(note);
        addActiveClass(note);
    }
});

document.addEventListener('keyup', (e) => {
    const note = keyMap[e.key.toLowerCase()];
    if (note) {
        removeActiveClass(note);
    }
}); 