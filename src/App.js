// import {interaction, layer,custom, control,
//   Interactions, Overlays,Controls,
//   Map, Layers, Overlay, Util
// } from "react-openlayers"

import React, { useState, useContext } from "react";
import { Layers } from "./Components/Map/Layers";
import { TileLayer, VectorLayer } from "./Components/Map/Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "./Components/Map/Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl,DrawingControl } from "./Components/Map/Controls";
import Mapper from "./Components/Map/Mapper";
import mapConfig from "./config.json";
import { click } from "ol/events/condition";
// import Draw from 'ol/interaction/Draw';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import {OSM, Vector as VectorSource} from 'ol/source';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "blue",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
};

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;

// const raster = new TileLayer({
//   source: new OSM(),
// });
// const source = new VectorSource({wrapX: false});
// const vector = new VectorLayer({
//   source: source,
// });

function App() {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);

  return (
    <div>
      <Mapper center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          {/* {showLayer1 ? (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={styles.MultiPolygon}
            />
          ) : ( */}
          {/* <VectorLayer source={vector({})} /> */}
          {/* )} */}
          {/* {showLayer2 ? (
            <VectorLayer
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject2, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={styles.MultiPolygon}
            />
          ) : ( */}
          <VectorLayer source={vector({})}>
            {/* <DrawingControl source={vector({})} /> */}
          </VectorLayer>
          {/* )} */}
        </Layers>
        <Controls>
          <FullScreenControl />
          <DrawingControl source={vector({})} />
        </Controls>
      </Mapper>
      <div>
        <input
          type="checkbox"
          checked={showLayer1}
          onChange={(event) => setShowLayer1(event.target.checked)}
        />{" "}
        Johnson County
      </div>
      <div>
        <input
          type="checkbox"
          checked={showLayer2}
          onChange={(event) => setShowLayer2(event.target.checked)}
        />{" "}
        Wyandotte County
      </div>
    </div>

    // <div className="App">
    //   <Map
    //     view={{ center: [0, 0], zoom: 2 }}
    //     // onClick={showPopup}
    //   >
    //     <Layers>
    //       <layer.Tile />
    //       {/* <layer.Vector source={markers} style={markers.style} zIndex="1" /> */}
    //     </Layers>
    //     {/* <Overlays>
    //       <Overlay
    //       />
    //     </Overlays> */}
    //     <Controls attribution={false} zoom={true}>
    //       <control.Rotate />
    //       <control.ScaleLine />
    //       <control.FullScreen />
    //       <control.OverviewMap />
    //       <control.ZoomSlider />
    //       <control.ZoomToExtent />
    //       <control.Zoom />
    //     </Controls>
    //     {/* <Interactions>
    //     <interaction.Select style={selectedMarkerStyle} />
    //     <interaction.Draw source={markers} type='Point' />
    //     <interaction.Modify features={markers.features} />
    //   </Interactions> */}
    //   </Map>
    // </div>
  );
}

export default App;
