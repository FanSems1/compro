import ContactBg from "Assets/contact.png";

const styles = {
  Container: {
    py: {
      xs: "2em",
      md: "5em",
    },
    position: "relative",
    backgroundImage: (theme) =>
      `url("${ContactBg}")`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
  },
};

export default styles;
