import { LatLngTuple } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
import LayoutTable from "src/components/layouts/LayoutTable";

const position: LatLngTuple = [51.505, -0.09];

const Map = () => {
	return (
		<LayoutTable>
			<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "500px" }}>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</LayoutTable>
	);
};

export default Map;
