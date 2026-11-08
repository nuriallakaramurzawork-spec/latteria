const WA = "77009931349";

/* ── ФОТО И ВИДЕО ──────────────────────────────────────────
   Ключ = название блюда на русском, как в MENU ниже. */
const MEDIA = {
  // "Сырники классические": "photos/syrniki.jpg",
  // "Шакшука": "video/shakshuka.mp4",
};
/* Видео/фото для блока «Как это выглядит» */
const REELS = [
  // "video/reel-1.mp4", "photos/interior.jpg",
];
/* Час закрытия, например 21 — тогда шапка покажет «Сейчас открыто» */
const CLOSE_HOUR = null;

/* ── ТЕКСТЫ САЙТА: ru / kk / en ── */
const I18N = {
 title:{ru:"Latteria & Bakery — Alma Villa",kk:"Latteria & Bakery — Alma Villa",en:"Latteria & Bakery — Alma Villa"},
 logo_sub:{ru:"ЖК Alma Villa · Ерменсай",kk:"Alma Villa ТК · Ерменсай",en:"Alma Villa · Ermensai"},
 nav_menu:{ru:"Меню",kk:"Мәзір",en:"Menu"},
 nav_home:{ru:"С собой",kk:"Өзіңізбен",en:"Takeaway"},
 nav_reviews:{ru:"Отзывы",kk:"Пікірлер",en:"Reviews"},
 nav_contacts:{ru:"Как добраться",kk:"Қалай жетуге болады",en:"Directions"},
 opens:{ru:"Открываемся в 08:00",kk:"08:00-де ашыламыз",en:"Opens at 08:00"},
 open_now:{ru:"Сейчас открыто",kk:"Қазір ашық",en:"Open now"},
 hero_sub:{ru:"Хлеб, кофе и завтраки у самых гор",kk:"Тау етегіндегі нан, кофе және таңғы ас",en:"Bread, coffee and breakfast at the foot of the mountains"},
 hero_lead:{ru:"Пекарня-кофейня в ЖК Alma Villa. Каждый день — свежий хлеб и выпечка, кухня с завтраков до ужина, а из окон видно горы.",
   kk:"Alma Villa тұрғын үй кешеніндегі наубайхана-кофехана. Күн сайын жаңа піскен нан мен тоқаштар, таңғы астан кешкі асқа дейін ас мәзірі, ал терезеден тау көрінеді.",
   en:"A bakery and coffee shop in the Alma Villa residence. Fresh bread and pastries every day, a kitchen open from breakfast to dinner, and mountain views from the windows."},
 btn_menu:{ru:"Смотреть меню",kk:"Мәзірді көру",en:"See the menu"},
 btn_wa:{ru:"Написать в WhatsApp",kk:"WhatsApp-қа жазу",en:"Message on WhatsApp"},
 f1b:{ru:"4.8 в 2ГИС",kk:"2ГИС-те 4.8",en:"4.8 on 2GIS"},
 f1s:{ru:"70 оценок от соседей и гостей",kk:"Көршілер мен қонақтардан 70 баға",en:"70 ratings from neighbours and guests"},
 f2b:{ru:"Можно с собакой",kk:"Итпен кіруге болады",en:"Dogs welcome"},
 f2s:{ru:"Pet-friendly зал",kk:"Үй жануарларына ыңғайлы зал",en:"Pet-friendly space"},
 f3b:{ru:"Цены и КБЖУ",kk:"Бағалар мен калориялар",en:"Prices and nutrition"},
 f3s:{ru:"У каждого блюда — калории и БЖУ",kk:"Әр тағамның калориясы, ақуызы, майы мен көмірсуы",en:"Calories and macros for every dish"},
 f4b:{ru:"Остановка «Дачи»",kk:"«Дачи» аялдамасы",en:"“Dachi” bus stop"},
 f4s:{ru:"1 минута пешком, рядом 2 парковки",kk:"Жаяу 1 минут, жанында 2 тұрақ",en:"1 minute on foot, 2 car parks nearby"},
 promo_t:{ru:"−10% на кофе",kk:"Кофеге −10%",en:"−10% on coffee"},
 promo_p:{ru:'Скажите кодовое слово <span class="code">2ГИС</span> на кассе. Акция до 28 февраля 2027.',
   kk:'Кассада <span class="code">2ГИС</span> кодтық сөзін айтыңыз. Акция 2027 жылғы 28 ақпанға дейін.',
   en:'Say the code word <span class="code">2GIS</span> at the till. Valid until 28 February 2027.'},
 why_h:{ru:"Почему сюда заходят каждый день",kk:"Мұнда неге күн сайын келеді",en:"Why people come back every day"},
 why_lead:{ru:"Так гости сами пишут в отзывах — мы просто собрали главное.",kk:"Мұны қонақтардың өздері пікірлерде жазады — біз тек ең бастысын жинадық.",en:"That's what guests say in their reviews — we just pulled out the highlights."},
 w1h:{ru:"Хлеб из своей пекарни",kk:"Өз наубайханамыздың наны",en:"Bread from our own bakery"},
 w1p:{ru:"Багеты, ржаной с сухофруктами, хлеб с семенами — гости берут его к ужину каждый вечер.",kk:"Багеттер, кептірілген жемісті қара нан, дәнді нан — қонақтар оны күн сайын кешкі асқа алып кетеді.",en:"Baguettes, rye with dried fruit, seeded loaves — guests pick them up for dinner every evening."},
 w2h:{ru:"Вид на горы",kk:"Тауға қарайтын көрініс",en:"Mountain views"},
 w2p:{ru:"Окна смотрят на хребет — завтрак здесь ощущается как маленький выезд за город.",kk:"Терезелер тау жотасына қарайды — мұндағы таңғы ас қала сыртына шыққандай әсер береді.",en:"The windows face the ridge — breakfast here feels like a little trip out of town."},
 w3h:{ru:"Можно с питомцем",kk:"Үй жануарымен келуге болады",en:"Pets welcome"},
 w3p:{ru:"Приходите с собакой — в зале вам будут рады.",kk:"Итіңізбен келе беріңіз — залда сіздерге әрқашан қуаныштымыз.",en:"Bring your dog — you're both welcome inside."},
 w4h:{ru:"КБЖУ у каждого блюда",kk:"Әр тағамның калориясы",en:"Nutrition for every dish"},
 w4p:{ru:"Считаете калории или белок? Фильтр в меню подберёт блюдо под цель.",kk:"Калория не ақуыз санайсыз ба? Мәзірдегі сүзгі мақсатыңызға сай тағам таңдап береді.",en:"Counting calories or protein? The menu filter finds dishes that fit your goal."},
 menu_h:{ru:"Меню",kk:"Мәзір",en:"Menu"},
 menu_lead:{ru:"Нажмите «+», чтобы собрать заказ — он уйдёт в WhatsApp кофейни одним сообщением.",kk:"Тапсырыс жинау үшін «+» басыңыз — ол кофехананың WhatsApp-ына бір хабарламамен жіберіледі.",en:"Tap “+” to build your order — it goes to the café's WhatsApp as one message."},
 kbju_on:{ru:"КБЖУ: показаны",kk:"Калория: көрсетілген",en:"Nutrition: shown"},
 kbju_off:{ru:"КБЖУ: скрыты",kk:"Калория: жасырылған",en:"Nutrition: hidden"},
 search_ph:{ru:"Найти блюдо: сырники, том-ям, латте…",kk:"Тағам іздеу: сырниктер, том-ям, латте…",en:"Search: syrniki, tom yum, latte…"},
 search_aria:{ru:"Поиск по меню",kk:"Мәзірден іздеу",en:"Search the menu"},
 all:{ru:"Всё меню",kk:"Барлық мәзір",en:"Full menu"},
 g_light:{ru:"До 400 ккал",kk:"400 ккал-ға дейін",en:"Under 400 kcal"},
 g_protein:{ru:"Белок от 30 г",kk:"Ақуыз 30 г-нан бастап",en:"30 g+ protein"},
 g_budget:{ru:"До 2000 ₸",kk:"2000 ₸-ге дейін",en:"Under 2,000 ₸"},
 kcal:{ru:"ккал",kk:"ккал",en:"kcal"},
 mp:{ru:"Б",kk:"А",en:"P"}, mf:{ru:"Ж",kk:"М",en:"F"}, mc:{ru:"У",kk:"К",en:"C"},
 ask:{ru:"уточнить",kk:"сұраңыз",en:"ask"},
 add:{ru:"Добавить",kk:"Қосу",en:"Add"},
 empty:{ru:"Ничего не нашлось. Попробуйте другое слово или снимите фильтр.",kk:"Ештеңе табылмады. Басқа сөзбен іздеп көріңіз немесе сүзгіні алып тастаңыз.",en:"Nothing found. Try another word or clear the filter."},
 cat_breakfast:{ru:"Завтраки",kk:"Таңғы ас",en:"Breakfast"},
 cat_bakery:{ru:"Выпечка",kk:"Тоқаштар",en:"Bakery"},
 note_bakery:{ru:"Ассортимент витрины меняется каждый день — хлеб, круассаны и десерты уточняйте у бариста.",kk:"Витринадағы ассортимент күн сайын өзгереді — нан, круассан мен десерттерді баристадан сұраңыз.",en:"The display case changes daily — ask the barista about bread, croissants and desserts."},
 cat_soups:{ru:"Супы",kk:"Сорпалар",en:"Soups"},
 cat_beef:{ru:"Горячее · говядина",kk:"Ыстық тағамдар · сиыр еті",en:"Mains · beef"},
 cat_chicken:{ru:"Горячее · курица",kk:"Ыстық тағамдар · тауық еті",en:"Mains · chicken"},
 cat_fish:{ru:"Горячее · рыба",kk:"Ыстық тағамдар · балық",en:"Mains · fish"},
 cat_salads:{ru:"Салаты",kk:"Салаттар",en:"Salads"},
 cat_coffee:{ru:"Кофе",kk:"Кофе",en:"Coffee"},
 cat_cold:{ru:"Холодные напитки",kk:"Салқын сусындар",en:"Cold drinks"},
 note_cold:{ru:"Объём 500 мл",kk:"Көлемі 500 мл",en:"500 ml"},
 cat_tea:{ru:"Чай",kk:"Шай",en:"Tea"},
 note_tea:{ru:"Листовой чай — цену уточните у бариста.",kk:"Жапырақ шайдың бағасын баристадан сұраңыз.",en:"Ask the barista for loose-leaf tea prices."},
 cat_drinks:{ru:"Напитки",kk:"Сусындар",en:"Drinks"},
 home_h:{ru:"Возьмите домой",kk:"Үйге алып кетіңіз",en:"Take some home"},
 home_lead:{ru:"Не только посидеть — пекарня работает и как магазин у дома.",kk:"Тек отыру үшін емес — наубайхана үй жанындағы дүкен ретінде де жұмыс істейді.",en:"Not just a place to sit — the bakery is also your corner shop."},
 h1:{ru:"Свежий хлеб и багеты — уточните в WhatsApp, что уже из печи",kk:"Жаңа піскен нан мен багеттер — пештен не шыққанын WhatsApp арқылы сұраңыз",en:"Fresh bread and baguettes — ask on WhatsApp what's just out of the oven"},
 h2:{ru:"Торты и десерты к празднику или в офис — закажите заранее",kk:"Мерекеге немесе кеңсеге торттар мен десерттер — алдын ала тапсырыс беріңіз",en:"Cakes and desserts for a celebration or the office — order ahead"},
 h3:{ru:"Полуфабрикаты: манты, пельмени, вареники на ужин",kk:"Жартылай фабрикаттар: кешкі асқа манты, тұшпара, вареники",en:"Ready-to-cook manty, pelmeni and vareniki for dinner"},
 h4:{ru:"Кофе и чай с собой — авторский чай есть литрами",kk:"Кофе мен шай өзіңізбен — авторлық шай литрлеп те бар",en:"Coffee and tea to go — signature tea comes by the litre too"},
 btn_fresh:{ru:"Узнать, что свежего сегодня",kk:"Бүгін не жаңа піскенін білу",en:"Ask what's fresh today"},
 wa_hello:{ru:"Здравствуйте! Пишу с сайта Latteria & Bakery (Alma Villa).",kk:"Сәлеметсіз бе! Latteria & Bakery (Alma Villa) сайтынан жазып отырмын.",en:"Hello! I'm writing from the Latteria & Bakery (Alma Villa) website."},
 wa_fresh:{ru:"Здравствуйте! Хочу заказать с собой. Что есть свежего из выпечки сегодня?",kk:"Сәлеметсіз бе! Өзіммен алып кетуге тапсырыс бергім келеді. Бүгін қандай жаңа піскен тоқаштар бар?",en:"Hello! I'd like to order takeaway. What's fresh from the bakery today?"},
 gal_h:{ru:"Как это выглядит",kk:"Бұл қалай көрінеді",en:"Take a look"},
 gal_lead:{ru:"Свежие видео и фото — в Instagram. Подписывайтесь, чтобы видеть новинки витрины первыми.",kk:"Жаңа видео мен фотолар — Instagram-да. Витринадағы жаңалықтарды бірінші көру үшін жазылыңыз.",en:"Fresh videos and photos are on Instagram. Follow to see what's new in the display case first."},
 gal_btn:{ru:"Открыть @latteria.bakery",kk:"@latteria.bakery ашу",en:"Open @latteria.bakery"},
 reel_soon:{ru:"Видео скоро здесь",kk:"Видео жақында осында",en:"Video coming soon"},
 rev_h:{ru:"Отзывы гостей",kk:"Қонақтардың пікірлері",en:"Guest reviews"},
 stars_aria:{ru:"4.8 из 5",kk:"5-тен 4.8",en:"4.8 out of 5"},
 rev_count:{ru:"70 оценок и 43 отзыва в 2ГИС",kk:"2ГИС-те 70 баға және 43 пікір",en:"70 ratings and 43 reviews on 2GIS"},
 rev_note:{ru:"",kk:"Пікірлер түпнұсқа тілінде берілген.",en:"Reviews are shown in their original language."},
 rev_all:{ru:"Все отзывы в 2ГИС",kk:"2ГИС-тегі барлық пікірлер",en:"All reviews on 2GIS"},
 rev_leave:{ru:"Оставить отзыв",kk:"Пікір қалдыру",en:"Leave a review"},
 c_h:{ru:"Как нас найти",kk:"Бізді қалай табуға болады",en:"How to find us"},
 c_addr:{ru:"Адрес",kk:"Мекенжай",en:"Address"},
 c_addr_v:{ru:"ЖК Alma Villa, улица Талды, 63 блок 2<br>мкр Ерменсай, Бостандыкский район, Алматы",
   kk:"Alma Villa ТК, Талды көшесі, 63, 2-блок<br>Ерменсай ш/а, Бостандық ауданы, Алматы",
   en:"Alma Villa residence, 63 Taldy St, block 2<br>Ermensai, Bostandyk district, Almaty"},
 c_hours:{ru:"Режим работы",kk:"Жұмыс уақыты",en:"Opening hours"},
 c_phone:{ru:"Телефон и WhatsApp",kk:"Телефон және WhatsApp",en:"Phone & WhatsApp"},
 c_pay:{ru:"Оплата",kk:"Төлем",en:"Payment"},
 c_pay_v:{ru:"Картой, наличными, по QR-коду",kk:"Карта, қолма-қол ақша, QR-код",en:"Card, cash or QR code"},
 c_route:{ru:"Маршрут в 2ГИС",kk:"2ГИС-те бағыт",en:"Directions in 2GIS"},
 map_title:{ru:"Карта: Latteria & Bakery, ЖК Alma Villa",kk:"Карта: Latteria & Bakery, Alma Villa ТК",en:"Map: Latteria & Bakery, Alma Villa"},
 foot:{ru:"Latteria & Bakery, филиал в ЖК Alma Villa. Меню и цены — по данным заведения на ноябрь 2026, актуальные цены уточняйте на кассе. Концепт сайта.",
   kk:"Latteria & Bakery, Alma Villa ТК-дегі филиал. Мәзір мен бағалар 2026 жылғы қарашадағы мекеме деректері бойынша, өзекті бағаларды кассадан нақтылаңыз. Сайт концепті.",
   en:"Latteria & Bakery, Alma Villa branch. Menu and prices as provided by the café in November 2026; please check current prices at the till. Website concept."},
 bar_route:{ru:"Маршрут",kk:"Бағыт",en:"Directions"},
 bar_order:{ru:"Заказ",kk:"Тапсырыс",en:"Order"},
 cart_h:{ru:"Ваш заказ",kk:"Сіздің тапсырысыңыз",en:"Your order"},
 close:{ru:"Закрыть",kk:"Жабу",en:"Close"},
 less:{ru:"Меньше",kk:"Азайту",en:"Less"}, more:{ru:"Больше",kk:"Көбейту",en:"More"},
 m_take:{ru:"С собой",kk:"Өзіңізбен",en:"To go"},
 m_hall:{ru:"В зале",kk:"Залда",en:"Eat in"},
 m_time:{ru:"К времени",kk:"Уақытқа",en:"For a set time"},
 m_take_msg:{ru:"Заберу с собой",kk:"Өзіммен алып кетемін",en:"Takeaway"},
 m_hall_msg:{ru:"Поем в зале",kk:"Залда жеймін",en:"Eating in"},
 m_time_msg:{ru:"Приготовить к времени",kk:"Белгілі уақытқа дайындау",en:"Ready for a set time"},
 when_ph:{ru:"Во сколько придёте? Например, 09:30",kk:"Қашан келесіз? Мысалы, 09:30",en:"What time will you come? e.g. 09:30"},
 comment_ph:{ru:"Комментарий: без сахара, на овсяном молоке…",kk:"Түсініктеме: қантсыз, сұлы сүтімен…",en:"Note: no sugar, oat milk…"},
 total:{ru:"Итого",kk:"Барлығы",en:"Total"},
 plus_tea:{ru:" + чай",kk:" + шай",en:" + tea"},
 send:{ru:"Отправить заказ в WhatsApp",kk:"Тапсырысты WhatsApp-қа жіберу",en:"Send order via WhatsApp"},
 cart_empty:{ru:"Пока пусто. Добавьте блюда из меню кнопкой «+».",kk:"Әзірге бос. Мәзірден «+» батырмасымен тағам қосыңыз.",en:"Nothing here yet. Add dishes from the menu with “+”."},
 send_empty:{ru:"Добавьте хотя бы одно блюдо — потом отправим заказ.",kk:"Кемінде бір тағам қосыңыз — содан кейін тапсырысты жібереміз.",en:"Add at least one dish first, then send the order."},
 msg_head:{ru:"Здравствуйте! Заказ с сайта (Alma Villa):",kk:"Сәлеметсіз бе! Сайттан тапсырыс (Alma Villa):",en:"Hello! Order from the website (Alma Villa):"},
 msg_type:{ru:"Формат",kk:"Формат",en:"Type"},
 msg_time:{ru:"Время",kk:"Уақыты",en:"Time"},
 msg_note:{ru:"Комментарий",kk:"Түсініктеме",en:"Note"},
};

/* ── МЕНЮ ── [название (рус), цена, ккал, белки, жиры, углеводы, {варианты}] */
const MENU = [
 {id:"breakfast", items:[
  ["Киш с лососем и брокколи",2800,603,30.1,34,44.2],
  ["Овсяная каша с гранолой и манго",1350,548,16.6,18,80],
  ["Английский завтрак",2400,810,37.6,56.8,33],
  ["Американский завтрак",3100,882,36.1,52,67.4],
  ["Гречка с печёным лососем, песто и шпинатом",2800,483,31.3,25,33.1],
  ["Гречка с отварными креветками, песто и шпинатом",2400,361,25.8,14.5,31.7],
  ["Боул терияки",2800,536,35.7,19,55.5],
  ["Фитнес-боул",3800,491,26.4,17,5],
  ["Шакшука",2700,640,33.1,32,54.9],
  ["Хычины с зеленью и сыром",2100,462,16.6,20,53.9],
  ["Клаб-сэндвич с курицей",1300,506,26.4,20,55],
  ["Творожная запеканка",2800,493,28.5,18,54.3],
  ["Сырники классические",2300,516,24.7,14,72.8],
  ["Сырники с шоколадом",2500,849,12.4,45,98.6],
  ["Бельгийская вафля",2500,526,10.8,22,71.2],
  ["Чиа-пудинг манго",2200,306,11.5,12,38],
  ["Чиа-пудинг малина",2200,300,11.5,12,36.4],
  ["Йогурт с гранолой и малиной",2200,314,16.3,9,38.5],
  ["Омлет",1500,274,21,18,5.1],
  ["Кручёный омлет с салатом из булгура и лайма",2100,500,25.1,32,32.1],
  ["Блины с творогом",1800,387,12.2,14.5,53.6],
  ["Блины с мясом",1800,377,19.9,22,26.2],
  ["Вареники",2000,487,12.1,12.2,83.5],
  ["Рисовая каша с фруктами",1350,443,8.6,16,66.2],
  ["Гречневая каша на молоке с яблоком и сливочным маслом",1350,361,8.6,15.3,47],
  ["Каша рисовая",1350,443,8.6,16,66.2]]},
 {id:"bakery", note:true, items:[
  ["Круассан с индейкой",2400],["Пицца сорренто",2400],["Мини-сосиска в тесте",650],["Самса",1050]]},
 {id:"soups", items:[
  ["Том-ям",3200,275,23,14,15],["Чечевичный крем-суп",1600,394,18.3,8,62],["Суп с фрикадельками",1600,381,20.9,25,19.2],
  ["Тыквенный крем-суп",1600,246,7,9,38.5],["Сорпа",1600,267,28.8,10,18.1],["Борщ",1600,209,8.5,10.5,22],
  ["Крем-суп грибной с крутонами",1600,336,12.1,16,38.6],["Крем-суп овощной",1400,285,8.6,11,42.2],["Крем-суп сырный",1600,427,19.1,23,38.7],
  ["Рамен с курицей",3500,451,35,16,41.6],["Рамен с мясом",3600,504,36.8,22,41.4],["Солянка",2000,249,14.1,16,15.3],
  ["Окрошка",1800,192,12.4,10,17.7],["Кукси",1800,352,18.5,15,36.3]]},
 {id:"beef", items:[
  ["Говядина по-китайски с рисом",2700,574,29.9,27,52.5],["Спагетти болоньезе",2600,591,33.6,25,58.9],["Ганфан с рисом",2800,418,28.2,11,50.9],
  ["Плов",2600,520,29.4,24,47.8],["Мясная запеканка",2700,516,27.1,35,23.5],["Бризоль с картофельным пюре",2800,447,26.9,26,25.3],
  ["Манты с мясом, 5 шт",2900,756,35.1,30,86.3],["Манты с тыквой, 5 шт",2800,699,24.5,22,110.5],["Пельмени, 200 г",2800,246,13.2,11,23.8],
  ["Гамбургер",3100,631,22.3,41.1,42.9],["Жареный рис на воке с говядиной",2100,497,27,28,33.8]]},
 {id:"chicken", items:[
  ["Куриная грудка с диким рисом и брокколи с чили и чесноком",3500,520,44.9,18,47.9],["Куриные стрипсы с сырным соусом и фри",2600,708,42.5,25,75.3],
  ["Кесадилья",2600,254,25,12.5,11.8],["Курица по-китайски с рисом",2600,472,29.2,11,61.8],["Пышная курица с картофельными крокетами",2600,830,46.7,38,73.9],
  ["Курица в сливочно-сырном соусе со спагетти",2600,610,45.2,25,50.3],["Куриное фрикасе с рисом",2600,458,36.2,15,42],["Фетучини с курицей",2800,681,39.4,35,51.9],
  ["Курица с ананасом и рисом",2700,551,45.9,18,49.8],["Удон с мясом",3500,534,24.9,23,58],["Удон с курицей",3500,523,31.9,18,58],
  ["Жареный рис на воке с курицей",2000,443,29.4,20.4,33.8]]},
 {id:"fish", items:[
  ["Судак по-домашнему с отварным картофелем",3250,401,31.5,14,39.2],["Рулетики из сёмги с творожным сыром и булгуром",3900,573,45.1,30,27.3],
  ["Фетучини с сёмгой",3590,669,35.1,35,51.5],["Судак в кляре с соусом тартар и фри",3250,1108,34.2,62,102.5],["Судак в кисло-сладком соусе",3250,438,30,3.8,69.2],
  ["Стейк сёмги на гриле с овощами",3500,431,35.3,22,21.2],["Судак под сырной корочкой с гречкой",3250,504,39.6,22,38.2],["Сёмга «Розалия» с рисом",3400,620,46.8,25,45.9]]},
 {id:"salads", items:[
  ["Цезарь с курицей",2100,400,26.9,24,18.1],["Цезарь с сёмгой",2500,313,19.7,18,16.4],["Салат с запечённой тыквой и сёмгой",2500,304,16.7,21,12.6],
  ["Греческий салат",2100,194,7.8,14,9.7],["Оливье",2100,305,9,22,17.1],["Тёплый салат с рукколой и говядиной",2500,355,27.6,24,8.2],
  ["Руккола с креветками",2500,206,20.1,11,8],["Винегрет",2100,154,3.9,7,20],["Салат Грин",2100,91,2.1,6,8.2],
  ["Овощная нарезка",2100,149,2.2,12,9.4],["Крабовый салат",2100,184,7.3,11,14.9],["Салат-микс с апельсином и фетаксой",2100,250,10,18,12.7]]},
 {id:"coffee", items:[
  ["Эспрессо",1100],["Дабл эспрессо",1100],["Американо",1400],["Латте",1600],["Капучино",1600],["Флэт-уайт",1600],["Раф",1600],
  ["Декаф американо",1600],["Декаф капучино",1900],["Матча латте",2100]]},
 {id:"cold", note:true, items:[
  ["Айс американо",1400],["Айс латте",1600],["Айс капучино",1600],["Эспрессо-тоник",1900],["Айс матча латте",2100],
  ["Айс матча с клубникой",2300],["Бамбл",2300],["Лимонад маракуйя",1800],["Лимонад лесные ягоды",1800],["Лимонад смородина-мята",1800]]},
 {id:"tea", note:true, items:[
  ["Авторский чай с ягодами",null,null,null,null,null,{v:[["0,3 л",1200],["1 л",1800]]}],
  ["Облепиха с имбирём",null,null,null,null,null,{v:[["0,3 л",1200],["1 л",1800]]}],
  ["Молочный улун",null],["Глаз дракона",null],["Ройбуш",null],["Секрет гейши",null],
  ["Ассам",null],["Изысканный бергамот",null],["Эрл грей классический",null],["Брусничный",null]]},
 {id:"drinks", items:[
  ["Tassay, 250 мл",700],["Tassay, 500 мл",900],["Fanta / Sprite / Coke",890],["Borjomi, 300 мл",890],["Borjomi лимонад",1100],
  ["Rich / Rioba",1100],["Schweppes",850],["San Pellegrino",1600],["Bellini",1900],
  ["Red Bull",null,null,null,null,null,{v:[["малый",1200],["большой",1800]]}]]},
];

/* ── ПЕРЕВОД БЛЮД: [рус, каз, англ] ── */
const DISHES = [
 ["Киш с лососем и брокколи","Албырт пен брокколи қосылған киш","Quiche with salmon and broccoli"],
 ["Овсяная каша с гранолой и манго","Гранола мен манго қосылған сұлы ботқасы","Oatmeal with granola and mango"],
 ["Английский завтрак","Ағылшынша таңғы ас","English breakfast"],
 ["Американский завтрак","Американша таңғы ас","American breakfast"],
 ["Гречка с печёным лососем, песто и шпинатом","Пісірілген албырт, песто және шпинат қосылған қарақұмық","Buckwheat with baked salmon, pesto and spinach"],
 ["Гречка с отварными креветками, песто и шпинатом","Қайнатылған асшаян, песто және шпинат қосылған қарақұмық","Buckwheat with boiled shrimp, pesto and spinach"],
 ["Боул терияки","Терияки боулы","Teriyaki bowl"],
 ["Фитнес-боул","Фитнес-боул","Fitness bowl"],
 ["Шакшука","Шакшука","Shakshuka"],
 ["Хычины с зеленью и сыром","Көк шөп пен ірімшік қосылған хычиндер","Khychiny with herbs and cheese"],
 ["Клаб-сэндвич с курицей","Тауық етімен клаб-сэндвич","Chicken club sandwich"],
 ["Творожная запеканка","Сүзбе запеканкасы","Cottage cheese bake"],
 ["Сырники классические","Классикалық сырниктер","Classic syrniki (cottage cheese pancakes)"],
 ["Сырники с шоколадом","Шоколадты сырниктер","Syrniki with chocolate"],
 ["Бельгийская вафля","Бельгиялық вафли","Belgian waffle"],
 ["Чиа-пудинг манго","Манго чиа-пудингі","Mango chia pudding"],
 ["Чиа-пудинг малина","Таңқурай чиа-пудингі","Raspberry chia pudding"],
 ["Йогурт с гранолой и малиной","Гранола мен таңқурай қосылған йогурт","Yogurt with granola and raspberries"],
 ["Омлет","Омлет","Omelette"],
 ["Кручёный омлет с салатом из булгура и лайма","Булгур мен лайм салатымен оралған омлет","Rolled omelette with bulgur and lime salad"],
 ["Блины с творогом","Сүзбе қосылған құймақтар","Blini with cottage cheese"],
 ["Блины с мясом","Ет қосылған құймақтар","Blini with meat"],
 ["Вареники","Вареники","Vareniki (dumplings)"],
 ["Рисовая каша с фруктами","Жемістер қосылған күріш ботқасы","Rice porridge with fruit"],
 ["Гречневая каша на молоке с яблоком и сливочным маслом","Алма мен сары май қосылған сүтті қарақұмық ботқасы","Milk buckwheat porridge with apple and butter"],
 ["Каша рисовая","Күріш ботқасы","Rice porridge"],
 ["Круассан с индейкой","Күркетауық еті қосылған круассан","Turkey croissant"],
 ["Пицца сорренто","Сорренто пиццасы","Pizza Sorrento"],
 ["Мини-сосиска в тесте","Қамырдағы шағын сосиска","Mini sausage roll"],
 ["Самса","Самса","Samsa"],
 ["Том-ям","Том-ям","Tom yum"],
 ["Чечевичный крем-суп","Жасымық крем-сорпасы","Lentil cream soup"],
 ["Суп с фрикадельками","Фрикаделька қосылған сорпа","Meatball soup"],
 ["Тыквенный крем-суп","Асқабақ крем-сорпасы","Pumpkin cream soup"],
 ["Сорпа","Сорпа","Sorpa (Kazakh meat broth)"],
 ["Борщ","Борщ","Borscht"],
 ["Крем-суп грибной с крутонами","Крутон қосылған саңырауқұлақ крем-сорпасы","Mushroom cream soup with croutons"],
 ["Крем-суп овощной","Көкөніс крем-сорпасы","Vegetable cream soup"],
 ["Крем-суп сырный","Ірімшік крем-сорпасы","Cheese cream soup"],
 ["Рамен с курицей","Тауық етімен рамен","Chicken ramen"],
 ["Рамен с мясом","Сиыр етімен рамен","Beef ramen"],
 ["Солянка","Солянка","Solyanka"],
 ["Окрошка","Окрошка","Okroshka (cold soup)"],
 ["Кукси","Кукси","Kuksi (cold noodle soup)"],
 ["Говядина по-китайски с рисом","Күрішпен қытайша сиыр еті","Chinese-style beef with rice"],
 ["Спагетти болоньезе","Болоньезе спагеттиі","Spaghetti Bolognese"],
 ["Ганфан с рисом","Күрішпен ганфан","Ganfan with rice"],
 ["Плов","Палау","Plov (pilaf)"],
 ["Мясная запеканка","Ет запеканкасы","Meat bake"],
 ["Бризоль с картофельным пюре","Картоп пюресімен бризоль","Brizol with mashed potatoes"],
 ["Манты с мясом, 5 шт","Етті манты, 5 дана","Meat manty, 5 pcs"],
 ["Манты с тыквой, 5 шт","Асқабақты манты, 5 дана","Pumpkin manty, 5 pcs"],
 ["Пельмени, 200 г","Тұшпара, 200 г","Pelmeni, 200 g"],
 ["Гамбургер","Гамбургер","Hamburger"],
 ["Жареный рис на воке с говядиной","Сиыр етімен вокта қуырылған күріш","Wok-fried rice with beef"],
 ["Куриная грудка с диким рисом и брокколи с чили и чесноком","Жабайы күріш және чили мен сарымсақ қосылған брокколимен тауық төсі","Chicken breast with wild rice and chilli-garlic broccoli"],
 ["Куриные стрипсы с сырным соусом и фри","Ірімшік тұздығы мен фри қосылған тауық стрипстері","Chicken strips with cheese sauce and fries"],
 ["Кесадилья","Кесадилья","Quesadilla"],
 ["Курица по-китайски с рисом","Күрішпен қытайша тауық еті","Chinese-style chicken with rice"],
 ["Пышная курица с картофельными крокетами","Картоп крокеттерімен қамырдағы тауық","Battered chicken with potato croquettes"],
 ["Курица в сливочно-сырном соусе со спагетти","Кілегей-ірімшік тұздығындағы тауық еті спагеттимен","Chicken in creamy cheese sauce with spaghetti"],
 ["Куриное фрикасе с рисом","Күрішпен тауық фрикасесі","Chicken fricassee with rice"],
 ["Фетучини с курицей","Тауық етімен феттучини","Fettuccine with chicken"],
 ["Курица с ананасом и рисом","Ананас пен күріш қосылған тауық еті","Chicken with pineapple and rice"],
 ["Удон с мясом","Сиыр етімен удон","Udon with beef"],
 ["Удон с курицей","Тауық етімен удон","Udon with chicken"],
 ["Жареный рис на воке с курицей","Тауық етімен вокта қуырылған күріш","Wok-fried rice with chicken"],
 ["Судак по-домашнему с отварным картофелем","Қайнатылған картоппен үйше көксерке","Home-style zander with boiled potatoes"],
 ["Рулетики из сёмги с творожным сыром и булгуром","Сүзбе ірімшігі мен булгур қосылған албырт рулеттері","Salmon rolls with cream cheese and bulgur"],
 ["Фетучини с сёмгой","Албыртпен феттучини","Fettuccine with salmon"],
 ["Судак в кляре с соусом тартар и фри","Тартар тұздығы мен фри қосылған кляр ішіндегі көксерке","Battered zander with tartare sauce and fries"],
 ["Судак в кисло-сладком соусе","Тәтті-қышқыл тұздықтағы көксерке","Zander in sweet and sour sauce"],
 ["Стейк сёмги на гриле с овощами","Көкөністермен грильде пісірілген албырт стейгі","Grilled salmon steak with vegetables"],
 ["Судак под сырной корочкой с гречкой","Қарақұмықпен ірімшік қабығындағы көксерке","Cheese-crusted zander with buckwheat"],
 ["Сёмга «Розалия» с рисом","Күрішпен «Розалия» албырты","Salmon “Rosalia” with rice"],
 ["Цезарь с курицей","Тауық етімен Цезарь","Chicken Caesar"],
 ["Цезарь с сёмгой","Албыртпен Цезарь","Salmon Caesar"],
 ["Салат с запечённой тыквой и сёмгой","Пісірілген асқабақ пен албырт салаты","Roast pumpkin and salmon salad"],
 ["Греческий салат","Грек салаты","Greek salad"],
 ["Оливье","Оливье","Olivier salad"],
 ["Тёплый салат с рукколой и говядиной","Руккола мен сиыр еті қосылған жылы салат","Warm salad with rocket and beef"],
 ["Руккола с креветками","Асшаянмен руккола","Rocket with shrimp"],
 ["Винегрет","Винегрет","Vinegret (beetroot salad)"],
 ["Салат Грин","«Грин» салаты","Green salad"],
 ["Овощная нарезка","Көкөніс туралымы","Vegetable platter"],
 ["Крабовый салат","Краб салаты","Crab salad"],
 ["Салат-микс с апельсином и фетаксой","Апельсин мен фетакса қосылған салат-микс","Mixed salad with orange and feta"],
 ["Эспрессо","Эспрессо","Espresso"],
 ["Дабл эспрессо","Қос эспрессо","Double espresso"],
 ["Американо","Американо","Americano"],
 ["Латте","Латте","Latte"],
 ["Капучино","Капучино","Cappuccino"],
 ["Флэт-уайт","Флэт-уайт","Flat white"],
 ["Раф","Раф","Raf"],
 ["Декаф американо","Декаф американо","Decaf americano"],
 ["Декаф капучино","Декаф капучино","Decaf cappuccino"],
 ["Матча латте","Матча латте","Matcha latte"],
 ["Айс американо","Мұзды американо","Iced americano"],
 ["Айс латте","Мұзды латте","Iced latte"],
 ["Айс капучино","Мұзды капучино","Iced cappuccino"],
 ["Эспрессо-тоник","Эспрессо-тоник","Espresso tonic"],
 ["Айс матча латте","Мұзды матча латте","Iced matcha latte"],
 ["Айс матча с клубникой","Құлпынайлы мұзды матча","Iced strawberry matcha"],
 ["Бамбл","Бамбл","Bumble"],
 ["Лимонад маракуйя","Маракуйя лимонады","Passion fruit lemonade"],
 ["Лимонад лесные ягоды","Орман жидегі лимонады","Wild berry lemonade"],
 ["Лимонад смородина-мята","Қарақат-жалбыз лимонады","Blackcurrant-mint lemonade"],
 ["Авторский чай с ягодами","Жидекті авторлық шай","Signature berry tea"],
 ["Облепиха с имбирём","Імбір қосылған шырғанақ шайы","Sea buckthorn and ginger tea"],
 ["Молочный улун","Сүтті улун","Milk oolong"],
 ["Глаз дракона","«Айдаһар көзі»","Dragon Eye"],
 ["Ройбуш","Ройбуш","Rooibos"],
 ["Секрет гейши","«Гейша құпиясы»","Geisha's Secret"],
 ["Ассам","Ассам","Assam"],
 ["Изысканный бергамот","Нәзік бергамот","Fine bergamot"],
 ["Эрл грей классический","Классикалық Эрл Грей","Classic Earl Grey"],
 ["Брусничный","Итбүлдірген шайы","Lingonberry tea"],
 ["Borjomi лимонад","Borjomi лимонады","Borjomi lemonade"],
 ["Tassay, 250 мл","Tassay, 250 мл","Tassay, 250 ml"],
 ["Tassay, 500 мл","Tassay, 500 мл","Tassay, 500 ml"],
 ["Borjomi, 300 мл","Borjomi, 300 мл","Borjomi, 300 ml"],
];
const VARS = {"0,3 л":{kk:"0,3 л",en:"0.3 L"},"1 л":{kk:"1 л",en:"1 L"},"малый":{kk:"шағын",en:"small"},"большой":{kk:"үлкен",en:"large"}};

/* Реальные отзывы из 2ГИС (сокращены, язык оригинала) */
const REVIEWS = [
  ["Назгуль","Шикарное место с потрясающим видом на горы! Атмосфера очень уютная, персонал внимательный и приветливый, всё невероятно вкусно."],
  ["Аскар","Часто утром забегаю перед работой за кофе. Сегодня попробовал хлеб с семенами — 100 из 100 вашему хлебу!"],
  ["Sia","Были с нашей маленькой собачкой — здесь нас спокойно приняли. Кофе действительно вкусный, атмосфера воздушная и спокойная."],
  ["Zarina","Очень вкусно, я в восторге, что в нашем районе есть хорошее место, куда можно сходить на завтрак."],
  ["Daniel","Super friendly and great value — the rolled omelette with bulgur wheat salad was a delight! Nice coffee too."],
  ["Алина","Особенно хочется отметить ржаной хлеб с сухофруктами — свежий, ароматный и очень вкусный."],
  ["Dinara","Очень вкусный хлеб, сэндвичи и паста, порадовали цены на горячие блюда. Обслуживание быстрое."],
  ["Лилиана","Взяли карамельный эклер и Павлову — оба десерта вкусные, свежие и нежные."],
  ["Ирина","Пошли взять пирожные к чаю и обалдели от вкуса! Мы соседи и рады открытию вашего филиала у нас."],
];

/* ── логика ── */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const LANGS = ["kk","ru","en"];
const DT = {}; DISHES.forEach(([ru,kk,en])=>DT[ru]={kk,en});
let lang = (()=>{
  const u = new URLSearchParams(location.search).get("lang"); if(LANGS.includes(u)) return u;
  try{ const s = localStorage.getItem("lang"); if(LANGS.includes(s)) return s; }catch(e){}
  return "ru";
})();
const t = k => (I18N[k] && (I18N[k][lang] ?? I18N[k].ru)) ?? k;
const nm = ru => lang==="ru" ? ru : (DT[ru]?.[lang] || ru);
const vl = v => !v ? "" : (lang==="ru" ? v : (VARS[v]?.[lang] || v));
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const fmt = n => n.toLocaleString("ru-RU") + " ₸";
const waLink = txt => `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;

let cat="all", goal=null, q="";
const cart = {}; // key -> {ru, v, price, qty}

function buildCats(){
  const el=$("#cats"); el.innerHTML="";
  [{id:"all"},...MENU].forEach(c=>{
    const b=document.createElement("button");b.className="chip";b.dataset.cat=c.id;
    b.textContent = c.id==="all" ? t("all") : t("cat_"+c.id);
    b.setAttribute("aria-pressed",c.id===cat);
    b.onclick=()=>{cat=c.id;render();el.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x.dataset.cat===cat));};
    el.appendChild(b);
  });
}
$$("[data-goal]").forEach(b=>b.onclick=()=>{
  goal = goal===b.dataset.goal ? null : b.dataset.goal;
  $$("[data-goal]").forEach(x=>x.setAttribute("aria-pressed",x.dataset.goal===goal));render();});
$("#q").addEventListener("input",e=>{q=e.target.value.trim().toLowerCase();render()});
function kbjuLabel(){ $("#kbjuToggle").textContent = t(document.body.classList.contains("no-kbju")?"kbju_off":"kbju_on"); }
$("#kbjuToggle").onclick=e=>{const off=document.body.classList.toggle("no-kbju");e.currentTarget.setAttribute("aria-pressed",!off);kbjuLabel();};

function pass(it){
  const [n,p,k,b]=it;
  if(q && !n.toLowerCase().includes(q) && !nm(n).toLowerCase().includes(q)) return false;
  if(goal==="light") return k!=null && k<=400;
  if(goal==="protein") return b!=null && b>=30;
  if(goal==="budget") return p!=null && p<=2000;
  return true;
}
function addBtn(ru,v,price){
  const key=ru+"|"+(v||""), inCart=cart[key];
  return `<button class="add${inCart?" in":""}" data-ru="${esc(ru)}" data-v="${esc(v||"")}" data-price="${price??""}" aria-label="${esc(t("add")+" "+nm(ru)+(v?" "+vl(v):""))}">${v?esc(vl(v))+" · ":""}${inCart?"✓ "+inCart.qty:"+"}</button>`;
}
function render(){
  let html="",count=0;
  MENU.filter(c=>cat==="all"||c.id===cat).forEach(c=>{
    const list=c.items.filter(pass);if(!list.length)return;count+=list.length;
    html+=`<div class="cat"><h3>${esc(t("cat_"+c.id))}</h3>${c.note?`<p class="note">${esc(t("note_"+c.id))}</p>`:""}<div class="items">`;
    list.forEach(it=>{
      const [n,p,k,b,j,u,ex]=it;const media=MEDIA[n];
      const thumb= media ? (/\.mp4$/i.test(media)
        ? `<video class="thumb" src="${media}" muted playsinline loop autoplay data-full="${media}"></video>`
        : `<img class="thumb" src="${media}" alt="${esc(nm(n))}" loading="lazy" data-full="${media}">`) : `<span class="thumb empty"></span>`;
      const kb = k!=null ? `<div class="kbju"><b>${k} ${t("kcal")}</b> · ${t("mp")} ${b} · ${t("mf")} ${j} · ${t("mc")} ${u}</div>` : "";
      let buy;
      if(ex&&ex.v){buy=`<div class="variants">${ex.v.map(([l,pr])=>`<span class="price" style="font-size:13px">${esc(vl(l))} ${fmt(pr)}</span>`).join("")}</div>
        <div class="variants">${ex.v.map(([l,pr])=>addBtn(n,l,pr)).join("")}</div>`;}
      else buy=`<span class="price">${p!=null?fmt(p):esc(t("ask"))}</span>${addBtn(n,null,p)}`;
      html+=`<div class="item">${thumb}<div><div class="name">${esc(nm(n))}</div>${kb}</div><div class="buy">${buy}</div></div>`;
    });
    html+=`</div></div>`;
  });
  $("#menuBody").innerHTML = count ? html : `<p class="empty-state">${esc(t("empty"))}</p>`;
}
$("#menuBody").addEventListener("click",e=>{
  const a=e.target.closest(".add");
  if(a){const ru=a.dataset.ru,v=a.dataset.v,k=ru+"|"+v;
    cart[k]=cart[k]||{ru,v,price:a.dataset.price?+a.dataset.price:null,qty:0};cart[k].qty++;updateCart();render();return;}
  const th=e.target.closest("[data-full]");
  if(th){const f=th.dataset.full;$("#lb").innerHTML=/\.mp4$/i.test(f)?`<video src="${f}" controls autoplay playsinline></video>`:`<img src="${f}" alt="">`;$("#lb").classList.add("on");}
});
$("#lb").onclick=()=>{$("#lb").classList.remove("on");$("#lb").innerHTML="";};

const lineName = l => nm(l.ru)+(l.v?" "+vl(l.v):"");
function updateCart(){
  const lines=Object.entries(cart).filter(([,v])=>v.qty>0);
  $("#cartCount").textContent=lines.reduce((s,[,v])=>s+v.qty,0);
  let total=0,unpriced=false;
  $("#cartBody").innerHTML = lines.length ? lines.map(([k,v])=>{
    if(v.price!=null) total+=v.price*v.qty; else unpriced=true;
    return `<div class="line"><span>${esc(lineName(v))}</span><div class="qty"><button data-dec="${esc(k)}" aria-label="${t("less")}">−</button>${v.qty}<button data-inc="${esc(k)}" aria-label="${t("more")}">+</button></div><b style="color:var(--ink)">${v.price!=null?fmt(v.price*v.qty):"—"}</b></div>`;
  }).join("") : `<p class="empty-state">${esc(t("cart_empty"))}</p>`;
  $("#total").textContent=fmt(total)+(unpriced?t("plus_tea"):"");
}
$("#cartBody").addEventListener("click",e=>{
  const b=e.target.closest("button"); if(!b) return;
  const i=b.dataset.inc,d=b.dataset.dec;
  if(i)cart[i].qty++; if(d){cart[d].qty--; if(cart[d].qty<=0)delete cart[d];}
  if(i||d){updateCart();render();}
});
const root=$("#drawerRoot");
$("#cartOpen").onclick=()=>{root.classList.add("open");$("#cartClose").focus();};
$("#cartClose").onclick=$("#drawerBg").onclick=()=>root.classList.remove("open");
document.addEventListener("keydown",e=>{if(e.key==="Escape"){root.classList.remove("open");$("#lb").classList.remove("on");}});
$("#send").onclick=()=>{
  const lines=Object.values(cart).filter(v=>v.qty>0);
  if(!lines.length){$("#cartBody").innerHTML=`<p class="empty-state">${esc(t("send_empty"))}</p>`;return;}
  const mode=document.querySelector("[name=mode]:checked").value, when=$("#when").value.trim(), com=$("#comment").value.trim();
  let total=0;
  /* для бариста в скобках всегда русское название */
  const items=lines.map(v=>{ if(v.price!=null)total+=v.price*v.qty;
    const ruName=v.ru+(v.v?" "+v.v:""), local=lineName(v);
    return `• ${local}${lang!=="ru"&&local!==ruName?` (${ruName})`:""} × ${v.qty}${v.price!=null?" — "+fmt(v.price*v.qty):""}`;});
  const txt=[t("msg_head"),"",...items,"",`${t("total")}: ${fmt(total)}`,`${t("msg_type")}: ${t("m_"+mode+"_msg")}`]
    .concat(when?[`${t("msg_time")}: ${when}`]:[]).concat(com?[`${t("msg_note")}: ${com}`]:[]).join("\n");
  window.open(waLink(txt),"_blank","noopener");
};

function renderReels(){
  const el=$("#reels"); el.innerHTML="";
  (REELS.length ? REELS : new Array(4).fill(null)).forEach(src=>{
    const d=document.createElement("div");d.className="reel";
    if(src) d.innerHTML=/\.mp4$/i.test(src)?`<video src="${src}" muted loop playsinline autoplay></video>`:`<img src="${src}" alt="" loading="lazy">`;
    else d.innerHTML=`<div><svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="36" height="28" rx="6"/><path d="M18 16l10 6-10 6z" fill="currentColor"/></svg>${esc(t("reel_soon"))}</div>`;
    el.appendChild(d);
  });
}
$("#revs").innerHTML=REVIEWS.map(([n,x])=>`<article class="rev"><p>${esc(x)}</p><footer><b>${esc(n)}</b><span>2GIS</span></footer></article>`).join("");

function setStatus(){
  let key="opens";
  if(CLOSE_HOUR!=null){const h=new Date().getHours(); if(h>=8&&h<CLOSE_HOUR) key="open_now";}
  $("#status").textContent=t(key);
}

function applyLang(){
  document.documentElement.lang = lang;
  document.title = t("title");
  $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  $$("[data-i18n-html]").forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  $$("[data-i18n-ph]").forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  $$("[data-i18n-aria]").forEach(el=>el.setAttribute("aria-label",t(el.dataset.i18nAria)));
  $$("[data-i18n-title]").forEach(el=>el.title=t(el.dataset.i18nTitle));
  $$("[data-wa]").forEach(a=>a.href=waLink(t(a.dataset.wa)));
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
  $("#revNote").style.display = t("rev_note") ? "" : "none";
  kbjuLabel(); buildCats(); render(); updateCart(); renderReels(); setStatus();
  try{ localStorage.setItem("lang",lang); }catch(e){}
}
$$(".lang button").forEach(b=>b.onclick=()=>{ lang=b.dataset.lang; applyLang(); });

applyLang();
