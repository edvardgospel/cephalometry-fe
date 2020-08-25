export default {
  getAngles(cephalometryCoordinates) {
    var angles = [];
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
    let pogonionSoft = cephalometryCoordinates.find(coord => coord.name === "Pg soft");
    let upperLip = cephalometryCoordinates.find(coord => coord.name === "UL");

    angles.push(getCephalometryAngle("SNA", nasion, a, nasion, sella));
    angles.push(getCephalometryAngle("SNB", nasion, b,nasion, sella));
    var anb = getCephalometryAngle("ANB", nasion, a, nasion, b)
    if (getSign(nasion, b, a) < 0) {
      anb.angle = -Math.abs(anb.angle);
    }
    angles.push(anb);
    angles.push(getCephalometryAngle("SNPg", nasion, pogonion, nasion, sella));
    angles.push(getCephalometryAngle("SNGn", nasion, gnathion, nasion, sella));
    angles.push(getCephalometryAngle("NSBa", sella, nasion, sella, basion));
    angles.push(getCephalometryAngle("Gn-Go-Ar", gonion, articulare, gonion, gnathion));
    angles.push(getCephalometryAngle("N", gnathion, gonion, pogonion, b));
    angles.push(getCephalometryAngle("NL-NSL",  sella, nasion,pterygomaxillare, spina));
    angles.push(getCephalometryAngle("ML-NSL", sella, nasion, gonion, gnathion));
    angles.push(getCephalometryAngle("ML-NL", pterygomaxillare, spina, gonion, gnathion));
    angles.push(getCephalometryAngle("I-Ī", incisionInferius, apicaleInferius, incisionSuperius, apicaleSuperius));
    angles.push(getCephalometryAngle("I-NA", incisionSuperius, apicaleSuperius, a, nasion));
    angles.push(getCephalometryAngle("Ī-NB", nasion, b, incisionInferius, apicaleInferius));
    angles.push(getCephalometryAngle("H", b, nasion, pogonionSoft, upperLip));
    return angles;
  },

  getANB(cephalometryCoordinates) {
    let nasion = cephalometryCoordinates.find(coord => coord.name === "N");
    let a = cephalometryCoordinates.find(coord => coord.name === "A");
    let b = cephalometryCoordinates.find(coord => coord.name === "B");
    var anb = getCephalometryAngle("ANB", nasion, a, nasion, b)
    if (getSign(nasion, b, a) < 0) {
      anb.angle = -Math.abs(anb.angle);
    }
    return anb.angle;
  },

  getMLNL(cephalometryCoordinates) {
    let gnathion = cephalometryCoordinates.find(coord => coord.name === "Gn");
    let gonion = cephalometryCoordinates.find(coord => coord.name === "Go");
    let pterygomaxillare = cephalometryCoordinates.find(coord => coord.name === "PNS");
    let spina = cephalometryCoordinates.find(coord => coord.name === "ANS");
    return getCephalometryAngle("ML-NL", pterygomaxillare, spina, gonion, gnathion).angle;

  },

  getN(cephalometryCoordinates) {
    let b = cephalometryCoordinates.find(coord => coord.name === "B");
    let pogonion = cephalometryCoordinates.find(coord => coord.name === "Pg");
    let gnathion = cephalometryCoordinates.find(coord => coord.name === "Gn");
    let gonion = cephalometryCoordinates.find(coord => coord.name === "Go");
    return getCephalometryAngle("N", gnathion, gonion, pogonion, b).angle;
  }
}

function getCephalometryAngle(name, a1, a2, b1, b2) {
  return {
    name: name,
    angle: getAngle(a1, a2, b1, b2)
  }
}

function getAngle(a1, a2, b1, b2) {
  var dAx = a2.x - a1.x;
  var dAy = a2.y - a1.y;
  var dBx = b2.x - b1.x;
  var dBy = b2.y - b1.y;
  var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
  var degreeAngle = angle * (180 / Math.PI);
  return degreeAngle;
}

function getSign(a, b, p) {
  return (p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x);
}