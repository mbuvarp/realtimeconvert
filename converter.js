/*
    Converter lambdas
    First level is what is what it is converting from
    Second level is what it is converting to
*/
const converters = {
// Distance
    km: {
        mi: x => x * 0.62137
    },
    mi: {
        km: x => x / 0.62137
    },
    m: {
        feet: x => x * 3.2808
    },
    feet: {
        m: x => x / 3.2808
    },
    cm: {
        in: x => x / 0.39370
    },
    in: {
        cm: x => x * 0.39370
    }
}

function convert(value, from, to) {
    return converters[from][to](value)
}