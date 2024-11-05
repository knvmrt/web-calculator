let display = document.getElementById('display') as HTMLInputElement | null;

function clearDisplay() {
    if (display) {
        display.value = '';
    }
}

function deleteLast() {
    if (display) {
        display.value = display.value.slice(0, -1);
    }
}

function appendNumber(number: string) {
    if (display) {
        display.value += number;
    }
}

function appendOperator(operator: string) {
    if (display) {
        display.value += operator;
    }
}

function appendDot() {
    if (display && !display.value.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    if (display && display.value.includes('%')) {
        let displayValue = display.value;
        let parts = displayValue.split('%');
        let base = parseFloat(parts[0]);
        let percentage = parseFloat(parts[1]);

        if (!isNaN(base) && !isNaN(percentage)) {
            display.value = (base * (percentage / 100)).toString();
            return;
        }
    }

    try {
        if (display) {
            display.value = eval(display.value);
        }
    } catch {
        if (display) {
            display.value = 'Error';
        }
    }
}
