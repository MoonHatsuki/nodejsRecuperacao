class ServiceRecuperacao {
    conversor(fah, cel) {
        return fah = (9 * cel + 160) / 5;
    }
    VerificaTriangulos(a, b, c) {
        if (!a || !b || !c) {
            return "Não é um triangulo"
        }
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            return 'Nao é um triangulo'
        } else if ((a == b) || (a == c)) {
            return 'Equilatero'
        } else if ((a == b) || (a == c) || (b == c)) {
            return 'Isósceles'
        } else {
            return 'Escaleno'
        }
    }
    VerificaCusto(fab, imp, dis, custo) {
        imp = (fab * 0, 45)
        dis = (fab * 0, 28)
        return custo = (fab + imp + dis)
    }
    Tabuada(num) {
        for (i = 0; i < 11; i++) {
            num * i
            return num

        }
    }
    Imposto(dep, salMin, desc, renda) {
        desc = (dep * (renda * 5)) / 100;
        salMin = 1412
        if (renda <= 2 * salMin) {
            return 'Isento'
        } else if (renda > 2 * salMin && renda <= 3 * salMin) {
            return 'Aliquota de 5%, valor de imposto: ' + (renda * 5) / 100;
        } else if (renda > 3 * salMin && renda <= 5 * salMin) {
            return 'Aliquota de 10%, valor de imposto: ' + (renda * 10) / 100;
        } else if (renda > 5 * salMin && renda <= 7 * salMin) {
            return 'Aliquota de 15%, valor de imposto: ' + (renda * 15) / 100;
        } else if (renda > 7 * salMin) {
            return 'Aliquota de 20%, valor de imposto: ' + (renda * 20) / 100;
        }
    }

}

module.exports = new ServiceRecuperacao() 