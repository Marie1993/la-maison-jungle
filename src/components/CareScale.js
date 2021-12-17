import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt='sun-icon' />
    ) : (
      <img src={Water} alt='water-icon' />
    );

  return (
    <div onClick={() => handleClick(careType, scaleValue)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

function handleClick(careType, scaleValue) {
  careType === 'light' ? (careType = 'de lumière') : (careType = "d'arrosage");

  switch (scaleValue) {
    case 1:
      scaleValue = 'peu ';
      break;
    case 2:
      scaleValue = 'modérement ';
      break;
    case 3:
      scaleValue = 'beaucoup ';
      break;
    default:
  }
  alert('Cette plante requiert ' + scaleValue + careType);
}

export default CareScale;
