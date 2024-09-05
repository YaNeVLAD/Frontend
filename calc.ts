function calc(inputString: string): number {
    const supportedOperators = ['+', '-', '*', '/']

    const tokens: RegExpMatchArray | null = inputString.match(/[-\d]+|[-+*/()]|[^()\s]+/g);

    let index: number = 0;

    return handleToken();

    function handleToken(): number {
        if (tokens == null) {
            throw new Error("Передана пустая строка");
        }

        const token = tokens[index++];

        if (token == undefined) {
            throw new Error("Некорректное выражение");
        }

        //handleNumber
        if (!isNaN(Number(token))) {
            return Number(token);
        }

        //handleOperator
        if (supportedOperators.indexOf(token) != -1) {
            const left: number = handleToken();
            const right: number = handleToken();

            switch (token) {
                case "+":
                    return left + right;
                case "-":
                    return left - right;
                case "*":
                    return left * right;
                case "/":
                    if (right === 0) {
                        throw new Error("Деление на ноль");
                    }
                    return left / right;
            }
        }

        //handleBrackets
        if (token === "(") {
            const value = handleToken(); // Рекурсивно вычисляем выражение в скобках
            if (tokens[index++] !== ")") {
                throw new Error("Ожидалась закрывающая скобка");
            }
            return value;
        }

        throw new Error('Неизвестный токен: '.concat(token));
    }
}

try {
    console.log(calc("+ 3 5")); // 8
    console.log(calc("* + 1 2 3")); // (1 + 2) * 3 = 9
    console.log(calc("+ 4 * 2 3")); // 4 + (2 * 3) = 10
    console.log(calc("+ 3 ( * 2 3 )")); // 3 + (2 * 3) = 9
    console.log(calc("- 10 / 20 2")); // 10 - (20 / 2) = 0
    console.log(calc('- 3 ( * 4 ( + 1 2 ) )')); // 3 - (4 * (1 + 2)) = 3 - (4 * 3) = 3 - 12 = -9
    // console.log(calc('* ( / ( + 2 2 ) ( -6 4 ) ) 7'));
    console.log(calc('-5'));
} catch (e) {
    console.log(e.message);
}