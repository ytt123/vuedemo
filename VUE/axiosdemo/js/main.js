var app = new Vue({
  el: "#app",

  data: {
    city: "武汉",
    weatherList: [],
    hotCitys: ["北京", "上海", "广州", "深圳"],
  },
  methods: {
    search: function () {
      var that = this;
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((res) => {
          console.log(res?.data?.data?.forecast);
          that.weatherList = res?.data?.data?.forecast;
        })
        .catch((err) => {});
    },
    clickSearch: function (city) {
      this.city = city;
    },
  },
});
