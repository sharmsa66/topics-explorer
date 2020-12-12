import "./step.css";

const { default: Circle } = require("../Circle/circle");
const Step = ({ circleText, circleDescription, onCircleClick }) => {
  return (
    <div className="step-container">
      <div className="step-circle">
        <Circle
          circleText={circleText}
          circleDescription={circleDescription}
          onCircleClick={onCircleClick}
        />
      </div>
      <div className="step-description">
          {circleDescription}
          </div>
    </div>
  );
};

export default Step;
