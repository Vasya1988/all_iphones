const items = {
    burger: document.querySelector('[data-burger]'),
    menu: document.querySelector('.menu-list')
}

const images = [
    {
        name: 'iPhone',
        description: `Год выпуска: 2007 <br>
        Объем памяти: 4, 8, 16 ГБ <br>
        Номер модели на задней панели корпуса: A1203.`,
        info: 'Сведения: задняя панель корпуса изготовлена из анодированного алюминия. С верхней стороны имеется лоток SIM-карты для карт второго форм-фактора (2FF) Mini-SIM. Серийный номер выгравирован на задней панели корпуса',
        image: './images/iphone_images/iphone-iphone-original-colors.jpg'
    },

    {
        name: 'iPhone 3G',
        description: `Год выпуска: 2008 и 2009 (Китай континентальный) <br>
        Объем памяти: 8, 16 ГБ <br>
        Номер модели на задней панели: A1324, A1241`,
        info: 'Сведения: задняя панель корпуса изготовлена из пластмассы. Гравировка на задней панели корпуса телефона менее яркая, чем расположенный над ней логотип Apple. С верхней стороны имеется лоток SIM-карты для карт второго форм-фактора (2FF) Mini-SIM. Серийный номер напечатан на лотке SIM-карты.',
        image: './images/iphone_images/iphone-iphone3g-colors.jpg'
    },

    {
        name: 'iPhone 3GS',
        description: `Год выпуска: 2009 <br>
        Объем памяти: 8, 16, 32 ГБ <br>
        Цвета: черный и белый <br>
        Номер модели на задней панели: A1325, A1303`,
        info: 'Сведения: задняя панель корпуса изготовлена из пластмассы. Гравировка на задней панели корпуса такая же яркая и светло-серебристая, как и логотип Apple. С верхней стороны имеется лоток SIM-карты для карт второго форм-фактора (2FF) Mini-SIM. Серийный номер напечатан на лотке SIM-карты.',
        image: './images/iphone_images/iphone-iphone3gs-colors.jpg'
    },

    {
        name: 'iPhone 4',
        description: `Год выпуска: 2010 (GSM), 2011 (CDMA) <br>
        Объем памяти: 8, 16, 32 ГБ <br>
        Цвета: черный и белый <br>
        Номер модели на задней панели: A1349, A1332`,
        info: 'Сведения: передняя и задняя панели плоские и стеклянные, имеется окантовка из нержавеющей стали по краям. Кнопки регулирования громкости помечены знаками «+» и «–». С правой стороны находится лоток SIM-карты для карт третьего форм-фактора (3FF) Micro-SIM. В модели CDMA лоток SIM-карты отсутствует.',
        image: './images/iphone_images/iphone-iphone4-colors.jpg'
    },

    {
        name: 'iPhone 4s',
        description: `Год выпуска: 2011 <br>
        Объем памяти: 8, 16, 32, 64 ГБ <br>
        Цвета: черный и белый <br>
        Номер модели на задней панели: A1431, A1387`,
        info: 'Сведения: передняя и задняя панели плоские и стеклянные, имеется окантовка из нержавеющей стали по краям. Кнопки регулирования громкости помечены знаками «+» и «–». С правой стороны находится лоток SIM-карты для карт третьего форм-фактора (3FF) Micro-SIM.',
        image: './images/iphone_images/iphone-iphone4s-colors.jpg'
    },

    {
        name: 'iPhone 5',
        description: `Год выпуска: 2012 <br>
        Объем памяти: 16, 32, 64 ГБ <br>
        Цвета: черный и белый <br>
        Номер модели на задней панели: A1428, A1429, A1442`,
        info: 'Сведения: передняя панель плоская, изготовлена из стекла. Задняя панель изготовлена из анодированного алюминия. С правой стороны находится лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. На задней панели выгравирован номер IMEI.',
        image: './images/iphone_images/iphone-iphone5-colors.jpg'
    },

    {
        name: 'iPhone 5c',
        description: `Год выпуска: 2013 <br>
        Объем памяти: 8, 16, 32 ГБ <br>
        Цвета: белый, голубой, розовый, зеленый и желтый <br>
        Номер модели на задней панели: A1456, A1507, A1516, A1529, A1532`,
        info: 'Сведения: передняя панель плоская, изготовлена из стекла. Задняя панель изготовлена из твердого поликарбоната (пластик). С правой стороны находится лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. На задней панели выгравирован номер IMEI.',
        image: './images/iphone_images/iphone-iphone5c-colors.jpg'
    },

    {
        name: 'iPhone 5s',
        description: `Год выпуска: 2013 <br>
        Объем памяти: 16, 32, 64 ГБ <br>
        Цвета: «серый космос», серебристый, золотой <br>
        Номер модели на задней панели: A1453, A1457, A1518, A1528, A1530, A1533`,
        info: 'Сведения: передняя панель плоская, изготовлена из стекла. Задняя панель изготовлена из анодированного алюминия. Кнопка «Домой» оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. На задней панели выгравирован номер IMEI.',
        image: './images/iphone_images/iphone-iphone5s-colors.jpg'
    },

    {
        name: 'iPhone SE (1-го поколения)',
        description: `Год выпуска: 2016 <br>
        Объем памяти: 16, 32, 64, 128 ГБ <br>
        Цвета: «серый космос», серебристый, золотой, «розовое золото» <br>
        Номер модели на задней панели: A1723, A1662, A1724`,
        info: 'Сведения: диагональ дисплея составляет 4 дюйма. Плоская передняя панель изготовлена из стекла. Задняя панель изготовлена из анодированного алюминия с матовыми скругленными кромками и вставкой-логотипом из нержавеющей стали. Кнопка «Режим сна/Пробуждение» находится на верхней стороне устройства. Кнопка «Домой» оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. На задней панели выгравирован номер IMEI.',
        image: './images/iphone_images/iphone-se-colors.jpg'
    },

    {
        name: 'iPhone 6 Plus',
        description: `Год выпуска: 2014 <br>
        Объем памяти: 16, 64, 128 ГБ <br>
        Цвета: «серый космос», серебристый, золотой <br>
        Номер модели на задней панели: A1522, A1524, A1593`,
        info: 'Сведения: диагональ дисплея составляет 5,5 дюйма. Передняя панель стеклянная с закругленными краями. Задняя панель изготовлена из анодированного алюминия. Кнопка «Режим сна/Пробуждение» расположена с правой стороны устройства. Кнопка «Домой» оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. На задней панели выгравирован номер IMEI.',
        image: './images/iphone_images/iphone-iphone6plus-colors.jpg'
    },

    {
        name: 'iPhone 6',
        description: `Год выпуска: 2014 <br>
        Объем памяти: 16, 32, 64, 128 ГБ <br>
        Цвета: «серый космос», серебристый, золотой <br>
        Номер модели на задней панели: A1549, A1586, A1589`,
        info: 'Сведения: диагональ дисплея составляет 4,7 дюйма. Передняя панель плоская и стеклянная с закругленными краями. Задняя панель изготовлена из анодированного алюминия. Кнопка «Режим сна/Пробуждение» расположена с правой стороны устройства. Кнопка «Домой» оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. На задней панели выгравирован номер IMEI.',
        image: './images/iphone_images/iphone-iphone6-colors.jpg'
    },

    {
        name: 'iPhone 6s Plus',
        description: `Год выпуска: 2015 <br>
        Объем памяти: 16, 32, 64, 128 ГБ <br>
        Цвета: «серый космос», серебристый, золотой, «розовое золото» <br>
        Номер модели на задней панели: A1634, A1687, A1699`,
        info: 'Сведения: диагональ дисплея составляет 5,5 дюйма. Передняя панель плоская и стеклянная с закругленными краями. Задняя панель изготовлена из анодированного алюминия с лазерной гравировкой «S». Кнопка «Режим сна/Пробуждение» расположена с правой стороны устройства. Кнопка «Домой» оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-6splus-colors.jpg'
    },

    {
        name: 'iPhone 6s',
        description: `Год выпуска: 2015 <br>
        Объем памяти: 16, 32, 64, 128 ГБ <br>
        Цвета: «серый космос», серебристый, золотой, «розовое золото» <br>
        Номер модели на задней панели: A1633, A1688, A1700`,
        info: 'Сведения: диагональ дисплея составляет 4,7 дюйма. На передней панели плоское стекло со скошенными краями. Задняя панель изготовлена из анодированного алюминия с лазерной гравировкой «S». Кнопка «Режим сна/Пробуждение» расположена с правой стороны устройства. Кнопка «Домой» оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-6s-colors.jpg'
    },

    {
        name: 'iPhone 7 Plus',
        description: `Год выпуска: 2016 <br>
        Объем памяти: 32, 128, 256 ГБ <br>
        Цвета: черный, «черный оникс», золотой, «розовое золото», серебристый, (PRODUCT)RED <br>
        Номера моделей на задней крышке: A1661, A1784, A1785 (Япония)`,
        info: 'Сведения: диагональ дисплея составляет 5,5 дюйма. На передней панели плоское стекло со скошенными краями. Задняя панель изготовлена из анодированного алюминия. Кнопка «Режим сна/Пробуждение» расположена с правой стороны устройства. Сенсорная кнопка «Домой» устройства оснащена датчиком Touch ID. На задней панели находятся две 12-мегапиксельные камеры. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone7plus-colors.jpg'
    },

    {
        name: 'iPhone 7',
        description: `Год выпуска: 2016 <br>
        Объем памяти: 32, 128, 256 ГБ <br>
        Цвета: черный, «черный оникс», золотой, «розовое золото», серебристый, (PRODUCT)RED <br>
        Номера моделей на задней крышке: A1660, A1778, A1779 (Япония)`,
        info: 'Сведения: диагональ дисплея составляет 4,7 дюйма. На передней панели плоское стекло со скошенными краями. Задняя панель изготовлена из анодированного алюминия. Кнопка «Режим сна/Пробуждение» расположена с правой стороны устройства. Сенсорная кнопка «Домой» устройства оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) Nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone7-colors.jpg'
    },

    {
        name: 'iPhone 8 Plus',
        description: `Год выпуска: 2017 <br>
        Объем памяти: 64, 128, 256 ГБ <br>
        Цвета: золотой, серебристый, «серый космос», (PRODUCT)RED <br>
        Номера моделей: A1864, A1897, A1898 (Япония)`,
        info: 'Сведения: диагональ дисплея составляет 5,5 дюйма. На передней панели плоское стекло со скошенными краями. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. Сенсорная кнопка «Домой» устройства оснащена датчиком Touch ID. На задней панели находятся две 12-мегапиксельные камеры с широкоугольным объективом и телеобъективом. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-8plus-colors.jpg'
    },

    {
        name: 'iPhone 8',
        description: `Год выпуска: 2017 <br>
        Объем памяти: 64, 128, 256 ГБ <br>
        Цвета: золотой, серебристый, «серый космос», (PRODUCT)RED <br>
        Номера моделей: A1863, A1905, A1906 (Япония)`,
        info: 'Сведения: диагональ дисплея составляет 4,7 дюйма. На передней панели плоское стекло со скошенными краями. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. Сенсорная кнопка «Домой» устройства оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-8-colors.jpg'
    },

    {
        name: 'iPhone X',
        description: `Год выпуска: 2017 <br>
        Объем памяти: 64, 256 ГБ <br>
        Цвета: серебристый, «серый космос» <br>
        Номера моделей: A1865, A1901, A1902 (Япония)`,
        info: 'Сведения: устройство iPhone X оснащено полноэкранным дисплеем Super Retina с диагональю 5,8 дюйма1 . На задней панели — стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели находятся две 12-мегапиксельные камеры с широкоугольным объективом и телеобъективом. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты. ',
        image: './images/iphone_images/iphone-x-colors.jpg'
    },

    {
        name: 'iPhone XR',
        description: `Год выпуска: 2018 <br>
        Объем памяти: 64, 128, 256 ГБ <br>
        Цвета: черный, белый, синий, желтый, коралловый, (PRODUCT)RED <br>
        Номера моделей: A1984, A2105, A2106 (Япония), A2107, A2108 (Китай континентальный)`,
        info: 'Сведения: устройство iPhone XR оснащено дисплеем Liquid Retina с диагональю 6,1 дюйма1. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находится одна 12-мегапиксельная камера с широкоугольным объективом. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/identify-iphone-xr-colors.jpg'
    },

    {
        name: 'iPhone XS Max',
        description: `Год выпуска: 2018 <br>
        Объем памяти: 64, 256, 512 ГБ <br>
        Цвета: серебристый, «серый космос» и золотой <br>
        Номера моделей: A1921, A2101, A2102 (Япония), A2103, A2104 (Китай континентальный)`,
        info: 'Сведения: устройство iPhone XS Max оснащено полноэкранным дисплеем Super Retina с диагональю 6,5 дюйма1 . На задней панели — стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели находятся две 12-мегапиксельные камеры с широкоугольным объективом и телеобъективом. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM3. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-xs-max-colors.jpg'
    },

    {
        name: 'iPhone XS',
        description: `Год выпуска: 2018 <br>
        Объем памяти: 64, 256, 512 ГБ <br>
        Цвета: серебристый, «серый космос» и золотой <br>
        Номера моделей: A1920, A2097, A2098 (Япония), A2099, A2100 (Китай континентальный)`,
        info: 'Сведения: устройство iPhone XS оснащено полноэкранным дисплеем Super Retina с диагональю 5,8 дюйма1 . На задней панели — стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели находятся две 12-мегапиксельные камеры с широкоугольным объективом и телеобъективом. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-xs-colors.jpg'
    },
    
    {
        name: 'iPhone 11',
        description: `Год выпуска: 2019 <br>
        Объем памяти: 64, 256, 512 ГБ <br>
        Цвета: фиолетовый, зеленый, желтый, черный, белый, (PRODUCT)RED <br>
        Номера моделей: A2111 (Канада, США), A2223 (Китай континентальный, Гонконг, Макао), A2221 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 11 оснащено дисплеем Liquid Retina с диагональю 6,1 дюйма1. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся две 12-мегапиксельные камеры: сверхширокоугольная и широкоугольная. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/identify-iphone-11-colors.jpg'
    },

    {
        name: 'iPhone 11 Pro Max',
        description: `Год выпуска: 2019 <br>
        Объем памяти: 64, 256, 512 ГБ <br>
        Цвета: серебристый, «серый космос», золотой, темно-зеленый <br>
        Номера моделей: A2161 (Канада, США), A2220 (Китай континентальный, Гонконг, Макао), A2218 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 11 Pro Max оснащено полноэкранным дисплеем Super Retina XDR с диагональю 6,5 дюйма1. На задней панели — текстурированное матовое стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся три 12-мегапиксельные камеры: сверхширокоугольная, широкоугольная и с телеобъективом. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/identify-iphone-11pro-max.jpg'
    },

    {
        name: 'iPhone 11 Pro',
        description: `Год выпуска: 2019 <br>
        Объем памяти: 64, 256, 512 ГБ <br>
        Цвета: серебристый, «серый космос», золотой, темно-зеленый <br>
        Номера моделей: A2160 (Канада, США), A2217 (Китай континентальный, Гонконг, Макао), A2215 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 11 Pro оснащено полноэкранным дисплеем Super Retina XDR с диагональю 5,8 дюйма1. На задней панели — текстурированное матовое стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся три 12-мегапиксельные камеры: сверхширокоугольная, широкоугольная и с телеобъективом. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/identify-iphone-11pro.jpg'
    },

    {
        name: 'iPhone SE (2-го поколения)',
        description: `Год выпуска: 2020 <br>
        Объем памяти: 64, 128, 256 ГБ <br>
        Цвета: белый, черный, (PRODUCT)RED <br>
        Номера моделей: A2275 (Канада, США), A2298 (Китай континентальный), A2296 (другие страны и регионы)`,
        info: 'Сведения: диагональ дисплея составляет 4,7 дюйма. На передней панели плоское стекло со скошенными краями. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. Сенсорная кнопка «Домой» устройства оснащена датчиком Touch ID. На задней панели корпуса находится светодиодная вспышка Quad-LED True Tone, а с правой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone-se-2nd-gen-colors.jpg'
    },

    {
        name: 'iPhone 12 mini',
        description: `Год выпуска: 2020 <br>
        Объем памяти: 64, 128, 256 ГБ <br>
        Цвета: черный, белый, (PRODUCT)RED, зеленый, синий <br>
        Номера моделей: A2176 (США), A2398 (Канада, Япония), A2400 (Китай континентальный), A2399 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 12 mini оснащено дисплеем Liquid Retina с диагональю 5,4 дюйма1. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся две 12-мегапиксельные камеры: сверхширокоугольная и широкоугольная. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с левой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone12-mini-colors.jpg'
    },

    {
        name: 'iPhone 12',
        description: `Год выпуска: 2020 <br>
        Объем памяти: 64, 128, 256 ГБ <br>
        Цвета: черный, белый, (PRODUCT)RED, зеленый, синий<br>
        Номера моделей: A2172 (США), A2402 (Канада, Япония), A2404 (Китай континентальный, Гонконг, Макао), A2403 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 12 оснащено дисплеем Liquid Retina с диагональю 6,1 дюйма1. На задней панели — стекло, а вокруг рамки — полоса из анодированного алюминия. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся две 12-мегапиксельные камеры: сверхширокоугольная и широкоугольная. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с левой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone12-colors.jpg'
    },

    {
        name: 'iPhone 12 Pro',
        description: `Год выпуска: 2020 <br>
        Объем памяти: 128, 256, 512 ГБ <br>
        Цвета: серебристый, графитовый, золотой, «тихоокеанский синий» <br>
        Номера моделей: A2341 (США), A2406 (Канада, Япония), A2408 (Китай континентальный, Гонконг, Макао), A2407 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 12 Pro оснащено полноэкранным дисплеем Super Retina XDR с диагональю 6,1 дюйма1. На задней панели — текстурированное матовое стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся три 12-мегапиксельные камеры: сверхширокоугольная, широкоугольная и с телеобъективом. Также на задней панели корпуса расположен сканер LiDAR. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с левой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone12-pro-colors.jpg'
    },

    {
        name: 'iPhone 12 Pro Max',
        description: `Год выпуска: 2020 <br>
        Объем памяти: 128, 256, 512 ГБ <br>
        Цвета: серебристый, графитовый, золотой, «тихоокеанский синий» <br>
        Номера моделей: A2342 (США), A2410 (Канада, Япония), A2412 (Китай континентальный, Гонконг, Макао), A2411 (другие страны и регионы)`,
        info: 'Сведения: устройство iPhone 12 Pro Max оснащено полноэкранным дисплеем Super Retina XDR с диагональю 6,7 дюйма1. На задней панели — текстурированное матовое стекло, а вокруг рамки — полоса из нержавеющей стали. Боковая кнопка расположена с правой стороны устройства. На задней панели корпуса находятся три 12-мегапиксельные камеры: сверхширокоугольная, широкоугольная и с телеобъективом. Также на задней панели корпуса расположен сканер LiDAR. На задней панели корпуса находится светодиодная вспышка Dual-LED True Tone, а с левой стороны — лоток SIM-карты для карт четвертого форм-фактора (4FF) nano-SIM. Номер IMEI выгравирован на лотке SIM-карты.',
        image: './images/iphone_images/iphone12-pro-max-colors.jpg'
    }
]

let markupPhoneCard = document.querySelector('.phone-card');

console.log(items.menu);

items.burger.addEventListener('click', (event)=> {
    event.preventDefault();

    if (items.menu.className === 'menu-list') {
        items.menu.classList.add('menu-active');
        event.target.src = '/images/burger-icon_open.svg';
        console.log('Work')
        console.log(items.menu);
        
    } else {
        items.menu.classList.remove('menu-active');
        event.target.src = '/images/burger-icon.svg';
    }
});

items.menu.querySelectorAll('span').forEach((e) => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.innerText);
        images.forEach((e) => {

            if (e.name === event.target.innerText) {
                const markup = `<div>
                        <img class="phone-card__img" src=${e.image} alt="">
                    </div>

                    <div class="phone-card__info">
                        <h1>Iphone</h1>
                        <p class="description">${e.description}<br>
                            Объем памяти: 4, 8, 16 ГБ <br>
                            Номер модели на задней панели корпуса: A1203.
                        </p>

                        <p class="info">${e.info}</p>
                    </div>`;
                markupPhoneCard.innerText = '';

                console.log(document.querySelector('.phone-card'))
                document.querySelector('.phone-card').insertAdjacentHTML('afterbegin', markup);
                items.menu.classList.remove('menu-active');
            }
        })
    })
})