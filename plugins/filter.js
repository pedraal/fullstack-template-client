import Vue from "vue";

Vue.filter("capitalize", val => val.toUpperCase());

Vue.filter(
  "capitalizeFirstLetter",
  val => val.substring(0, 1).toUpperCase() + val.substring(1, val.length)
);

Vue.filter("summarize", val => val.substring(0, 150) + "...");
Vue.filter("summarizeLonger", val => val.substring(0, 350) + "...");

Vue.filter("MonthYearFormatFr", val => {
  let date = new Date(val);
  var options = {
    year: "numeric",
    month: "long"
  };
  return date.toLocaleDateString("fr-FR", options);
});
Vue.filter("DayMonthFormatFr", val => {
  let date = new Date(val);
  var options = {
    day: "numeric",
    month: "short"
  };
  return date.toLocaleDateString("fr-FR", options);
});
Vue.filter("BasicDateFormatFr", val => {
  let date = new Date(val);
  var options = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
  };
  return date.toLocaleDateString("fr-FR", options);
});

Vue.filter("HourMinuteFormatFr", val => {
  let date = new Date(val);
  return `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}h${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;
});

Vue.filter("fullDateFr", val => {
  let date = new Date(val);
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString("fr-FR", options);
});
