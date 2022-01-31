const dicionario = [['a', 'b', 'c'],['d', 'e', 'f'], ['g', 'h', 'i'],
                    ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'],
                    ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];

const traducao = async (req, res) => {
    const {codigo, shift} = req.body;
    const arrayNumbers = codigo.split('');
    const pos = arrayNumbers.length - 1;

    if(!codigo || arrayNumbers.length === 0 || arrayNumbers[0] === "1") return res.status(400).json("Código inválido");

    if(arrayNumbers.length > 1) {
        for(let i =0; i < pos; i++) {
            if(arrayNumbers[i] !== arrayNumbers[i+1]) {
                return res.status(400).json("Código inválido");
            }
        }
    }

    if(arrayNumbers[0] === "0") {
        let espacos = '';
        for(zero of arrayNumbers) {
            espacos += " ";
        }
        return res.status(200).json(espacos);
    }

    if(dicionario[parseInt(arrayNumbers[0]) - 2].length < pos + 1) return res.status(400).json("Código inválido");
    const resposta = dicionario[parseInt(arrayNumbers[0]) - 2][pos];
    return res.status(200).json(shift ? resposta.toLocaleUpperCase() : resposta);

}

module.exports = {traducao};