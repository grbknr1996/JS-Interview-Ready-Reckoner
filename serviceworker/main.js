//Make sure service workers are supported
if ("serviceWorker" in navigator) {
  console.log("Service worker Supoorted");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceworker.js")
      .then((reg) => console.log("service worker: registered"))
      .catch((err) => console.log(`service worker error:${err}`));
  });
}
