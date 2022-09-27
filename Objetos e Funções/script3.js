function reverte(str) {
    let rev = str.split('').reverse().join('');

    if (str === rev) {
        return true
    }else{
        return false
    }
}

console.log(reverte('arara'))
