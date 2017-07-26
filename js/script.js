function setToggle() {
  $("#bs-example-navbar-collapse-1").attr("data-toggle", "collapse").attr("data-target", "#bs-example-navbar-collapse-1");
}

function toursDates(lang) {

  if (lang == "ru") {
    (function(factory) {
      if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["../widgets/datepicker"], factory);
      } else {

        // Browser globals
        factory(jQuery.datepicker);
      }
    }(function(datepicker) {

      datepicker.regional.ru = {
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
          "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
          "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
      };
      datepicker.setDefaults(datepicker.regional.ru);

      return datepicker.regional.ru;

    }));
  }

  for (i = 0; i < 3; i++) {
    var d = new Date();
    d.setMonth(d.getMonth() + i);
    $("#dates").append('<div id="calendar-' + i + '" class="col-md-4"></div>');
    $("#calendar-" + i).datepicker({
      firstDay: 8,
      defaultDate: d,
      changeMonth: false,
      changeYear: false,
      stepMonths: false,
      beforeShowDay: function(date) {
        var groupTour = date.getDay() == 5 || date.getDay() == 6 || date.getDay() == 0;
        return [true, groupTour ? 'calendar-grouptours' : 'calendar-idividualtours'];
      }
    });
  }
};