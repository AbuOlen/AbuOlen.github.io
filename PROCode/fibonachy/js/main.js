let fib1 = 0;
let fib2 = 1;
let iter = 0;

function fibonachi (prev, prev_prev) {
    let current_f = prev + prev_prev;
    iter++;
    if (current_f >= 9991999) {
        return prev;
    } else {
        return fibonachi (current_f, prev);
    }
}

document.getElementById("number_f").innerHTML = "Число Фібоначі:  "  + fibonachi(fib2, fib1);

document.getElementById("iter").innerHTML  = " Кількість ітерацій: " + iter;