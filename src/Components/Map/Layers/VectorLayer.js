import React from 'react'
import MapContext from '../../../Contexts/MapContext'
import OLVectorLayer from 'ol/layer/Vector'
import { useEffect,useContext } from 'react'
import Draw from 'ol/interaction/Draw';
import { Polygon } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';
import { Fill, Stroke, Style } from "ol/style";
import {DrawingControl} from './'


const VectorLayer = ({ source, style, zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    const styles = [
      new Style({
          stroke: new Stroke({
              color: '#017e01',
              width: 2.25,
          }),
          fill: new Fill({
              color: 'rgba(36, 37, 42, .25)',
              // color: '#017e01',
          }),
      }),
  ];

    useEffect(() => {
        if (!map) return;
        let vectorLayer = new OLVectorLayer({
          source,
          style
        });
        map.addLayer(vectorLayer);

        // var draw = new Draw({
        //   source: source,
        //   type: GeometryType.POLYGON,
        //   freehand: false,
        //   style:styles
        // });
        // map.addInteraction(draw);
        // draw.on("drawend", function (e) {
        //   console.log("extent", e.feature.getGeometry().getExtent());
        // });

        // draw.on("drawstart", function(e){
        //   // console.log("on draw start called")
        //   // console.log("map layers", map.getLayers())
        //   // console.log("source",source)
        //   source.clear()
        // })

        vectorLayer.setZIndex(zIndex);
        return () => {
          if (map) {
            map.removeLayer(vectorLayer);
          }
        };
      }, [map,]);

      return null;
}

export default VectorLayer