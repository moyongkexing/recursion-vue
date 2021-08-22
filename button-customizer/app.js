const app = new Vue({
  el: "#app",
  data() {
    return {
      buttonText: "編集可能な文字列",
      disabled: false,
      color: "black",
      backgroundColor: "white",
      borderRadius: "0",
      opacity: "1.0",
      fontSize: "30",
    }
  },
  computed: {
    styleObject() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius + "%",
        opacity: this.opacity,
        fontSize: this.fontSize + "px",
      }
    }
  }
})
