import "./circle.css";

const Circle = ({ circleText, circleDescription, onCircleClick }) => {
  return (
    <div className="circle-container">
      <div className="circle" onClick={() => onCircleClick(circleText)}>
        <span className="circle-id">{circleText}</span>
      </div>
    </div>
  );
};


export default Circle;
