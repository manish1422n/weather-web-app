// 72bf5c4e77a1b5f99079bd22c5b79725     pawan key

//  https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=72bf5c4e77a1b5f99079bd22c5b79725

/*https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric  for temp in celsius */

let timebox = () => {
  const fulldate = new Date();

  const hour = fulldate.getHours();
  hourid.innerHTML = hour;

  const minutes = fulldate.getMinutes();
  minutesid.innerHTML = minutes;

  const days = fulldate.getDay();
  const arr = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  // switch (days) {
  //   case 0:
  //     day = "sunday";
  //     break;
  //   case 1:
  //     day = "monday";
  //     break;
  //   case 2:
  //     day = "tuesday";
  //     break;
  //   case 3:
  //     day = "wednesday";
  //     break;
  //   case 4:
  //     day = "thursday";
  //     break;
  //   case 5:
  //     day = "friday";
  //     break;
  //   case 6:
  //     day = "saturday";
  //     break;
  // }

  dayid.innerHTML = arr[days];

  const date = fulldate.getDate();
  dateid.innerHTML = date;

  const months = fulldate.getMonth();
  switch (months) {
    case 0:
      month = "january";
      break;
    case 1:
      month = "february";
      break;
    case 2:
      month = "march";
      break;
    case 3:
      month = "april";
      break;
    case 4:
      month = "may";
      break;
    case 5:
      month = "june";
      break;
    case 6:
      month = "july";
      break;
    case 7:
      month = "august";
      break;
    case 8:
      month = "september";
      break;
    case 9:
      month = "october";
      break;
    case 10:
      month = "november";
      break;
    case 11:
      month = "december";
      break;
  }
  monthid.innerHTML = month;
};

timebox_interval = setInterval(timebox, 1000);

const btn = document.getElementById("btn1");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputvalue = document.getElementById("search-input").value;

  async function fun() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=72bf5c4e77a1b5f99079bd22c5b79725&units=metric`
    );
    const data = await response.json();
    console.log(data);

    function imgfetch() {
      const id = data.weather[0].id;
      let icon = data.weather[0].icon;
      console.log(icon);

      const haze = "./imges/haze.svg";
      const clear = "./imges/clear.svg";
      const cloud = "./imges/cloud.svg";
      const rain = "./imges/rain.svg";
      const snow = "./imges/snow.svg";
      const storm = "./imges/storm.svg";

      if (id == 800) {
        caseimg.src = clear;
      } else if (id >= 200 && id <= 232) {
        caseimg.src = storm;
      } else if (id >= 600 && id <= 622) {
        caseimg.src = snow;
      } else if (id >= 701 && id <= 781) {
        caseimg.src = haze;
      } else if (id >= 801 && id <= 804) {
        caseimg.src = cloud;
      } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
        caseimg.src = rain;
      } else {
        caseimg.src = ``;
      }
    }

    imgfetch();

    let description = data.weather[0].description;
    casetxt.innerHTML = description;

    let temp = data.main.temp;
    updated_temp = Math.round(temp);
    main_tempid.innerHTML = updated_temp;

    let mintemp = data.main.temp_min;
    updated_mintemp = Math.round(mintemp);
    min_tempid.innerHTML = updated_mintemp;

    let maxtemp = data.main.temp_max;
    updated_maxtemp = Math.round(maxtemp);
    max_tempid.innerHTML = updated_maxtemp;

    let speed = data.wind.speed;
    speedid.innerHTML = speed;

    let visibility = data.visibility;
    updated_visibility = visibility / 1000;
    visibilityid.innerHTML = updated_visibility;

    let humidity = data.main.humidity;
    humidityid.innerHTML = humidity;

    let pressure = data.main.pressure;
    pressureid.innerHTML = pressure;

    let city = data.name;
    citynameid.innerHTML = city;

    let country = data.sys.country;
    countryid.innerHTML = country;
  }
  fun();
});
