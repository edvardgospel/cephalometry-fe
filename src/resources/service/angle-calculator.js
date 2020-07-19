export default {


  getAngle(a1, a2, b1, b2) {
    var dAx = a2.x - a1.x;
    var dAy = a2.y - a1.y;
    var dBx = b2.x - b1.x;
    var dBy = b2.y - b1.y;
    var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
    if (angle < 0) { angle = angle * -1; }
    var degreeAngle = angle * (180 / Math.PI);
    return degreeAngle;
  },

  getCephalometryAngle(name, a1, a2, b1, b2) {
    return {
      name: name,
      angle: this.getAngle(a1, a2, b1, b2)
    }
  },

  getSign(a, b, p) {
    return (p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x);
  },

  returnAngles(cephalometryCoordinates) {
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


    angles.push(this.getCephalometryAngle("SNA", nasion, sella, nasion, a));
    angles.push(this.getCephalometryAngle("SNB", nasion, sella, nasion, b));
    var anb = this.getCephalometryAngle("ANB", nasion, a, nasion, b)
    if (this.getSign(nasion, b, a) < 0) {
      anb.angle = -Math.abs(anb.angle);
    }
    angles.push(anb);
    angles.push(this.getCephalometryAngle("SNPg", nasion, sella, nasion, pogonion));
    angles.push(this.getCephalometryAngle("SNGn", nasion, sella, nasion, gnathion));
    angles.push(this.getCephalometryAngle("NSBa", sella, nasion, sella, basion));
    angles.push(this.getCephalometryAngle("Gn-tgo-Ar", gonion, gnathion, gonion, articulare));
    //angles.push(this.getCephalometryAngle("N", gonion, gnathion, gonion, articulare));
    angles.push(this.getCephalometryAngle("NL-NSL", pterygomaxillare, spina, sella, nasion));//TODO can be negative
    angles.push(this.getCephalometryAngle("ML-NSL", gonion, gnathion, sella, nasion));
    angles.push(this.getCephalometryAngle("ML-NL", gonion, gnathion, pterygomaxillare, spina));
    angles.push(this.getCephalometryAngle("I-Ī", incisionSuperius, apicaleSuperius, incisionInferius, apicaleInferius));
    angles.push(this.getCephalometryAngle("I-NA", incisionSuperius, apicaleSuperius, a, nasion));
    angles.push(this.getCephalometryAngle("Ī-NB", incisionInferius, apicaleInferius, nasion, b));
    angles.push(this.getCephalometryAngle("H", pogonionSoft, upperLip, b, nasion));



    return angles;
    /*return ([
      {
        "name": "N",
        "angle": 46.1
      },
      {
        "name": "Na",
        "angle": 103.6
      },
      {
        "name": "N-Sp' mm",
        "angle": 39.7
      },
      {
        "name": "Sp'-Gn mm",
        "angle": 53.2
      },
      {
        "name": "I%",
        "angle": 74.7
      },
      {
        "name": "1-NA mm",
        "angle": 6.5
      },
      {
        "name": "T-NB mm",
        "angle": 2.7
      },
      {
        "name": "Pg-NB mm",
        "angle": 3.3
      }
    ]
    )*/
  }
}