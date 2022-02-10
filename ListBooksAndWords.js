

let bookList = [

    {
        name: "Zohar",

        translationPrinciple: {
            colon: function colonToApart(input){
                return `ח"${input} `
                },

            page : function pageTranslat(input, input_before){
                let output = input.replace('a', "א").replace('b', 'ב')
                if(/[0-9]/.test(input_before)=== true){
                    return ` ע"${output}`
                } else {
                    return `ע"${output}`//Non-profit print
                }

            }

        }

    },


    {
        name: "ZH",

        translationPrinciple: {
            colon: function colonToApart(input){
                return `ח"${input} `
                },

            page : function ColumnTranslat(input, input_before){
                let output = input.replace('a', "א").replace('b', 'ב').replace('c', 'ג').replace('d', 'ד')
                if(/[0-9]/.test(input_before)=== true){
                    return ` ט"${output}`
                } else {
                    return `ט"${output}`//Non-profit print
                }

            }

        }
    },

    
    {
        name: "JT",

        translationPrinciple: {
            colon: function colonToAcomma(input){
                return `${input}, `
            },

            page : function ColumnTranslat(input, input_before){
                let output = input.replace('a', "א").replace('b', 'ב').replace('c', 'ג').replace('d', 'ד')
                if(/[0-9]/.test(input_before)=== true){
                    return ` ט"${output}`
                } else {
                    return `ט"${output}`//Non-profit print
                }

            }

        }
    },
    

    {
        name: "BT",

        translationPrinciple: {
            colon: function colonToAcomma(input){
                return `${input}, `
            },

            page : function pageTranslat(input, input_before){
                let output = input.replace('a', "א").replace('b', 'ב')
                if(/[0-9]/.test(input_before)=== true){
                    return ` ע"${output}`
                } else {
                    return `ע"${output}`//Non-profit print
                }

            }

        }
    },

]



let replaceWord = [

    
    {En: "Zohar", He: "זוהר"},
    {En: "ZH", He: "זוהר חדש"},
    {En: "JT", He: "ירושלמי"},
    {En: "BT", He: "תלמוד בבלי"},
    {En: "Hash", He: "השמטות"},
    {En: "Heikh", He: "היכלות"},
    {En: "IR", He: "אד\"ר"},
    {En: "MhN", He: "מה\"נ"},
    {En: "Tos", He: "תוס\'"},
    {En: "SdTs", He: "סד\"צ"},
    {En: "SO", He: "סתרי אותיות"},
    {En: "ST", He: "ס\"ת"},
    {En: "Piq", He: "פיקודין"},
    {En: "RM", He: "ר\"מ"},
    {En: "RR", He: "רזא דרזין"},
    {En: "TZ", He: "ת\"ז"},
    {En: "Tiq", He: "תיקונים"},
    {En: "IZ", He: "אד\"ז"},
    
]

