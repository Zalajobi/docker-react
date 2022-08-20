ArrayString =  ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"]

console.log(rebuildString(ArrayString))


function rebuildString(arr) {
    let stringBuilder = ''
    for(let i = 0; i < arr.length; i++) {
        stringBuilder = stringBuilder + ` ${arr[i].replaceAll('$', '')}`
    }

    return stringBuilder
}