let requestUrl = 'https://www.balldontlie.io/api/v1/teams';


function randInt(num) {
  return Math.floor(Math.random() * num);
}

fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    let randNum = randInt(myJson.data.length);

    document.getElementById("name").innerHTML = `Name: ${myJson.data[randNum].full_name}`;

    document.getElementById("division").innerHTML = `Division: ${myJson.data[randNum].division}`;

    document.getElementById("city").innerHTML = `City: ${myJson.data[randNum].city}`;

    document.getElementById("conference").innerHTML = `Conference: ${myJson.data[randNum].conference}`;
  }

  );