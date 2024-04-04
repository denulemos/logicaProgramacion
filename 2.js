/*
    Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés), por ejemplo Bob, Pop, etc... No tener en cuenta espacios ni simbolos.

    Input: "otto"
    Output: true
    Posee dos soluciones. Una validada con metodos de JS y otro con manejos de datos.

    Pueden venir strings con todo tipo de caracteres y espacios. Un caso de uso quedo sin funcionar, a corregir.
*/

const isPalindromo = (word) => {

    const inverted = word
    // Separamos cada letra de la palabra en un Array
    .split('')
    // Volteamos el array
    .reverse()
    // Unimos el array en un texto de nuevo
    .join('')

    const checkIfIsPalindromo = inverted === word;

    return checkIfIsPalindromo;
}

const isPalindromoDataStructure = (word) => {

    let result = 0, wordSize = word.length, final = wordSize - 1;

    while (result <= wordSize) {
        // ignoramos a los caracteres especiales
        while (result<final && !isLetter(word[result])) {
            result++;
        }
        while (result<final && !isLetter(word[final])) {
            final--;
        }

        console.log(word[final], word[result]);
        // lo pasamos a mayuscula ya que debemos soportar a todos los caracteres tanto min como mayus
        if (word.toUpperCase()[result] !== word.toUpperCase()[final]) {
            // Si ya no coinciden los caracteres, la palabra no es palindromo
            return false;
        }


        result++;
        final--;
    }

    return true;
}

const isLetter = (char) => {
    return char.match(/^[0-9a-zA-Z]+$/);
}

module.exports = { isPalindromo, isPalindromoDataStructure };
