import React, { useRef, useState, useEffect } from "react";
import "./Map.css";
import MapContext from "../../Contexts/MapContext";
import * as ol from "ol";
import Draw from 'ol/interaction/Draw';
import { Polygon } from "ol/geom";
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

const source = new VectorSource({wrapX: false});
const vector = new VectorLayer({
  source: source,
});

const Mapper = ({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  // on component mount
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => {
      mapObject.setTarget(undefined);
    };
  }, []);

  // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center]);

  //drawing polygon
  // useEffect(() => {
  //   if (!map) return;
  //   map.addInteraction(
  //     new Draw({ 
  //       source: source, 
  //       type: Polygon, 
  //       freehand: true })
  //   );
  // }, [])
  

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default Mapper;
