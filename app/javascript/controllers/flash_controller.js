import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="flash"
export default class extends Controller {
  connect() {
    this.element.classList.add("animate__animated", "animate__rubberBand");
    setTimeout(() => {
      this.element.classList.add("animate__zoomOut");
    }, 3000);
  }
}
