export default {
  getLines(cephalometryCoordinates) {
    var lines = [];
    let nasion = cephalometryCoordinates.find(coord => coord.name === "N");
    let sella = cephalometryCoordinates.find(coord => coord.name === "S");
    let a = cephalometryCoordinates.find(coord => coord.name === "A");
    let b = cephalometryCoordinates.find(coord => coord.name === "B");
    let pogonion = cephalometryCoordinates.find(coord => coord.name === "Pg");
    let gnathion = cephalometryCoordinates.find(coord => coord.name === "Gn");
    let basion = cephalometryCoordinates.find(coord => coord.name === "Ba");
    let gonion = cephalometryCoordinates.find(coord => coord.name === "tgo");
    let articulare = cephalometryCoordinates.find(coord => coord.name === "Ar");
    let pterygomaxillare = cephalometryCoordinates.find(coord => coord.name === "PNS");
    let spina = cephalometryCoordinates.find(coord => coord.name === "ANS");
    let incisionSuperius = cephalometryCoordinates.find(coord => coord.name === "UI");
    let apicaleSuperius = cephalometryCoordinates.find(coord => coord.name === "UIA");
    let incisionInferius = cephalometryCoordinates.find(coord => coord.name === "LI");
    let apicaleInferius = cephalometryCoordinates.find(coord => coord.name === "LIA");
    let pogonionSoft = cephalometryCoordinates.find(coord => coord.name === "Pg soft");
    let upperLip = cephalometryCoordinates.find(coord => coord.name === "UL");
    let noseBase = cephalometryCoordinates.find(coord => coord.name === "Tang")

    lines.push(this.getCephalometryLine("NSL", nasion, sella));
    lines.push(this.getCephalometryLine("NL", pterygomaxillare, spina));
    lines.push(this.getCephalometryLine("ML", gnathion, gonion));
    lines.push(this.getCephalometryLine("NAL", nasion, a));
    lines.push(this.getCephalometryLine("NBL", nasion, b));
    lines.push(this.getCephalometryLine("NPgL", nasion, pogonion));
    lines.push(this.getCephalometryLine("I", incisionSuperius, apicaleSuperius));
    lines.push(this.getCephalometryLine("Ī", incisionInferius, apicaleInferius));
    lines.push(this.getCephalometryLine("HL", pogonionSoft, upperLip));
    lines.push(this.getCephalometryLine("EL", pogonionSoft, noseBase));
    lines.push(this.getCephalometryLine("Ar-tgo", articulare, gonion));
    lines.push(this.getCephalometryLine("S-Ba", sella, basion));
    return lines;
  },

  getLine(a, b) {
    return {
      ax: a.x,
      ay: a.y,
      bx: b.x,
      by: b.y
    };
  },

  getCephalometryLine(name, a, b,) {
    return {
      name: name,
      line: this.getLine(a, b)
    }
  }
}