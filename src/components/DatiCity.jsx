const DatiCity = ({ name, state, lon, lat }) => {
  return (
    <div>
      <p>Nome città: {name}</p>
      <p>Stato: {state}</p>
      <p>Longitudine: {lon}</p>
      <p>Latitudine: {lat}</p>
    </div>
  );
};

export default DatiCity;
