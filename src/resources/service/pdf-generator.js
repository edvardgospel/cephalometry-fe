import JsPDF from "jspdf"
import html2canvas from "html2canvas";
import { store } from "../store/store.js";
window.html2canvas = html2canvas;

export default {
  savePDF() {
    const personalData = getPersonalData();
    const growthForecast = getGrowthForecast();
    const angles = getCephalometryAngles();
    const distances = getCephalometryDistancesInMM();
    const pdf = new JsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();

    var currentHeight = 15;
    var currentWidth = pageWidth / 2;
    pdf.setTextColor("#2c3e50");
    pdf.setDrawColor("#2c3e50");
    pdf.setFontSize(22);
    pdf.text("Cephalometry", currentWidth, currentHeight, "center");


    //// Personal data ////
    currentHeight = 30;
    currentWidth = 22;
    pdf.setFontSize(15);
    pdf.text("Personal data", currentWidth - 2, currentHeight - 2);
    pdf.setFontSize(12);
    pdf.text(`Name: ${personalData.name}`, currentWidth, currentHeight += 5);
    pdf.text(`Address: ${personalData.address}`, currentWidth, currentHeight += 5);
    pdf.text(`Gender: ${personalData.gender}`, currentWidth, currentHeight += 5);
    pdf.text(`Phone: ${personalData.phone}`, currentWidth, currentHeight += 5);
    pdf.text(`Doctor: ${personalData.doctor}`, currentWidth, currentHeight += 5);
    pdf.text(`Birthdate: ${personalData.birthDate}`, currentWidth, currentHeight += 5);
    pdf.text(`X-ray date: ${personalData.xRayDate}`, currentWidth, currentHeight += 5);


    //// Angles ////
    currentHeight = 30;
    currentWidth = pageWidth / 2 - 10;
    pdf.setFontSize(15);
    pdf.text("Angles", currentWidth - 2, currentHeight - 2);
    pdf.setFontSize(12);
    for (let angle of angles) {
      if (angle.name.includes("Ī")) {
        pdf.text(`${angle.name.replace("Ī", "I")}: ${angle.angle.toFixed(1)}°`, currentWidth, currentHeight += 5);
      } else {
        pdf.text(`${angle.name}: ${angle.angle.toFixed(1)}°`, currentWidth, currentHeight += 5);
      }
      if (angle.name.includes("I-Ī")) {
        pdf.line(currentWidth, currentHeight + 0.5, currentWidth + 1.2, currentHeight + 0.5);
        pdf.line(currentWidth + 2.6, currentHeight - 3.4, currentWidth + 3.8, currentHeight - 3.4);
      }
      if (angle.name.includes("I-NA")) {
        pdf.line(currentWidth, currentHeight + 0.5, currentWidth + 1.2, currentHeight + 0.5);
      }
      if (angle.name.includes("Ī-NB")) {
        pdf.line(currentWidth, currentHeight - 3.4, currentWidth + 1.2, currentHeight - 3.4);
      }
    }


    //// Distances ////
    currentHeight = 30;
    currentWidth = pageWidth / 1.4;
    pdf.setFontSize(15);
    pdf.text("Distances", currentWidth - 2, currentHeight - 2);
    pdf.setFontSize(12);
    for (let distance of distances) {
      if (distance.name.includes("Ī")) {
        pdf.text(`${distance.name.replace("Ī", "I")}: ${distance.distance.toFixed(1)} mm`, currentWidth, currentHeight += 5);
      } else {
        pdf.text(`${distance.name}: ${distance.distance.toFixed(1)} mm`, currentWidth, currentHeight += 5);
      }
      if (distance.name.includes("I-NA")) {
        pdf.line(currentWidth, currentHeight + 0.5, currentWidth + 1.2, currentHeight + 0.5);
      }
      if (distance.name.includes("Ī-NB")) {
        pdf.line(currentWidth, currentHeight - 3.4, currentWidth + 1.2, currentHeight - 3.4);
      }
      if (distance.name.includes("Ī-NPg")) {
        pdf.line(currentWidth, currentHeight - 3.4, currentWidth + 1.2, currentHeight - 3.4);
      }
    }
    pdf.text(`Index: ${(distances[distances.length - 2].distance / distances[distances.length - 1].distance * 100).toFixed(1)}%`,
      currentWidth, currentHeight += 5); //TODO!!


    //// Growth forecast ////
    currentWidth = pageWidth / 1.4;
    pdf.setFontSize(15);
    pdf.text("Growth forecast", currentWidth - 2, currentHeight += 10);
    pdf.setFontSize(12);
    pdf.text(`Modified ANB: ${growthForecast.newANB}°`, currentWidth, currentHeight += 7);
    pdf.text(`Modified ML-NL: ${growthForecast.newMLNL}°`, currentWidth, currentHeight += 5);
    pdf.text(`Modified N: ${growthForecast.newN}°`, currentWidth, currentHeight += 5);
    pdf.text(`Condylus: ${growthForecast.condyl}`, currentWidth, currentHeight += 5);
    pdf.text(`Canalis mandibula: ${growthForecast.canalisMand}`, currentWidth, currentHeight += 5);
    pdf.text(`Mandibula: ${growthForecast.mandibula}`, currentWidth, currentHeight += 5);


    //// Images ////   
    const promises = [];
    promises.push(html2canvas(getCephalometricImageHtmlElement()));
    promises.push(html2canvas(getHarmonyTableHtmlElement()));
    Promise.all(promises).then(canvas => {
      var imageWidth = pageWidth - 60;
      var imageHeight = imageWidth * canvas[0].height / canvas[0].width
      pdf.addImage(canvas[0], "JPEG", 30, currentHeight += 10, imageWidth, imageHeight);
      pdf.addPage();
      imageHeight = imageWidth * canvas[1].height / canvas[1].width;
      pdf.addImage(canvas[1], "JPEG", 30, 10, imageWidth, imageHeight);
      pdf.text(`Remarks: ${personalData.remarks ? personalData.remarks : "-"}`, 20, imageHeight + 20);
      pdf.save(personalData.name.replace(" ", "_") + "_" + personalData.xRayDate + ".pdf");
    });
  }
}

function getPersonalData() {
  return store.getters.PERSONAL_DATA;
}

function getGrowthForecast() {
  return store.getters.GROWTH_FORECAST;
}

function getCephalometryAngles() {
  return store.getters.CEPHALOMETRY_ANGLES;
}

function getCephalometryDistancesInMM() {
  return store.getters.CEPHALOMETRY_DISTANCES_IN_MM;
}

function getCephalometricImageHtmlElement() {
  return store.getters.CEPHALOMETRIC_IMAGE_HTML_ELEMENT;
}

function getHarmonyTableHtmlElement() {
  return store.getters.HARMONY_TABLE_HTML_ELEMENT;
}
