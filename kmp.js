const failure_preprocess = str => {
    let failure = [-1]
    let j = 0

    for (let i = 1; i < str.length; i++) {
        while (j > 0 && str[i] !== str[j]) {
            j = failure[j - 1]
        }

        if (str[i] === str[j]) {
            failure[i] = j
            j = j + 1
        } else {
            failure[i] = -1
        }
    }

    return failure
}

const kmp = (str, search) => {
    let failure = failure_preprocess(search)
    let i = 0
    let j = -1

    for (; i < str.length; i++) {
        while (j >= 0 && str[i] !== search[j + 1]) {
            j = failure[j - 1]
        }

        if (str[i] === search[j + 1]) {
            j = j + 1
        }

        if (j === search.length - 1) {
            break
        }
    }

    return j == search.length - 1 ? i - j : -1
}

module.exports = kmp
