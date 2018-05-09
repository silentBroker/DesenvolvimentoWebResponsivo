function reverseString(n) {
    var name = "";
    var i = n.length - 1;
    while (i > -1) {
        name += n[i--];
    }
    return name;
}