const buttons = document.querySelectorAll(".button");
const body = document.body;

const title = document.querySelector("h1");

// console.log(title);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const but = e.target;
    console.log("Color is Changed");
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "blue":
        body.style.background = "linear-gradient(#2193b0, #6dd5ed)";
        title.style.color = "white";

        break;
      case "lush":
        body.style.background = "linear-gradient(#56ab2f, #a8e063)";

        title.style.color = "white";

        break;

      case "violet":
        body.style.background = "linear-gradient(#61045f, #aa076b)";

        title.style.color = "white";

        break;
      case "grey":
        body.style.background = "linear-gradient(#2c3e50, #bdc3c7)";

        title.style.color = "white";

        break;
      case "ocean-blue":
        body.style.background = "linear-gradient(45deg, #007BFF, #00CFFD)";
        title.style.color = "white";
        break;
      case "sunset-orange":
        body.style.background = "linear-gradient(45deg, #FF5733, #FFC300)";
        title.style.color = "white";
        break;

      case "purple-haze":
        body.style.background = "linear-gradient(45deg, #6F42C1, #D3A0FF)";
        title.style.color = "white";
        break;

      case "peach-puff":
        body.style.background = "linear-gradient(45deg, #FFDAB9, #FFB6C1)";
        title.style.color = "black";
        break;

      case "lime-green":
        body.style.background = "linear-gradient(45deg, #28A745, #7DFF00)";
        title.style.color = "white";
        break;

      case "rose-pink":
        body.style.background = "linear-gradient(45deg, #E83E8C, #F7A3B0)";
        title.style.color = "white";
        break;

      case "aqua":
        body.style.background = "linear-gradient(45deg, #20C997, #7FFFD4)";
        title.style.color = "black";
        break;

      case "crimson":
        body.style.background = "linear-gradient(45deg, #DC3545, #FF6F6F)";
        title.style.color = "white";
        break;
      default:
        break;
    }
  });
});
