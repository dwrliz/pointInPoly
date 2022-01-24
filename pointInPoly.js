import { console, globals, fetchSync } from "./survey123/lib.js";

var pointInPolygon = require('../node_modules/point-in-polygon');

export function contains(point) {  
    // Define polygon here as a JSON
    var poly =[{"type":"Feature","properties": ".... <data here> ...."}];
    // Make an empty list for the results
    var result = [];
    // Parse out S123 geopoint into [lat,long]
    var xy = [point.x,point.y]
    // Start a loop the length of the number of polygons
    for (var i = 0;  i < poly.length; i++) {
        // If that point is within the polygon then...
        if (pointInPolygon(xy,poly[i]['geometry']['coordinates'][0])) {
            // ... append the polygons name to a list
            result.push(poly[i]['properties']['Code']);
            // And then break the loop to save on memory
            break;
        };
    };
    // Return the 1st and only entry on the list
    return result[0];
}
