function Multiplier (nombre1, nombre2) {
    return nombre1 * nombre2
}

function Diviser (nombre1, nombre2){
    if (nombre1 === 0 || nombre2 === 0)
        return  NaN
    else
        return nombre1/nombre2
}

function SommeDesElementsDuTableau(tableau){
    if (tableau === undefined || tableau ===null)
        return NaN
    else if (tableau.length === 0)
        return 0
    else {
        let somme = 0;
        for (let i = 0; i < tableau.length; i++) {
            somme += tableau[i]
        }
        return somme
    }
}

function ListeElementsMultiplesDe2(tableau){
    let list = []
    if (tableau === undefined || tableau ===null)
        return NaN
    else {
        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] % 2 === 0) {
                list.push(tableau[i])
            }
        }
        return list
    }
}

module.exports = {
    Multiplier, Diviser, SommeDesElementsDuTableau, ListeElementsMultiplesDe2
}
