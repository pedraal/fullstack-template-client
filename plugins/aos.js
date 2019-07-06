import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    offset: 200,
    easing: "linear",
    duration: 300
  });
};
