var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
  WorldWind.OFFSET_FRACTION, 0.3,
  WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
  WorldWind.OFFSET_FRACTION, 0.5,
  WorldWind.OFFSET_FRACTION, 1.0);

placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/m2.png";

var position1 = new WorldWind.Position(29.9511, -90.0715, 100.0);     // Norleans
var position2 = new WorldWind.Position(40.7128, -74.0060, 100.0); // New York
var position3 = new WorldWind.Position(25.2048, 55.2708, 100);   // Dubai
var position4 = new WorldWind.Position(24.4539, 54.3773, 100);    // Abu Dabi
var position5 = new WorldWind.Position(31.2001, 29.9187, 100);    // Alexandria
var position6 = new WorldWind.Position(47.6062, -122.3321, 100);  // Seattle
var position7 = new WorldWind.Position(52.3667, 4.8945, 100);     // Amsterdam

// var arr = [position1, position2, position3];
var placemark = new WorldWind.Placemark(position1, false, placemarkAttributes);
var placemark2 = new WorldWind.Placemark(position2, false, placemarkAttributes);
var placemark3 = new WorldWind.Placemark(position3, false, placemarkAttributes);
var placemark4 = new WorldWind.Placemark(position4, false, placemarkAttributes);
var placemark5 = new WorldWind.Placemark(position5, false, placemarkAttributes);
var placemark6 = new WorldWind.Placemark(position6, false, placemarkAttributes);
var placemark7 = new WorldWind.Placemark(position7, false, placemarkAttributes);


placemark.label = "New Orleans\n";
placemark2.label = "New York\n";
placemark3.label = "Dubai\n";
placemark4.label = "Abu Dhabi\n";
placemark5.label = "Alexandria\n";
placemark6.label = "Seattle\n";
placemark7.label = "Amsterdam\n";

  // "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
  // "Lon " + placemark.position.longitude.toPrecision(5).toString();
// placemark.alwaysOnTop = true;
placemark3.alwaysOnTop = true;

placemarkLayer.addRenderable(placemark);
placemarkLayer.addRenderable(placemark2);
placemarkLayer.addRenderable(placemark3);
placemarkLayer.addRenderable(placemark4);
placemarkLayer.addRenderable(placemark5);
placemarkLayer.addRenderable(placemark6);
placemarkLayer.addRenderable(placemark7);

