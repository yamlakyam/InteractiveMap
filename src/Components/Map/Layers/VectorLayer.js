import React from 'react'
import MapContext from '../../../Contexts/MapContext'
import OLVectorLayer from 'ol/layer/Vector'
import { useEffect,useContext } from 'react'
import Draw from 'ol/interaction/Draw';
import { Polygon } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';

const VectorLayer = ({ source, style, zIndex = 0 }) => {

    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;
        let vectorLayer = new OLVectorLayer({
          source,
          style
        });
        map.addLayer(vectorLayer);
        map.addInteraction(new Draw({source:source, type:GeometryType.POLYGON,}))
        vectorLayer.setZIndex(zIndex);
        return () => {
          if (map) {
            map.removeLayer(vectorLayer);
          }
        };
      }, [map]);

      return null;
}

export default VectorLayer