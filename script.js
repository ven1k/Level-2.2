function textParsing(nameCSV) {

    let modText = nameCSV.split("\n");
    modText = modText.filter(a => {
        if (a !== '') return /^[^#]*$/.test(a);
    });
    modText = modText.map(a => {
      a = a.split(",");
        return  {
        x: a[0],
        y: a[1],
        city: a[2],
        count: a[3] - 0 // converting a string to a number. (crutch)
      }
    })
    modText = modText.sort( (a,b) => a.count > b.count ? -1 : 1).slice(0,10);
    modText = modText.reduce((topCity, current, index) => {
            topCity[current.city] = {
                population: current.count,
                rating: ++index
            }
            return topCity;
        }, {});

    return (text) => {

        Object.keys(modText).forEach(function(key) {
                if(text.toLowerCase().indexOf(key.toLowerCase()) > -1) {
                    let curretText = key + " " + modText[key].rating +
                        " место в ТОП-10 самых крупных городов Украины население " + modText[key].population + " человек";
                    console.log(text.replace(key, curretText));
                    return  text.replace(key, curretText);
                }
            });
    }
}


let csv = textParsing(`44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква, 200131,
49.54,28.49,Бердичів,87575,#коммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,
47.53,35.23,Запоріжжя,815256,
45.11,33.28,Євпаторія,105915,
48.56,24.53,Івано-Франківськ,218359,
48.43,26.45,Камянець-Подільський,99610,
#45.20,36.38,Керч,157007,,,,,
50.27,30.30,Київ,2611327,
48.31,32.21,Кропивницький,254103,
49.07,33.35,Кременчук,234073,
47.54,33.33,Кривий Ріг,668980,
48.36,39.22,Луганськ,463097,
50.49,25.26,Луцьк,208816,
49.53,24.16,Львів,732818,
47.07,37.40,Маріуполь,492176,
46.53,35.25,Мелітополь,160657,,,,,
46.58,32.12,Миколаїв,514136,
48.26,22.45,Мукачеве,82346,
47.37,34.30,Нікополь,136280,
46.29,30.44,Одеса,1029049,
48.33,35.57,Павлоград,118816,
49.37,34.37,Полтава,317998,
50.39,26.26,Рівне,248813,
49.33,23.23,Самбір,36556,
44.29,33.43,Севастополь,342 451,
44.55,34.13,Сімферополь,343 644,
50.58,34.52,Суми,293141,
49.37,25.47,Тернопіль,227755,,,,,
48.40,22.30,Ужгород,117317,
50.05,30.03,Фастів,51976,
45.02,35.31,Феодосія,74669,
50.02,36.14,Харків,1470902,
46.40,32.42,Херсон,328360,
49.26,27.06,Хмельницький,253994,
48.11,23.40,Хуст,29080,
49.27,32.03,Черкаси,295414,
51.29,31.22,Чернігів,304994,
48.16,26.07,Чернівці,240621,
#44.26,34.19,Ялта,81654,`);

csv(" ghbdtn p adjkghjsdahgjklasdh kgbasdhklgbhksdagjkasdhjklghasdjklghasdkg Хуст");
csv(" ghbdtn p adjkghjsdahgjklasdh kgbasdhklgbhksdagjkasdhjklghasdjklghasdkg Київ");
csv(" ghbdtn p adjkghjsdahgjklasdh kgbasdhklgbhksdagjkasdhjklghasdjklghasdkg Вінниця");