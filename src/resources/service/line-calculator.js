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
    let gonion = cephalometryCoordinates.find(coord => coord.name === "Go");
    let articulare = cephalometryCoordinates.find(coord => coord.name === "Ar");
    let pterygomaxillare = cephalometryCoordinates.find(coord => coord.name === "PNS");
    let spina = cephalometryCoordinates.find(coord => coord.name === "ANS");
    let incisionSuperius = cephalometryCoordinates.find(coord => coord.name === "UI");
    let apicaleSuperius = cephalometryCoordinates.find(coord => coord.name === "UIA");
    let incisionInferius = cephalometryCoordinates.find(coord => coord.name === "LI");
    let apicaleInferius = cephalometryCoordinates.find(coord => coord.name === "LIA");
    let pogonionSoft = cephalometryCoordinates.find(coord => coord.name === "Pg'");
    let upperLip = cephalometryCoordinates.find(coord => coord.name === "UL");
    let noseBase = cephalometryCoordinates.find(coord => coord.name === "Prn")

    lines.push(getCephalometryLine("NSL", nasion, sella));
    lines.push(getCephalometryLine("NL", pterygomaxillare, spina));
    lines.push(getCephalometryLine("ML", gnathion, gonion));
    lines.push(getCephalometryLine("NAL", nasion, a));
    lines.push(getCephalometryLine("NBL", nasion, b));
    lines.push(getCephalometryLine("NPgL", nasion, pogonion));
    lines.push(getCephalometryLine("I", incisionSuperius, apicaleSuperius));
    lines.push(getCephalometryLine("Ī", incisionInferius, apicaleInferius));
    lines.push(getCephalometryLine("HL", pogonionSoft, upperLip));
    lines.push(getCephalometryLine("EL", pogonionSoft, noseBase));
    lines.push(getCephalometryLine("Ar-Go", articulare, gonion));
    lines.push(getCephalometryLine("S-Ba", sella, basion));
    lines.push(getCephalometryLine("Gn-Pg", gnathion, pogonion));
    lines.push(getCephalometryLine("Pg-B", pogonion, b));
    lines.push(getCephalometryLine("ANS-A", spina, a));
    return lines;
  }
}

function getLine(a, b) {
  return {
    ax: a.x,
    ay: a.y,
    bx: b.x,
    by: b.y
  };
}

function getCephalometryLine(name, a, b,) {
  return {
    name: name,
    line: getLine(a, b)
  }
}