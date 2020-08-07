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

    angles.push(getCephalometryAngle("SNA", nasion, sella, nasion, a));
    angles.push(getCephalometryAngle("SNB", nasion, sella, nasion, b));
    var anb = getCephalometryAngle("ANB", nasion, a, nasion, b)
    if (getSign(nasion, b, a) < 0) {
      anb.angle = -Math.abs(anb.angle);
    }
    angles.push(anb);
    angles.push(getCephalometryAngle("SNPg", nasion, sella, nasion, pogonion));
    angles.push(getCephalometryAngle("SNGn", nasion, sella, nasion, gnathion));
    angles.push(getCephalometryAngle("NSBa", sella, nasion, sella, basion));
    angles.push(getCephalometryAngle("Gn-tgo-Ar", gonion, gnathion, gonion, articulare));
    angles.push(getCephalometryAngle("N", gnathion, gonion, pogonion, b));
    angles.push(getCephalometryAngle("NL-NSL", pterygomaxillare, spina, sella, nasion));//TODO can be negative
    angles.push(getCephalometryAngle("ML-NSL", gonion, gnathion, sella, nasion));
    angles.push(getCephalometryAngle("ML-NL", gonion, gnathion, pterygomaxillare, spina));
    angles.push(getCephalometryAngle("I-Ī", incisionSuperius, apicaleSuperius, incisionInferius, apicaleInferius));
    angles.push(getCephalometryAngle("I-NA", incisionSuperius, apicaleSuperius, a, nasion));
    angles.push(getCephalometryAngle("Ī-NB", incisionInferius, apicaleInferius, nasion, b));
    angles.push(getCephalometryAngle("H", pogonionSoft, upperLip, b, nasion));
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
    let gonion = cephalometryCoordinates.find(coord => coord.name === "tgo");
    let pterygomaxillare = cephalometryCoordinates.find(coord => coord.name === "PNS");
    let spina = cephalometryCoordinates.find(coord => coord.name === "ANS");
    return getCephalometryAngle("ML-NL", gonion, gnathion, pterygomaxillare, spina).angle;

  },

  getN(cephalometryCoordinates) {
    let b = cephalometryCoordinates.find(coord => coord.name === "B");
    let pogonion = cephalometryCoordinates.find(coord => coord.name === "Pg");
    let gnathion = cephalometryCoordinates.find(coord => coord.name === "Gn");
    let gonion = cephalometryCoordinates.find(coord => coord.name === "tgo");
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
  if (angle < 0) { angle = angle * -1; }
  var degreeAngle = angle * (180 / Math.PI);
  return degreeAngle;
}

function getSign(a, b, p) {
  return (p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x);
}