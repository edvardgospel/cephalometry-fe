import AngleCalcualator from "./angle-calculator.js";
import DistanceCalculator from "./distance-calculator.js";
import JsPDF from "jspdf"
import html2canvas from "html2canvas";
import { store } from "../store/store.js";
window.html2canvas = html2canvas;

export default {
  savePDF() {
    const personalData = this.getPersonalData();
    const growthForecast = this.getGrowthForecast();
    const angles = this.getCephalometryAngles();
    const distances = this.getCephalometryDistances();

    var pdf = new JsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();

    pdf.setTextColor("#2c3e50");

    pdf.setFontSize(22);
    pdf.text("Cephalometry", pageWidth / 2, 15, "center");

    pdf.setFontSize(15);
    pdf.text("Personal data", 10, 28);

    var currentHeight = 30;
    pdf.setFontSize(12);
    pdf.text("Name: " + personalData.name, 12, currentHeight += 5);
    pdf.text("Address: " + personalData.address, 12, currentHeight += 5);
    pdf.text("Phone: " + personalData.phone, 12, currentHeight += 5);
    pdf.text("Gender: " + personalData.gender, 12, currentHeight += 5);
    pdf.text("Doctor: " + personalData.doctor, 12, currentHeight += 5);
    pdf.text("Birthdate: " + personalData.birthDate, 12, currentHeight += 5);
    pdf.text("X-ray date: " + personalData.xRayDate, 12, currentHeight += 5);

    pdf.setFontSize(15);
    pdf.text("Angles", pageWidth / 2 - 12, 28);
    
    pdf.setFontSize(12);
    currentHeight = 30;
    for (let angle of angles) {
      pdf.text(angle.name + ": " + angle.angle.toFixed(1), pageWidth / 2 - 10, currentHeight += 5);
    }

    pdf.setFontSize(15);
    pdf.text("Distances", pageWidth / 1.4 - 2, 28);

    pdf.setFontSize(12);
    currentHeight = 30;
    for (let distance of distances) {
      pdf.text(distance.name + ": " + distance.distance.toFixed(1), pageWidth / 1.4, currentHeight += 5);
    }
    pdf.text("Index: " + (distances[distances.length - 2].distance / distances[distances.length - 1].distance * 100).toFixed(1) + "%", pageWidth / 1.4, currentHeight += 5); //TODO!!

    pdf.setFontSize(15);
    pdf.text("Growth forecast", pageWidth / 1.4 - 2, currentHeight += 10);
    
    pdf.setFontSize(12);
    pdf.text("Modified ANB: " + growthForecast.newANB, pageWidth / 1.4, currentHeight += 7);
    pdf.text("Modified ML-NL: " + growthForecast.newMLNL, pageWidth / 1.4, currentHeight += 5);
    pdf.text("Modified N: " + growthForecast.newANB, pageWidth / 1.4, currentHeight += 5);
    pdf.text("Condylus: " + growthForecast.condyl, pageWidth / 1.4, currentHeight += 5);
    pdf.text("Canalis mandibula: " + growthForecast.canalisMand, pageWidth / 1.4, currentHeight += 5);
    pdf.text("Mandibula: " + growthForecast.mandibula, pageWidth / 1.4, currentHeight += 5);

    const promises = []
    promises.push(html2canvas(this.getCephalometricImageHtmlElement()));
    promises.push(html2canvas(this.getHarmonyTableHtmlElement()));
    Promise.all(promises).then(canvas => {
      pdf.addImage(canvas[0], "JPEG", 10, currentHeight += 15, canvas[0].width / 5, canvas[0].height / 5);
      pdf.addPage();
      pdf.addImage(canvas[1], "JPEG", 10, 10, canvas[1].width / 5, canvas[1].height / 5);
      pdf.text("Remarks: " + (personalData.remarks ? personalData.remarks : "-"), 10, canvas[1].height / 5 + 20);
      pdf.save(personalData.name.replace(" ", "_") + "_" + personalData.xRayDate + ".pdf");
    });
  },

  getPersonalData() {
    return store.getters.PERSONAL_DATA;
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

  getCephalometricImageHtmlElement() {
    return store.getters.CEPHALOMETRIC_IMAGE_HTML_ELEMENT;
  },

  getHarmonyTableHtmlElement() {
    return store.getters.HARMONY_TABLE_HTML_ELEMENT;
  },
}