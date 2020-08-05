import AngleCalcualator from "./angle-calculator.js";
import DistanceCalculator from "./distance-calculator.js";
import LineCalculator from "./line-calculator.js";
import JsPDF from "jspdf"
import html2canvas from "html2canvas";
import { store } from "../store/store.js";
window.html2canvas = html2canvas;

export default {
  savePDF() {
    const personalData = this.getPersonalData();
    /* const coordinates = this.getCephalometryCoordinates();
    const growthForecast = this.getGrowthForecast();
    const angles = this.getCephalometryAngles();
    const distances = this.getCephalometryDistances();
    const lines = this.getCephalometryLines();*/
    var pdf = new JsPDF();
    const promises = []
    promises.push(html2canvas(this.getCephalometricImageHtmlElement()));
    promises.push(html2canvas(this.getHarmonyTableHtmlElement()));

    Promise.all(promises).then(canvas => {
      pdf.addImage(canvas[0], "JPEG", 10, 10, canvas[0].width / 10, canvas[0].height / 10);
      pdf.addImage(canvas[1], "JPEG", 10, canvas[0].height / 10, canvas[1].width / 10, canvas[1].height / 10);
      pdf.save(personalData.name.replace(" ", "_") + "_" + personalData.xRayDate + ".pdf");
    });
  },

  getPersonalData() {
    return store.getters.PERSONAL_DATA;
  },

  getCephalometryImage() {
    return store.getters.CEPHALOMETRIC_IMAGE;
  },

  getCephalometryCoordinates() {
    return store.getters.CEPHALOMETRY_COORDINATES;
  },

  getGrowthForecast() {
    return store.getters.GROWTH_FORECAST;
  },

  getCephalometryAngles() {
    return AngleCalcualator.getAngles(store.getters.CEPHALOMETRY_COORDINATES);
  },

  getCephalometryDistances() {
    return DistanceCalculator.getDistances(store.getters.CEPHALOMETRY_COORDINATES);
  },

  getCephalometryLines() {
    return LineCalculator.getLines(store.getters.CEPHALOMETRY_COORDINATES);
  },

  getCephalometricImageHtmlElement() {
    return store.getters.CEPHALOMETRIC_IMAGE_HTML_ELEMENT;
  },

  getHarmonyTableHtmlElement() {
    return store.getters.HARMONY_TABLE_HTML_ELEMENT;
  },
}