import LeafletMap from "./LeafletMap";

const Map = () => {
  const address = "1600 Amphitheatre Parkway, Mountain View, CA";

  return (
    <div className="-z-50">
      <LeafletMap address={address} />
    </div>
  );
};


export default Map;