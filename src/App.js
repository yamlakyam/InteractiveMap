import {interaction, layer,custom, control, 
  Interactions, Overlays,Controls, 
  Map, Layers, Overlay, Util
} from "react-openlayers"


function App() {
  return (
    <div className="App">
      <Map
        view={{ center: [0, 0], zoom: 2 }}
        // onClick={showPopup}
      >
        <Layers>
          <layer.Tile />
          {/* <layer.Vector source={markers} style={markers.style} zIndex="1" /> */}
        </Layers>
        {/* <Overlays>
          <Overlay
          />
        </Overlays> */}
        <Controls attribution={false} zoom={true}>
          <control.Rotate />
          <control.ScaleLine />
          <control.FullScreen />
          <control.OverviewMap />
          <control.ZoomSlider />
          <control.ZoomToExtent />
          <control.Zoom />
        </Controls>
        {/* <Interactions>
        <interaction.Select style={selectedMarkerStyle} />
        <interaction.Draw source={markers} type='Point' />
        <interaction.Modify features={markers.features} />
      </Interactions> */}
      </Map>
    </div>
  );
}

export default App;
