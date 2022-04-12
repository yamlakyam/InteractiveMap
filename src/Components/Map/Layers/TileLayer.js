import {useContext,useEffect} from 'react'
import MapContext from '../../../Contexts/MapContext'
import OLTileLayer from 'ol/layer/tile'

const TileLayer = ({ source, zIndex = 0 }) => {
    const { map } = useContext(MapContext); 

    useEffect(() => {
        if (!map) return;
    
        let tileLayer = new OLTileLayer({
          source,
          zIndex,
        });
        map.addLayer(tileLayer);
        tileLayer.setZIndex(zIndex);
    
      return () => {
        if (map) {
            map.removeLayer(tileLayer);
          }
      }
    }, [map])
    
  return (
    // <div>TileLayer</div>
    null
  )
}

export default TileLayer