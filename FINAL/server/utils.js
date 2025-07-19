import Empty from './Empty.js';

export function random(...args) {
    if (args.length === 0) {
        return Math.random();
    } else if (args.length === 1 && Array.isArray(args[0])) {
        return args[0][Math.floor(Math.random() * args[0].length)];
    } else if (args.length === 1 && typeof args[0] === 'number') {
        return Math.floor(Math.random() * args[0]);
    } else if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
        return Math.floor(Math.random() * (args[1] - args[0] + 1)) + args[0]; // FIX: + args[0] statt - args[0]
    } else {
        console.log(args);
        throw new Error('Invalid arguments');
    }
}

export function int(value) {
    if (Array.isArray(value)) {
        return value.map(int);
    } else {
        return Math.floor(value);
    }
}

export function updateCreaturePosition(creature, newPos, matrix) {
    if (matrix[creature.row][creature.col] !== creature) {
        let creatureType = creature.constructor.name;
        let message = `Ein ${creatureType}-Kreatur soll bewegt werden, befindet sich aber nicht mehr in der Matrix.
Das liegt wahrscheinlich daran, dass sie zuvor "gestorben" ist und die Position bereits
von einer anderen Kreatur eingenommen wurde. Nachdem eine Kreatur "stirbt", sollte sie
sich nicht mehr bewegen. Wahrscheinlich hast du die Logik fürs Sterben vor der Logik fürs
Fressen/Bewegen in der step()-Methode. Versuche, die Logik fürs Sterben ganz ans Ende der
step()-Methode zu verschieben oder verwende ein return, um die Methode nach dem Sterben zu beenden.`;
        throw new Error(message);
    }

    let [newRow, newCol] = newPos;
    matrix[newRow][newCol] = creature;
    matrix[creature.row][creature.col] = new Empty();
    creature.row = newRow;
    creature.col = newCol;
}
