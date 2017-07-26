var app = angular.module('app', ['ngRoute', 'pascalprecht.translate', 'ngCookies']);

var menu = [{
  title: 'HOME',
  link: '/'
}, {
  title: 'PRICING',
  link: '/pricing'
}, {
  title: 'ORDER',
  link: '/order'
}];

var pricing = {
  idividualTour: [{
    quanity: '1 ',
    foreign: "300 USD/",
    ukrainian: "200 USD/"
  }, {
    quanity: '2 ',
    foreign: "200 USD/",
    ukrainian: "150 USD/"
  }, {
    quanity: '3 ',
    foreign: "175 USD/",
    ukrainian: "100 USD/"
  }],

  groupTour: [{
    citizenship: 'PRICING_FOREIGN',
    price: '79 USD / 2150 UAH'
  }, {
    citizenship: 'PRICING_UKRAINIAN',
    price: '30 USD / 799 UAH'
  }],

  priceIncludes: ["PRICING_INCLUDES_0", "PRICING_INCLUDES_1", "PRICING_INCLUDES_2", "PRICING_INCLUDES_3"],

  schedule: ["PRICING_TOUR_SCHEDULE_0", "PRICING_TOUR_SCHEDULE_1", "PRICING_TOUR_SCHEDULE_2", "PRICING_TOUR_SCHEDULE_3", "PRICING_TOUR_SCHEDULE_4", "PRICING_TOUR_SCHEDULE_5"],
  
  itinerary: ["PRICING_ITINERARY_0", "PRICING_ITINERARY_1", "PRICING_ITINERARY_2"]
};

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'view/index.html',
            title: 'HOME_TITLE',
            description: 'HOME_DESCRIPTION',
            keywords: 'HOME_KEYWORDS'
      })
      .when('/pricing', {
        templateUrl: 'view/pricing.html',
        controller: 'price',
            title: 'TEST_TITLE',
            description: 'A Nice Description',
            keywords: 'Some, Keywords, Go, Here'
      })
      .when('/order', {
        templateUrl: 'view/order.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
    $locationProvider.html5Mode(true);
  }

]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeStart', function() {
    angular.element(document.querySelector('#page-loader')).removeClass('loaded');
  });
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    angular.element(document.querySelector('#page-loader')).addClass('loaded');
    $rootScope.title = current.$$route.title;
    $rootScope.description = current.$$route.description;
    $rootScope.keywords = current.$$route.keywords;
  });
}]);

app.config(function($translateProvider) {
  $translateProvider.translations('ru', {
    HOME_TITLE: 'Туры в чернобыль',
    HOME_DESCRIPTION: 'Заказать тур в Чернобыль',
    HOME_KEYWORDS: 'Чернобыль, тур в Чернобль',
    HOME: 'Главная',
    PRICING: 'Стоимость тура',
    ORDER: 'Заказать тур',
    EMAIL: 'E-mail',
    HEADER_BUTTON: 'ЗАКАЗАТЬ ТУР',
    HEADER_BUTTON_PRICING: 'СТОИМОСТЬ ТУРА',
  //  HOME_MAINTEXT: 'Если вы любитель различных авантюр, вам нравится все неординарное и мистическое, тогда вы точно не откажетесь от возможности побывать в Зоне Отчуждения. Путешествие во глубь другого мира, в котором когда-то кипела жизнь, подарит вам неистовые эмоции и осознание того, что человечество должно быть внимательным к развитию новых технологий, которые, к сожалению, иногда приводят к масштабным катастрофам. Наша компания Chernobyl Now поможет вам оформить тур в Чернобыль и подготовить всю необходимую документацию. Благодаря нам, вы сможете насладиться пейзажами Полесского края, прогуляться по чудесному городу Припять и ощутить жаль и вечную тишину покинутого уголка Украины. Вы на собственные глаза увидите заброшенные дома, улицы и старую технику, которые сейчас считаются мировыми экспонатами. Чернобыль бил признан самым экзотическим местом для туризма, так что не отказывайте себе в удовольствии получить незабываемые впечатления на всю жизнь. Зона Отчуждения того стоит!',
    GALLERY_ENTRANCE: 'Контрольно-пропускной пункт в зону отчуждения',
    GALLERY_DUGARADAR: 'Дуга советская загоризонтная радиолокационная станция',
    GALLERY_THENEWSAFECONFINEMENT: 'Укрытие-2 изоляционное арочное сооружение',
    GALLERY_ABANDONEDLIVINGBLOCKS: 'Заброшенные дома в городе Припять',
    ORDER_HEADING: 'Заказать тур в Чернобыль',
    ORDER_WARNING_HEADING: 'ВНИМАНИЕ!',
    ORDER_WARNING_1: 'Будьте очень внимательны при вводе паспортных данных, особенно Фамилии, Имени, серия, номер паспорта и даты рождения.',
    ORDER_WARNING_2: 'Учтите, что Ваша ошибка при заполнении этих рубрик может привести к тому, что, доехав до КПП Чернобыльской Зоны, Вы не будете впущены в нее службой охраны.',
    ORDER_EMAIL: 'E-mail',
    ORDER_NAME: 'Полные имя и фамилия',
    ORDER_PASSPORT: 'Серия и Номер паспорта',
    ORDER_CITIZENSHIP: 'Гражданство',
    ORDER_DATEOFBIRTH: 'Дата рождения',
    ORDER_PHONE: 'Телефон',
    ORDER_TOURLIST: 'Перечень объектов, которые предполагается посетить',
    ORDER_TOURLIST_OPTION_1: 'Мемориал героям-чернобыльцам (АПК Чернобыльской АЭС)',
    ORDER_TOURLIST_OPTION_2: 'Обводной канал',
    ORDER_TOURLIST_OPTION_3: 'Смотровая площадка объекта "Укрытие"',
    ORDER_TOURLIST_OPTION_4: 'Обзор г. Припять: отель “Полесье”, стадион, школа, бассейн, больница, главная площадь',
    ORDER_TOURLIST_OPTION_5: 'Объект «Чернобыль-2»',
    ORDER_TOURLIST_OPTION_6: 'Обзор м. Чернобыль: мемориал “Тем, кто спас мир”, Свято-Ильинский храм, Парк Славы.',
    ORDER_TYPEOFTRAVEL: 'Тип поездки',
    ORDER_INDIVIDUALTOUR: 'Индивидуальный тур',
    ORDER_GROUPTOUR: 'Групповой тур',
    ORDER_DATEOFTOUR: 'Дата тура',
    ORDER_GROUTOURLIST: 'Введите данные всех участников группового тура \n (Имя и фамилия, номер и серия паспорта, гражданство, дата рождения)',
    ORDER_SUBMIT: 'Заказать тур',
    PRICING_HEADING: 'Стоимость тура в Чернобыль',
    PRICING_DESCRIPTION: 'Стоимость программы рассчитывается исходя из количества туристов. Мероприятия из программы могут менять последовательность.',
    PRICING_INDIVIDUAL: 'Индивидуальные туры',
    PRICING_GROUP: 'Групповые туры',
    PRICING_PERSON: 'чел.',
    PRICING_FOREIGN: 'Иностранные граждане',
    PRICING_UKRAINIAN: 'Украинские граждане',
    PRICING_CIS: 'Гражданам стран СНГ',
    PRICING_EVERYDAY: 'каждый день',
    PRICING_CALENDAROFTOURS_HEADING: 'Календарь туров',
    PRICING_INCLUDES_HEADING: 'В стоимость включено',
    PRICING_INCLUDES_0: 'Подготовка разрешительной документации, необходимой для посещения Зона отчуждения Чернобыльской АЭС',
    PRICING_INCLUDES_1: 'Трансфер и сопровождение по всему маршруту',
    PRICING_INCLUDES_2: 'Экскурсионная программа внутри зоны с сертифицированным гидом',
    PRICING_INCLUDES_3: 'Страховка',
    PRICING_ITINERARY_HEADING: 'Программа тура в Чернобыль на 1 день',
    PRICING_ITINERARY_0: '08:00 - Выезд из Киева в Чернобыльскую зону',
    PRICING_ITINERARY_1: '10:00-16:30 - Экскурсия в Чернобыльскую зону',
    PRICING_ITINERARY_2: '17:00-19:00 - Возвращение в Киев',
    PRICING_TOUR_SCHEDULE_0: 'Выезд из Киева с Южного терминала Ж/Д вокзала (ул.Г.Кирпы 3, ориентир ресторан «Сушия») в сопровождении сертифицированного гида. ',
    PRICING_TOUR_SCHEDULE_1: 'Проверка документов, автотранспорта и вещей на КПП «Дитятки». Краткий курс обучения по поведению в радиационно-опасной местности, по применению средств защиты во время экскурсии в Чернобыль. Посещение сел Залесье и Копачи: осмотр уцелевших зданий. Обзорная экскурсия по городу Чернобыль. ',
    PRICING_TOUR_SCHEDULE_2: 'Поездка в десятикилометровую зону через блок-пост «Лелев»: въезд в 10-километровую зону – дезактивированный Рыжий Лес на месте западного радиоактивного следа от первого, самого мощного выброса от взрыва 4-го энергоблока. Вы будете находиться рядом с главным "закрытым" объектом зоны!',
    PRICING_TOUR_SCHEDULE_3: 'Экскурсия в Припять – "город-призрак". Припять, покинутый жителями тридцать лет назад: "чёртово колесо"; детский сад и школа, городской бассейн, стадион, кинотеатр, пристань с затопленным причалом; здание горисполкома – первый штаб ликвидации последствий аварии; отель "Полісся", где был наблюдательный пункт корректировки вертолетных операций над руиной 4-го реактора. ',
    PRICING_TOUR_SCHEDULE_4: 'секретный объект Чернобыль-2 Гигантские антенны радара "ДУГА-1", секретный городок Чернобыль-2, обеспечивавший работоспособность антенн загоризонтного слежения за запуском баллистических ракет. ',
    PRICING_TOUR_SCHEDULE_5: 'По желанию экологически чистый обед, предварительно проверенные дозиметром продукты. Дозиметрический контроль при выезде из зоны.',
  });
  $translateProvider.translations('en', {
    HOME_TITLE: 'Tour to Chernobyl',
    HOME_DESCRIPTION: 'Best tours for Chernobyl',
    HOME_KEYWORDS: 'Chernobyl, tour to Chernobyl',
    HOME: 'Main',
    PRICING: 'Tour cost',
    ORDER: 'Book a tour',
    EMAIL: 'E-mail',
    HEADER_BUTTON: 'Book a tour',
    HEADER_BUTTON_PRICING: 'TOUR COST',
  //  HOME_MAINTEXT: 'Remote place, mysterious atmosphere combined with picturesque views- is it something that appeals to you? If yes, then you should definitely visit Chernobyl zone which will make you feel thrilled, anxious and delighted. Chernobyl is located on the bank of the river Pripyat and is surrounded with deep forests, gorgeous landscapes and eternal silence, that is buried here for good. There you can see a town with its abandoned houses, old buildings and forgotten streets. Our company is going to make sure that this trip will be a long lasting memory for you.',
    GALLERY_ENTRANCE: 'ENTRANCE TO THE CHERNOBYL EXCLUSION ZONE AT CHECKPOINT',
    GALLERY_DUGARADAR: 'DUGA RADAR WAS A SOVIET OVER-THE-HORIZON (OTH) RADAR SYSTEM',
    GALLERY_THENEWSAFECONFINEMENT: 'THE NEW SAFE CONFINEMENT (NSC OR NEW SHELTER)',
    GALLERY_ABANDONEDLIVINGBLOCKS: 'ABANDONED LIVING BLOCKS IN PRIPYAT',
    ORDER_HEADING: 'Book a tour to Chernobyl',
    ORDER_WARNING_HEADING: 'WARNING!',
    ORDER_WARNING_1: 'Be very careful when entering passport data, especially name, surname, Series, passport number and date of birth.',
    ORDER_WARNING_2: 'Note that your error in filling these categories may lead to the fact that, before reaching the checkpoint Chornobyl Zone, you will not be let in her service protection.',
    ORDER_EMAIL: 'E-mail',
    ORDER_NAME: 'Your Name and Surname',
    ORDER_PASSPORT: 'Series and passport number',
    ORDER_CITIZENSHIP: 'Citizenship',
    ORDER_DATEOFBIRTH: 'Date of birth',
    ORDER_PHONE: 'Phone',
    ORDER_TOURLIST: 'The list of objects that are supposed to visit',
    ORDER_TOURLIST_OPTION_1: 'Memorial to heroes of Chernobyl (Chornobyl NPP APC)',
    ORDER_TOURLIST_OPTION_2: 'A bypass channel',
    ORDER_TOURLIST_OPTION_3: 'The observation deck of the “Shelter”',
    ORDER_TOURLIST_OPTION_4: 'Review of. Pripyat: Hotel “Polesie”, stadium, school, swimming pool, hospital, the main city square',
    ORDER_TOURLIST_OPTION_5: 'Object «Chernobyl-2»',
    ORDER_TOURLIST_OPTION_6: 'Overview of the city. Chernobyl: memorial “To those who saved the world”, St. Elias church, Park of Glory.',
    ORDER_TYPEOFTRAVEL: 'Type of travel',
    ORDER_INDIVIDUALTOUR: 'Individual tour',
    ORDER_GROUPTOUR: 'Group tour',
    ORDER_DATEOFTOUR: 'Date of tour',
    ORDER_GROUTOURLIST: 'Enter all members of a group tour \n (The full name, passport number and series, nationality, date of birth)',
    ORDER_SUBMIT: 'Book a tour',
    PRICING_HEADING: 'The cost of the tour to Chernobyl',
    PRICING_DESCRIPTION: 'The program cost is calculated based on the number of tourists. Activities of the program can change the sequence.',
    PRICING_INDIVIDUAL: 'Individual tours',
    PRICING_PERSON: 'person',
    PRICING_FOREIGN: 'Foreign citizens',
    PRICING_GROUP: 'Group tours',
    PRICING_UKRAINIAN: 'Ukrainian citizens',
    PRICING_CIS: 'Citizens of the CIS countries',
    PRICING_EVERYDAY: 'every day',
    PRICING_CALENDAROFTOURS_HEADING: 'Calendar of tours',
    PRICING_INCLUDES_HEADING: 'The price includes',
    PRICING_INCLUDES_0: 'Organization of permits required to visit Zone',
    PRICING_INCLUDES_1: 'Transfer and maintenance throughout the route',
    PRICING_INCLUDES_2: 'Sightseeing in area of certified hipom',
    PRICING_INCLUDES_3: 'Insurance',
    PRICING_ITINERARY_HEADING: 'Itinerary in Chernobyl in 1 day',
    PRICING_ITINERARY_0: '08:00 - Departure from Kyiv to the Chernobyl zone',
    PRICING_ITINERARY_1: '10:00-16:30 - Excursion to the Chornobyl zone',
    PRICING_ITINERARY_2: '17:00-19:00 - Return to Kyiv',
    PRICING_TOUR_SCHEDULE_0: 'Departure from Kyiv from the South terminal / railway station (3 ul.H.Kirpy, a landmark restaurant "Sushiya") accompanied by a certified guide.',
    PRICING_TOUR_SCHEDULE_1: 'Verification of documents, vehicles and goods at checkpoints "Dityatki." A short course of conduct in radiation-dangerous areas for the application of remedies during the tour in the city. Chernobyl. Visiting villages and Zalissia Kopachi: Review surviving buildings. City tour of Chernobyl.',
    PRICING_TOUR_SCHEDULE_2: 'Drive a ten-zone through the checkpoint "Leliv": enter the 10-kilometer zone - Red Forest deactivated in place west radioactive trace the first, most powerful release of the explosion of the 4th power unit. You will be near the main "closed" subject area!',
    PRICING_TOUR_SCHEDULE_3: 'Walk in. Pripyat - "ghost town." Pripyat, abandoned by residents over thirty years ago, "Ferris wheel"; kindergarten and school, city pool, stadium, theater, marina berth with flooded; the building of the city executive committee - the first headquarters of the accident; Hotel "Polesie", which was an observation post adjustment helicopter operations over the destroyed fourth reactor.',
    PRICING_TOUR_SCHEDULE_4: 'The secret facility giant Chernobyl-2 radar antenna "ARC-1", the secret town of Chernobyl-2, which provided performance antennas horizon tracking ballistic missile launches.',
    PRICING_TOUR_SCHEDULE_5: 'At the request polluting lunch, pre-tested dosimeter products. Dosimetry control at the exit from the zone.',
  });
  $translateProvider.translations('ua', {
    HOME: 'Головна',
    PRICING: 'Вартість туру',
    ORDER: 'Замовити тур',
    EMAIL: 'E-mail',
    HEADER_BUTTON: 'ЗАМОВИТИ ТУР',
    HEADER_BUTTON_PRICING: 'ВАРТІСТЬ ТУРУ',
    NAME: 'Повні ім\'я та прізвище',
    PASSPORT: 'Серія та номер паспорта',
    CITIZENSHIP: 'Громадянство',
    DATEOFBIRTH: 'Дата народження',
    PHONE: 'Телефон',
    TOURLIST: 'Перелік об’єктів, які передбачається відвідати',
    PRICING_HEADING: 'Вартість туру до Чорнобиля',
    PRICING_DESCRIPTION: 'Вартість програми розраховується виходячи з кількості туристів. Заходи з програми можуть змінювати послідовність.',
    PRICING_INDIVIDUAL: 'Індивідуальні тури',
    PRICING_GROUP: 'Групові тури',
    PRICING_PERSON: 'люд.',
    PRICING_FOREIGN: 'Іноземні громадяни',
    PRICING_UKRAINIAN: 'Українські громадяни',
    PRICING_CIS: 'Громадянам країн СНД',
  });
  $translateProvider.useSanitizeValueStrategy('escape');
});

app.controller('header', function($scope) {
  $scope.title = "";

});

app.controller('menu', ['$scope', '$translate', '$cookies', function($scope, $translate, $cookies) {

  var defaultLanguage = "";
  var cookieLanguage = $cookies.get('lang');
  if (cookieLanguage) 
  {
    defaultLanguage = cookieLanguage;
  } else {
    var userLang = navigator.language || navigator.userLanguage;
    defaultLanguage = userLang.split('-')[0];
    if (!defaultLanguage)
      defaultLanguage = "en";
  }

  $scope.mainMenu = menu;

  $translate.use(defaultLanguage);

  $scope.changeLanguage = function(langKey) {
    $translate.use(langKey);
    setLangStyle();
    $cookies.put('lang', $translate.use());
  }

  function setLangStyle() {
    if ($translate.use() == "ru") {
      $scope.ruLangIcone = {
        opacity: 0.3,
        cursor: 'default'
      };
      $scope.uaLangIcone = "";
      $scope.enLangIcone = "";
    }
    if ($translate.use() == "ua") {
      $scope.ruLangglobFooIcone = "";
      $scope.uaLangIcone = {
        opacity: 0.3,
        cursor: 'default'
      };
      $scope.enLangIcone = "";
    }
    if ($translate.use() == "en") {
      $scope.ruLangIcone = "";
      $scope.uaLangIcone = "";
      $scope.enLangIcone = {
        opacity: 0.3,
        cursor: 'default'
      };
    }
  }
  setLangStyle();
}]);

app.controller('form', function($scope, $http) {
  $scope.order = {};
  
  
  $scope.changeTourType = function() {
    ($scope.order.tourtype == "group") ? $scope.showGroupList = true : $scope.showGroupList = false;
  };
  
  $scope.showGroupList = false;
  $scope.showForm = true;
  $scope.showSuccess = false;

  $scope.submitForm = function() {
    $scope.test = $scope.order;
    console.log($scope.order);
    $http({
      method: 'POST',
      url: 'test.php',
      data: $scope.order,
    }).then(function successCallback(response) {
      $scope.showForm = false;
      $scope.showSuccess = true;
      console.log(response);
    }, function errorCallback(response) {
      console.log("error");
    });
    
  };

});

app.controller('price', ['$scope', '$translate', function($scope, $translate) {

  $scope.pricing = pricing.idividualTour;
  $scope.pricingGroup = pricing.groupTour;
  $scope.priceIncludes = pricing.priceIncludes;
  $scope.tourItinenary = pricing.itinerary;
  $scope.schedule = pricing.schedule;

  $scope.showDates = toursDates;
  $scope.showDates($translate.use());

}]);