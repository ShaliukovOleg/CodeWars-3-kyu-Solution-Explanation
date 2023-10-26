// Solution / Решение

class Primes {
    static * stream() {
        const primes = [2];
        yield 2; // Первое простое число

        function isPrime(num) {
            for (const prime of primes) {
                if (prime * prime > num) break;
                if (num % prime === 0) return false;
            }
            return true;
        }

        let num = 3;
        while (true) {
            if (isPrime(num)) {
                primes.push(num);
                yield num;
            }
            num += 2;
        }
    }
}

// Solution 2 / Решение 2

const limit = 15495863; // Верхний предел для поиска простых чисел
const sieve = [0, 0].concat(new Array(limit - 2).fill(1)); // Создаем массив с длиной, равной "limit", заполняем его единицами и добавляем два нуля в начало.
const sl = sieve.length; // Получаем длину массива "sieve".
const already_set = []; // Создаем пустой массив "already_set" для отслеживания простых чисел, которые уже были обработаны.
class Primes { // Создаем класс "Primes", который будет генерировать простые числа.
    static *stream() {
        // Итерируемся по массиву "sieve".
        for (let i = 0; i < sl; i++) {
            if (sieve[i]) {
                yield i; // Если текущий элемент "sieve" равен 1 (то есть, не помечен как составное число), то добавляем его в генератор.
                if (!already_set[i]) { // Если это число еще не было отмечено, то отмечаем его и все его кратные числа как составные.
                    already_set[i] = 1;

                    for (let k = i * i; k < limit; k += i) { // Помечаем как составные все числа, которые делятся на i без остатка (кратные числа).
                        sieve[k] = 0;
                    }
                }
            }
        }
    }
}

// Tests

/*

Create an endless stream that yields prime numbers. 
The stream must be able to produce a million primes in a few seconds.
If this is too easy, try Prime Streaming (NC-17).

*/

/*

Создать бесконечный поток, который выдает простые числа. 
Поток должен быть способен выдавать миллион простых чисел за несколько секунд.
Если это слишком просто, попробуйте создать Prime Streaming (NC-17).

*/