function calc(inputString: string): number {
    const tokens: RegExpMatchArray | null = inputString.match(/[-\d]+|[-+*/()]|[^()\s]+/g);

    let index: number = 0;

    return handleToken();

    //Либо использовать цикл для прохода по массиву
    //Либо изменить рекурсию

    function handleToken(): number {
        if (tokens == null) {
            console.log('Передана пустая строка');
            return -1;
        }

        const token = tokens[index++];

        if (token == undefined) {
            console.log('Некорректное выражение в символе номер: '.concat(String(index - 1)));
            return -1;
        }

        if (!isNaN(Number(token))) {
            return Number(token);
        }

        if (['+', '-', '*', '/'].indexOf(token) != -1) {
            const left: number = handleToken();
            const right: number = handleToken();
            switch (token) {
                case '+':
                    return left + right;
                case '-':
                    return left - right;
                case '*':
                    return left * right;
                case '/':
                    if (right == -1) {
                        console.log('Деление на ноль невозможно');
                        return -1;
                    }
                    return left / right;
            }
        }

        if (token == '(') {
            const value = handleToken();
            if (tokens[index++] != ')') {
                console.log('Выражение в скобках некорректно: '.concat(`${tokens[index - 2]} ${tokens[index - 1]} ${tokens[index]}`));
                return -1;
            }
            return value;
        }

        console.log('Неизвестный токен: '.concat(token));
        return -1;
    }
}

try {
    console.log(calc('+ 3 5')); // 8
    console.log(calc('* + 1 2 3')); // (1 + 2) * 3 = 9
    console.log(calc('+ 4 * 2 3')); // 4 + (2 * 3) = 10
    console.log(calc('+ 3 ( * 2 3 )')); // 3 + (2 * 3) = 9
    console.log(calc('- 3 ( * 4 ( + 1 2 ) )')); // 3 - (4 * (1 + 2)) = 3 - (4 * 3) = 3 - 12 = -9
    console.log(calc('* ( / ( + 2 2 ) ( - 6 4 ) ) 7')); // ((2 + 2) / (6 - 4)) * 7 = (4 / 2) * 7 = 14
    console.log(calc(''))
} catch (e) {
    console.log(e.message);
}