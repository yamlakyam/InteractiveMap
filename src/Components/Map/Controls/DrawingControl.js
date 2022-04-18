import React from "react";
import MapContext from "../../../Contexts/MapContext";
import { Fill, Stroke, Style } from "ol/style";
import { useEffect, useContext } from "react";
import Draw from "ol/interaction/Draw";
import GeometryType from "ol/geom/GeometryType";

const DrawingControl = ({ source }) => {
  const { map } = useContext(MapContext);
  const styles = [
    new Style({
      stroke: new Stroke({
        color: "#017e01",
        width: 2.25,
      }),
      fill: new Fill({
        color: "rgba(36, 37, 42, .25)",
        // color: '#017e01',
      }),
    }),
  ];

  useEffect(() => {
    if (!map) return;
    var draw = new Draw({
      source: source,
      type: GeometryType.POLYGON,
      freehand: false,
      style: styles,
    });
    map.addInteraction(draw);
    draw.on("drawend", function (e) {
      console.log("extent", e.feature.getGeometry().getExtent());
    });

    draw.on("drawstart", function (e) {
      // console.log("on draw start called")
      // console.log("map layers", map.getLayers())
      // console.log("source",source)
      source.clear();
    });

    return () => {
      map.removeInteraction(draw);
    };
  }, [map]);

  return null;
};

export default DrawingControl;
