export default {
  getDistances(cephalometryCoordinates) {
    var distances = [];

    let nasion = cephalometryCoordinates.find(coord => coord.name === "N");
    let a = cephalometryCoordinates.find(coord => coord.name === "A");
    let b = cephalometryCoordinates.find(coord => coord.name === "B");
    let pogonion = cephalometryCoordinates.find(coord => coord.name === "Pg");
    let gnathion = cephalometryCoordinates.find(coord => coord.name === "Gn");
    let pterygomaxillare = cephalometryCoordinates.find(coord => coord.name === "PNS");
    let spina = cephalometryCoordinates.find(coord => coord.name === "ANS");
    let incisionSuperius = cephalometryCoordinates.find(coord => coord.name === "UI");
    let incisionInferius = cephalometryCoordinates.find(coord => coord.name === "LI");

    distances.push(getCephalometryPointToLineDistance("I-NA", nasion, a, incisionSuperius));
    distances.push(getCephalometryPointToLineDistance("Ī-NB", nasion, b, incisionInferius));
    distances.push(getCephalometryPointToLineDistance("Ī-NPg", nasion, pogonion, incisionInferius));
    distances.push(getCephalometryPointToLineDistance("Pg-NB", nasion, b, pogonion));

    let spina_ = getTwoLineIntersection(pterygomaxillare, spina, nasion, gnathion);
    let nSpMm = getCephalometryPointToPointDistance("N-Sp'", nasion, spina_);
    distances.push(nSpMm);
    let spGnMm = getCephalometryPointToPointDistance("Sp'-Gn", spina_, gnathion);
    distances.push(spGnMm);
    return distances;
  }
}

function getCephalometryPointToLineDistance(name, lineStart, lineEnd, point) {
  return {
    name: name,
    distance: getPointToLineDistance(lineStart, lineEnd, point)
  }
}

function getPointToLineDistance(a, b, p) {
  return Math.abs((b.y - a.y) * p.x - (b.x - a.x) * p.y + b.x * a.y - b.y * a.x) / Math.sqrt(Math.pow(b.y - a.y, 2) + Math.pow(b.x - a.x, 2));
}

function getTwoLineIntersection(line1Start, line1End, line2Start, line2End) {
  // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
  var denominator, a, b, numerator1, numerator2, result = {
    x: null,
    y: null
  };
  denominator = ((line2End.y - line2Start.y) * (line1End.x - line1Start.x)) - ((line2End.x - line2Start.x) * (line1End.y - line1Start.y));
  if (denominator == 0) {
    return result;
  }
  a = line1Start.y - line2Start.y;
  b = line1Start.x - line2Start.x;
  numerator1 = ((line2End.x - line2Start.x) * a) - ((line2End.y - line2Start.y) * b);
  numerator2 = ((line1End.x - line1Start.x) * a) - ((line1End.y - line1Start.y) * b);
  a = numerator1 / denominator;
  b = numerator2 / denominator;

  // if we cast these lines infinitely in both directions, they intersect here:
  result.x = line1Start.x + (a * (line1End.x - line1Start.x));
  result.y = line1Start.y + (a * (line1End.y - line1Start.y));
  return result;
}

function getCephalometryPointToPointDistance(name, point1, point2) {
  return {
    name: name,
    distance: getPointToPointDistance(point1, point2)
  }
}

function getPointToPointDistance(a, b) {
  return Math.sqrt((Math.pow(a.x - b.x, 2)) + (Math.pow(a.y - b.y, 2)))
}