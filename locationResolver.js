const APP = document.querySelector("#app");

const locationResolver = (location) => {
  // console.log(location);
  switch (location) {
    case "#/users/":
      $.ajax({
        type: "POST",
        url: "/users",
        data: location,
        success: function (response) {
          APP.innerHTML = response;
        },
      });
      break;
    case "#/login/":
      console.log(location);
      $.ajax({
        type: "POST",
        url: "/login",
        data: location,
        success: function (response) {
          APP.innerHTML = response;
        },
      });
      break;
    case "#/main":
      console.log(location);
      $.ajax({
        type: "POST",
        url: "/main",
        data: location,
        success: function (response) {
          APP.innerHTML = response;
        },
      });
      break;
  }
};

window.addEventListener("load", () => {
  const location = window.location.hash;
  console.log(location);
  if (location) {
    locationResolver(`${location}/`);
  }
});
