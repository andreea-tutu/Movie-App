import React from "react";

const RedirectPage = () => {
  React.useEffect(() => {
    window.location.replace("https://andreea-tutu.github.io/Movie-Fighter/");
    window.open(
      "https://andreea-tutu.github.io/Movie-Fighter/",
      "_blank",
      "noreferrer"
    );
  }, []);
};

export default RedirectPage;
