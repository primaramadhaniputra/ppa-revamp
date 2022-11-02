import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";

export function ChangeView({ coords }: any) {
	const map = useMap();
	map.setView(coords, 12);
	return null;
}

const position = [51.505, -0.09];

export default function Map() {
	const [geoData, _] = useState({ lat: 64.536634, lng: 16.779852 });
	return (
		<MapContainer center={position as LatLngTuple} zoom={12} style={{ height: "100vh" }}>
			<TileLayer attribution="" url="" />
			{geoData.lat && geoData.lng && <Marker position={[geoData.lat, geoData.lng]} />}
			<svg width="2600px" height="600px" viewBox="-44 6 1972 480">
				<g>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M600 355L604 357L627 356L633 354L655 356L656 355L653 352L651 346"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M600 355L604 357L627 356L633 354L655 356L656 355L653 352L651 346"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 356L663 357L679 354L687 349L695 338L694 332L685 324L682 313L681 295L685 282L688 278L689 268L697 258L720 270L730 271L741 257"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M698 258L714 240"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M710 243L712 245L719 247L725 247L732 251"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 285L628 279L634 273L644 256L648 254L676 258L680 260L686 267L689 268"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M552 312L543 300L537 281L531 278L521 277L518 275L521 273L544 274L547 268L551 265"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M518 275L506 272L499 273L490 281L484 284L467 284L463 286L454 296L449 293L450 286L447 286"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 312L654 323L652 325L649 337L642 348L626 354L616 354L605 357L598 353L585 339L578 335L577 323L570 315L563 312L551 312L544 317L536 317L528 320L515 321L510 319L520 315L521 311L519 309L519 305L510 303L505 300L498 300"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 271L639 281L631 280L626 285L614 309L596 324L586 323L578 317L566 313"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 331L639 330L643 318L646 314L647 307L643 305L642 302L635 295L633 295L630 298L626 306L624 300L627 289L625 288"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 286L639 287L639 283L635 280"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 287L654 293L651 294L643 291L640 285"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M526 320L526 330L514 340L509 341L504 346L508 351"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M590 324L588 322L587 316L577 306L576 303"
					></path>
					<path
						stroke="#fcfcfc"
						stroke-opacity="0.9"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 302L605 297L591 297L585 295L575 297L579 299"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 295L637 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 305L633 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 291L635 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 305L642 289L644 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 305L641 289L643 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 305L640 288L642 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 306L639 288L642 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 306L636 291L638 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 306L637 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 281L637 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 286L635 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 301L659 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 307L660 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 312L661 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 334L666 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 319L663 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 324L664 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 337L670 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 305L671 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 335L668 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 336L669 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L672 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L673 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M669 300L674 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 315L647 313L655 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 304L630 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L625 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L627 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L626 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 306L630 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 306L631 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 306L632 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 305L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 305L637 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 307L635 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 303L621 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 303L623 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 303L620 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 304L619 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 318L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L626 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 305L635 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 357L629 357"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 313L650 311"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 313L642 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 323L642 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 329L642 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 334L643 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 336L645 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 336L649 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 336L645 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 337L648 337L647 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 335L649 338L647 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 305L665 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L665 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M666 311L666 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 315L648 313L653 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 315L652 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 318L638 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 318L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 356L640 353L643 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 355L633 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 350L645 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 345L641 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 346L647 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 346L645 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 340L640 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 340L640 345L630 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 339L639 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 339L639 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L631 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L633 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 357L632 356"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 349L645 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 349L639 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 357L632 356"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 343L645 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 341L648 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 319L618 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 312L618 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 318L623 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 317L617 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 318L615 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 311L616 309"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 306L617 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 317L619 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 317L620 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 317L621 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 317L623 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 318L625 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 307L628 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 318L627 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L629 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 306L620 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 306L624 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 307L626 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 319L617 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 318L615 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 319L617 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 318L624 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 335L632 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 337L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 304L618 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 356L622 356"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M666 307L668 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 346L630 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 346L630 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 350L648 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 352L644 350L648 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 317L621 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 317L619 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 317L618 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 318L615 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 321L631 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 334L631 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 318L624 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 313L642 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 298L620 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 318L632 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 285L652 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 282L654 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 284L653 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 279L651 282L656 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 280L655 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 277L657 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 281L655 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 274L656 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 276L657 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M661 291L659 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 291L657 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 287L656 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 291L657 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 271L657 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 270L653 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 269L649 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 267L645 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 266L641 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 265L637 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 263L635 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 264L648 271L654 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 264L653 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 266L651 272L654 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 268L649 273L653 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 274L659 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L653 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 279L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 273L666 282L671 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L653 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L653 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 272L655 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 273L665 282L670 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 269L651 271L655 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 274L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 275L653 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 272L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 271L656 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 271L655 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 270L658 273L659 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 273L661 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L661 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 273L661 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L661 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 273L661 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L661 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M672 290L671 287L655 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 273L660 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 273L660 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 273L660 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 289L663 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M666 289L664 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M668 290L664 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 278L669 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 289L663 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M664 289L662 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 290L661 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 278L673 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 288L656 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M661 280L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L658 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L657 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L657 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 282L654 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 261L639 262"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 261L644 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 260L649 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 260L648 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M671 284L676 288L671 302"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M670 284L674 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M671 282L674 283L678 288L673 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M676 280L683 287L682 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M673 281L676 282L680 288L675 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M674 289L672 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 331L641 333"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 330L641 332"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 322L635 330L641 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 332L648 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 333L649 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 334L649 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 336L650 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 303L621 290L632 272L632 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 303L620 289L625 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 322L632 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 336L642 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L642 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 314L642 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 300L629 295"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 295L632 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 296L633 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 296L653 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 301L630 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 296L655 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 301L652 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 301L653 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 306L650 311"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 307L652 312"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 314L651 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 313L650 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 319L650 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 324L648 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 324L647 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 318L648 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 329L645 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 329L647 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 336L645 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 335L641 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 351L639 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 349L643 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 349L649 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 347L638 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 349L639 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 351L631 354L627 355"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 351L638 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 341L643 346L648 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 279L657 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 278L658 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 276L653 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 275L654 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 273L649 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 272L650 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 269L645 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 268L646 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 266L641 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 264L642 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 263L638 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 264L637 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 262L637 261"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 264L636 263"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 262L644 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 264L643 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 266L648 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 264L649 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 267L653 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 268L653 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 269L657 269L663 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 270L662 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 283L660 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 282L661 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 283L658 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 288L661 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 296L652 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 295L651 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 295L655 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 300L652 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 300L650 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 300L652 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 300L648 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 304L650 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 304L649 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 305L647 310"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 304L645 309"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 309L647 310"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 309L647 310"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 314L644 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 310L644 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 309L643 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 314L644 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 308L643 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 314L641 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 308L642 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 308L645 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L644 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 303L644 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M684 287L686 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M683 286L684 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M685 281L683 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 313L643 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 295L630 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 291L633 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 295L630 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 295L635 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 300L637 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 305L640 293L644 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 305L641 287L643 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 306L640 287L642 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 306L638 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 286L637 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 285L635 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 281L637 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 286L635 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 280L637 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 281L639 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 296L659 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 301L659 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 307L660 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 314L663 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 324L665 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 329L665 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 319L664 289L662 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 336L669 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 308L670 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 336L668 289L668 287L661 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M666 308L674 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L673 289L671 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 296L656 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 335L667 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 315L655 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 305L630 296"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L624 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L626 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L628 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L630 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L626 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 304L627 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 300L627 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 303L626 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 306L631 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 306L632 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 306L633 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 305L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 305L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 323L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 304L622 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 304L620 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M613 304L619 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 335L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L639 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 305L617 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 304L626 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 318L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 356L630 357"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L638 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 306L628 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 306L631 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 305L632 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 305L633 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 305L634 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 306L627 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 301L655 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 306L653 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 311L652 312"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 306L654 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 301L655 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 318L651 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 313L653 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 323L650 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 324L650 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 329L648 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 318L651 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 311L652 312"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 329L649 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 334L647 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 318L641 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 324L642 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 329L643 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 336L645 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 336L648 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 336L647 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 336L646 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 335L648 337L647 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 341L647 336L649 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 337L647 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 337L648 337"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 336L649 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 335L648 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 337L649 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 338L648 337"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 344L646 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 336L663 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M664 308L665 312"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L664 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 308L665 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 305L663 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 335L655 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 336L655 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 315L648 313L653 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 315L649 313L652 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L650 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 314L647 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 313L647 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 318L639 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 355L632 354"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 354L633 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 355L632 354"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 347L643 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 348L644 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 349L643 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 349L641 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 347L641 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 350L645 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 350L633 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 350L637 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 340L645 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 340L641 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 346L647 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 347L644 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 346L646 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 340L645 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 345L643 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 346L630 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 340L640 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 340L639 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 339L639 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 339L638 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L637 347L631 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L633 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 344L635 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L638 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L639 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 345L640 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 346L640 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 346L641 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 347L641 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 353L639 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 355L629 356"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 350L633 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 349L632 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 349L632 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 348L632 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 356L630 357"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 357L630 357"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 356L633 355"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 342L648 343"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 351L637 354"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 354L637 357"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 358L632 356"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 357L633 355"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 350L643 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 349L644 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 348L646 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 348L646 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 349L647 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 336L649 338L647 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 338L648 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 319L617 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 319L615 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 318L621 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 317L619 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 317L618 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 317L618 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 318L617 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 318L623 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 319L618 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 318L624 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 308L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 348L639 347"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 348L639 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 349L640 349"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 307L636 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 307L634 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 334L631 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 337L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 355L629 355"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 334L627 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M666 308L668 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L666 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M666 310L666 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 308L665 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 356L638 354L646 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 354L630 353"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 353L630 353"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 352L630 352"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 354L629 354"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 345L640 347L633 349L630 352"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 346L629 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 353L642 356"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 350L648 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 356L631 357"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 357L632 358"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 352L644 350L648 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 352L643 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 351L644 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 317L621 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 317L622 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 317L620 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 317L613 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 322L632 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 321L631 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 323L630 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 334L631 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 338L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 346L629 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 350L628 352"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 303L617 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 335L632 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 286L652 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 282L655 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 284L654 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 280L650 282L656 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 277L653 282L657 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 281L652 284L655 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 275L647 279L652 280L658 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 272L657 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 279L652 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 280L652 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 281L651 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 281L651 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 282L650 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 283L650 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 283L650 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 284L649 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 284L649 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 291L658 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 291L657 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 287L656 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 270L653 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 271L647 277L652 278L657 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 276L647 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 276L648 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 277L647 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 268L649 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 270L645 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 267L641 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 266L641 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 283L658 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 278L653 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 279L654 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 275L649 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 276L650 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 271L645 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 272L645 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 268L641 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 269L642 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 264L637 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 266L638 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 263L635 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 264L647 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 264L649 272L653 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 266L647 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 268L649 273L653 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 265L643 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 266L644 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 262L638 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 263L636 263L638 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 264L639 262"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 275L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 274L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 273L656 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 278L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 278L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 278L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 273L665 282L670 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 268L652 271L655 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 268L654 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 269L650 272L654 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 269L649 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 270L651 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 267L648 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 274L649 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 276L652 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 276L653 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 275L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 271L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 274L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 275L653 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 274L653 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 273L654 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 275L652 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 275L652 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 274L652 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 273L652 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 272L652 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 272L652 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 273L649 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 273L650 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 272L650 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M650 272L650 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 271L651 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 270L657 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 270L653 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 271L653 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 272L671 288L664 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 271L671 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 272L655 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 271L655 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 270L655 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 272L661 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L661 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 272L661 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L661 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 272L661 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L661 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 271L658 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L660 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L660 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L660 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 271L658 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 289L663 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M665 289L663 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M667 290L664 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M661 281L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 275L669 287L669 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M661 281L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M661 281L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 277L674 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 287L656 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 286L657 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 278L651 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 278L652 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 278L652 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M651 278L651 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 280L657 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L657 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 279L658 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 278L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 278L646 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 278L646 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 279L646 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 284L660 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M663 290L661 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 288L648 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 288L644 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 288L645 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L642 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L642 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 314L642 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 316L643 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 317L644 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 318L644 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 317L647 310"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 316L644 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 318L650 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 309L643 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 307L637 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 306L640 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 306L641 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L642 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 306L639 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 306L644 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L642 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 287L655 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 288L645 309"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 288L651 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 282L662 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 282L663 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L663 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L664 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L658 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L657 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 282L654 278"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 282L658 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 261L639 262"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 260L648 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 260L649 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 261L644 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M670 283L675 288L670 302"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M670 282L678 288L671 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M671 281L675 282L680 288L674 301"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M676 302L682 287L674 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M676 279L677 279"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M684 287L683 290"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M677 279L682 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M682 285L683 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L641 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L640 331"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 322L636 330L641 334"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L641 333"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 318L638 323L635 330L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 331L652 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 333L648 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 334L649 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 264L637 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 304L620 291L629 278L632 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 304L615 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 304L621 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 304L617 295L625 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 304L613 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M614 304L616 297"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 318L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 334L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L642 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 305L642 291L644 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 306L637 291L639 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 309L615 309"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 318L619 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 317L620 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 317L621 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 317L622 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 317L624 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 318L626 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 318L628 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M616 312L617 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M615 319L615 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 280L644 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 305L642 291L644 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 336L651 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M648 329L665 289"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L624 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 319L623 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L623 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L624 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 319L623 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L624 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L624 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L624 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 319L623 319"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 315L629 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 315L632 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 315L630 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 307L630 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 307L631 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 307L632 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 307L633 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 315L631 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 314L633 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 315L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 315L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 315L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 315L631 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 334L630 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 341L635 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 341L635 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 334L632 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 334L630 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 334L632 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L623 289L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 296L622 290L631 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L623 298L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L623 296L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L625 290L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L622 295L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L625 288L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L622 293L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L625 297L637 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L626 293L636 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L625 294L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L636 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 270L635 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L638 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L637 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 276L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 277L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 276L633 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 303L628 293L640 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 303L619 298"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 291L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 290L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L644 289L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L645 291L646 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L639 299L645 290L646 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 282L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 285L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 284L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L643 291L645 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L647 290L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L641 301L647 292L649 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L647 291L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 305L647 294L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L648 291L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 305L646 291L647 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 318L631 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 316L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 316L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 315L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L633 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 312L635 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L633 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 312L635 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L637 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L634 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 341L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L631 348"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 340L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L628 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L629 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 350L629 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 349L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 340L635 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 339L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 352L628 352"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 349L631 346"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 345L632 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 342L633 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 272L657 271L657 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 272L659 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L659 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 271L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 331L634 331"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 333L633 331"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 330L633 330"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 325L636 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 331L633 330L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 336L639 343L636 346L635 345L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 339L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L637 345L636 344L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 343L638 343"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L639 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 317L626 315L626 317L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 318L624 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L625 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 349L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 349L635 342L634 341L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 350L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 350L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 340L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 340L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 340L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 351L629 350"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 349L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 340L635 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 339L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 351L628 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 349L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 340L635 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 338L635 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 351L628 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 349L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 340L634 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 352L628 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 349L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 340L634 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 339L634 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 352L628 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 349L634 341"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 352L628 352"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 349L636 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 348L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 348L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 347L635 344L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 347L635 344L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 347L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 346L637 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L637 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 339L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 339L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 347L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 347L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 323L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L629 333L631 331L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L629 333L633 326L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L629 333L633 326L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L629 333L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L633 324L630 328"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 327L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 272L657 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 272L657 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 273L657 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L658 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 271L659 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L659 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L659 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L659 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 272L659 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 272L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 272L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 272L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 271L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 271L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 271L657 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 329L635 328"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L637 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L635 325L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 330L633 331L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 327L636 326L635 327"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 325L636 323L636 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 325L637 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 323L637 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 329L635 328"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 326L635 327L636 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 326L635 327L636 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 325L637 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 325L636 326"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 325L636 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 325L637 325"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 325L636 326"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L623 290L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L623 290L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L623 290L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L620 298"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L619 298"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L619 298"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 303L619 298"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 298L621 293L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 297L625 285L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 297L625 285L631 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 297L622 290L631 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L624 295L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L624 294L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L625 292L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L624 294L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L623 296L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L624 293L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L623 295L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L623 295L634 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M621 303L624 292L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L625 289L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L622 295L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M620 303L623 293L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L627 285L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L623 292L633 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L621 296L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L624 289L629 283L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L622 293L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M619 303L622 293L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M618 303L624 288L632 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 303L628 293L640 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 303L626 297L640 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 303L626 297L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 303L626 297L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L625 298L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L627 293L633 285L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L627 293L637 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L627 293L637 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L627 292L634 282L636 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L627 292L631 287L636 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M624 303L626 294L636 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L626 294L636 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L626 293L636 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L626 293L636 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L626 293L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L624 297L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M623 303L625 294L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L624 296L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L627 289L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M622 303L627 289L635 277"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 275L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 276L636 276"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L636 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 270L636 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 270L635 265"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 274L639 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L639 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L639 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L639 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L639 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L638 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 273L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 272L638 269"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 272L638 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L638 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L638 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 268"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 271L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 271L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L637 267"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L636 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L636 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 270L636 266"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 276L638 275"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 276L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 276L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 276L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 276L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 277L638 274"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 273"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L637 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L636 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L636 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L635 271"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 277L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L635 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 276L634 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 276L633 270"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 291L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 291L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 290L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 290L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L643 292L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L643 292L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L643 292L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L644 289L645 281"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L644 289L645 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L643 291L645 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L643 291L645 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L643 291L645 280"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L644 293L646 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L645 291L646 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L643 295L646 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L645 290L646 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L639 299L644 292L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 305L644 292L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 292L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 305L644 292L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 282L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 282L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 283L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 283L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 283L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 285L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 285L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 284L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 284L646 282"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L645 295L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L647 290L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L646 292L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L646 292L648 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L640 301L645 294L648 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L641 301L646 295L649 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L647 292L648 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L647 292L648 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L646 294L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L646 294L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L647 291L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L647 291L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 305L647 291L648 284"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 305L642 301L648 292L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L648 292L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L648 292L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L648 291L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L648 291L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L648 291L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 305L646 295L649 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 318L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 318L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 315L631 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 315L631 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L637 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L637 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 317L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 317L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 317L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 317L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 316L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 316L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 316L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 316L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 315L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 315L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 315L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 315L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 315L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L634 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 313L634 309L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 314L634 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 313L634 309L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L640 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 314L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 314L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 314L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 330L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 331L640 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 348L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 347L637 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 345L637 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 339L639 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 346L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 347L638 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 326L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 334L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 333L631 333"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 331L630 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 326L632 324"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 326L632 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 331L630 329"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 326L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 334L630 333L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L631 333L635 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L633 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L629 332"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 334L629 332"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 346L635 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 340L638 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 323L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 323L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 323L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 323L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 323L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 323L634 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 287L655 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 263L636 260L637 261"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M646 283L647 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 334L633 331"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 322L638 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 331L635 331"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 331L634 331"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 331L636 327L636 323"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L642 336"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 335L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 264L636 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M613 303L613 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 264L635 264"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 265L640 272"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M617 303L625 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 305L637 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 280L646 283"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 305L641 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M647 283L649 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 351L630 352L630 350L628 352L630 346L633 343L633 341L635 341L635 339L632 336L626 334L628 327L630 325L630 323L627 321L630 322L625 319L615 319L613 317L616 314L615 309L617 307L613 303L613 301L615 300L617 292L620 289L620 287L629 277L636 260L642 260L650 268L660 270L663 273L660 272L661 277L663 277L670 284L671 281L677 279L683 285L685 282L686 283L684 289L681 290L677 300L673 300L672 303L669 300L668 306L665 309L665 317L661 323L657 335L651 339L648 339L649 342L648 347L644 351L645 354L642 357L635 358L622 356L627 355L632 351"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M625 318L630 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 315L631 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 315L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M631 314L631 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 307L639 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 306L640 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 307L638 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 307L637 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 308L637 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 308L636 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 317L633 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M634 313L634 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 313L634 312"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M633 318L634 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M635 314L638 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 318L632 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M632 317L633 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 331L638 330"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 322L641 322"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M649 285L653 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 278L656 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 286L659 291"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M658 282L661 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 284L659 288"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M657 288L653 295"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M655 288L648 304"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M653 288L645 309"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M652 288L646 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 314L642 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M637 314L642 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 317L644 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 317L644 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 318L644 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 318L652 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 318L649 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 317L647 310"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M645 309L642 314"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 307L636 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 306L637 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 307L639 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M643 306L640 305"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M644 308L646 303"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L643 306"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L641 313"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L642 308"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 308L642 307"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M654 288L645 309"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M656 288L651 300"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M659 282L662 287"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L663 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M660 281L664 286"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M661 280L664 285"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 338L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M639 339L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L638 340"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L637 342"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L637 345L636 344L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L637 345L636 344L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L639 342L636 345L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L638 344L635 345L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 336L642 337L636 345L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 338L641 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M642 336L640 340L640 338L641 337L639 343L636 346L635 345L640 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 345L638 343L638 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M638 344L638 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 344L638 342L638 344L636 344"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 345L636 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M636 345L636 345"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L640 336L641 335"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M640 337L640 337"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L639 339"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M641 335L641 337L639 338"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L628 317"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 317L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L630 316"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L627 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L628 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 318L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 317L629 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M628 317L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 317L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 316L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M629 316L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L630 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L631 315"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M627 318L627 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M626 318L626 318"
					></path>
					<path
						stroke="#332f2f"
						stroke-opacity="0.5"
						stroke-width="1"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						d="M630 316L630 316"
					></path>
				</g>
			</svg>
			<ChangeView coords={position} />
		</MapContainer>
	);
}
