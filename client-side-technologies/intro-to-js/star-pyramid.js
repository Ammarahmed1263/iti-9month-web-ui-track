let n = parseInt(prompt('Enter pyramid height: '));


for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row  += "*";
    }
    row += " <br>"
    document.write(row);
}
