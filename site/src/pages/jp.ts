interface Hiragana {
    gana: string
    rome: string
}

type HiraganaView = Hiragana | {}

const hiragana_listo: HiraganaView[][] = [
    [
        // あ　い　う　え　お
        { gana: "あ", rome: "a" },
        { gana: "い", rome: "i" },
        { gana: "う", rome: "u" },
        { gana: "え", rome: "e" },
        { gana: "お", rome: "o" },
    ],
    [
        // か　き　く　け　こ
        { gana: "か", rome: "ka" },
        { gana: "き", rome: "ki" },
        { gana: "く", rome: "ku" },
        { gana: "け", rome: "ke" },
        { gana: "こ", rome: "ko" },],
    [
        // さ　し　す　せ　そ
        { gana: "さ", rome: "sa" },
        { gana: "し", rome: "si/shi" },
        { gana: "す", rome: "su" },
        { gana: "せ", rome: "se" },
        { gana: "そ", rome: "so" },
    ],
    [
        // た　ち　つ　て　と
        { gana: "た", rome: "ta" },
        { gana: "ち", rome: "ti/qi/chi" },
        { gana: "つ", rome: "tu/tsu" },
        { gana: "て", rome: "te" },
        { gana: "と", rome: "to" },
    ],
    [
        // な　に　ぬ　ね　の
        { gana: "な", rome: "na" },
        { gana: "に", rome: "ni" },
        { gana: "ぬ", rome: "nu" },
        { gana: "ね", rome: "ne" },
        { gana: "の", rome: "no" },
    ],
    [
        // は　ひ　ふ　へ　ほ
        { gana: "は", rome: "ha" },
        { gana: "ひ", rome: "hi" },
        { gana: "ふ", rome: "hu/fu" },
        { gana: "へ", rome: "he" },
        { gana: "ほ", rome: "ho" },
    ],
    [
        // ま　み　む　め　も
        { gana: "ま", rome: "ma" },
        { gana: "み", rome: "mi" },
        { gana: "む", rome: "mu" },
        { gana: "め", rome: "me" },
        { gana: "も", rome: "mo" },
    ],
    [
        // や　　　ゆ　　　よ
        { gana: "や", rome: "ya" },
        {},
        { gana: "ゆ", rome: "yu" },
        {},
        { gana: "よ", rome: "yo" },
    ],
    [
        // ら　り　る　れ　ろ
        { gana: "ら", rome: "ra" },
        { gana: "り", rome: "ri" },
        { gana: "る", rome: "ru" },
        { gana: "れ", rome: "re" },
        { gana: "ろ", rome: "ro" },
    ],
    [
        // わ　　　　　　　を
        { gana: "わ", rome: "wa" },
        {}, {}, {},
        { gana: "を", rome: "wo/o" },
    ],
    [
        { gana: "ん", rome: "nn" },
    ]
];

export async function* JP() {
    yield `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
    <div>Hiragana ちしき知識</div>
    `;

    yield `<table class="table">`
    for (let hiragana of hiragana_listo) {
        yield* hiraganaBlock(hiragana);
    }
    yield `</table>`
}

type HTML = string;

interface Componenet {
    (): HTML
}

function* hiraganaBlock(h: HiraganaView[]) {
    yield `<tr>`
    for(let gana of h) {
        yield `<th>${row(gana)}</th>`
    }
    yield `</tr>`;
}

function row(gana: HiraganaView): HTML {
    if("gana" in gana) {
        return `<button class="button">${gana.gana} ${gana.rome}</button>`;
    } else {
        return `<div></div>`
    }   
}
