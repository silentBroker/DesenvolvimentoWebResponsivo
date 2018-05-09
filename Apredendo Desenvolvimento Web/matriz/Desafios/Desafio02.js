function isPalindrome(n) {
    var name = "";
    var i = n.length - 1;
    while (i > -1) {
        name += n[i--];
    }
    if (name == n) {
        return ("É Palindromo")
    }
    else {
        return("Não é Palindromo")
    }
}
