import React from 'react';
import './Carrequesting.css';

function App() { return (
  <Progress
    title="Carrequesting"
    group858Props={progressData.group858Props}
    group857Props={progressData.group857Props}
    group856Props={progressData.group856Props}
    group855Props={progressData.group855Props}
  />
);
}

export default App;

function Progress(props) {
const { title, group858Props, group857Props, group856Props, group855Props } = props;

return (
  <div className="progress">
    <div className="overlap-group3">
      <h1 className="titlevalign-text-middlemulish-bold-eerie-black-24px">
        {title}
      </h1>
      <div className="step-by-step">
        <Group858 stepProps={group858Props.stepProps} />
        <div className="line"></div>
        <Group857 stepProps={group857Props.stepProps} />
        <div className="line"></div>
        <Group856 stepProps={group856Props.stepProps} />
        <div className="line"></div>
        <Group855 stepProps={group855Props.stepProps} />
      </div>
    </div>
  </div>
);
}

function Group858(props) {
const { stepProps } = props;

return (
  <div className="group-858">
    <Step>{stepProps.children}</Step>
    <div className="car-informationvalign-text-middlemulish-bold-eerie-black-16px">
      Car Information
    </div>
  </div>
);
}

function Step(props) {
const { children, className } = props;

return (
  <div className={`step-1 ${className || ""}`}>
    <div className="numbervalign-text-middlemulish-normal-white-14px">
      {children}
    </div>
  </div>
);
}

function Group857(props) {
const { stepProps } = props;

return (
  <div className="group-857">
    <div className="overlap-group">
      <Step className={stepProps.className}>
        {stepProps.children}
      </Step>
    </div>
    <div className="car-imagevalign-text-middlemulish-normal-fuscous-gray-16px">
      Car Image
    </div>
  </div>
);
}

function Group856(props) {
const { stepProps } = props;

return (
  <div className="group-856">
    <div className="overlap-group1">
      <Step className={stepProps.className}>
        {stepProps.children}
      </Step>
    </div>
    <div className="appraisal-formvalign-text-middlemulish-normal-fuscous-gray-16px">
      Appraisal Form
    </div>
  </div>
);
}

function Group855(props) {
const { stepProps } = props;

return (
  <div className="group-855">
    <div className="overlap-group2">
      <Step className={stepProps.className}>
        {stepProps.children}
      </Step>
    </div>
    <div className="completevalign-text-middlemulish-normal-fuscous-gray-16px">
      Complete
    </div>
  </div>
);
}

const step1Data = {
children: "1",
};

const group858Data = {
stepProps: step1Data,
};

const step2Data = {
children: "2",
className: "step",
};

const group857Data = {
stepProps: step2Data,
};

const step3Data = {
children: "3",
className: "step",
};

const group856Data = {
stepProps: step3Data,
};

const step4Data = {
children: "4",
className: "step",
};

const group855Data = {
stepProps: step4Data,
};

const progressData = {
group858Props: group858Data,
group857Props: group857Data,
group856Props: group856Data,
group855Props: group855Data,
};
