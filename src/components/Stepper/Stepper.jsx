import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import Uploader1 from './Uploader/Uploader1'
import AApraisalForm from './AppraisalForm/AApraisalForm';
import CompleteForm from './completeForm/CompleteForm';
import InformationForm from './InformationForm/InformationForm';
import './Stepper.css'
import { images } from '../../constants';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1)
    },
  textfield:{
    marginLeft: "33rem",           
    width: "30%"
  }
}));

function getSteps() {
  return [
    "Car Information",
    "Car Images",
    "Appraisal Form",
    "Complete",
  ];
}
const CarInformation = () => {

  return(
    <div>
      <InformationForm/>
    </div>
  );
};
const CarImages = () => {

  return(
    <div>
      <Uploader1/>
    </div>
  );
};
const AppraisalForm = () => {
  return(
  <>
    <AApraisalForm/>
  </>
    );
};
const Complete = () => {
  return(
    <>
      <CompleteForm/>
    </>
    );
};


function getStepContent(step) {
  switch (step) {
    case 0:
      return <CarInformation/>  
    case 1:
      return <CarImages/>
    case 2:
      return <AppraisalForm/>
    case 3:
      return<Complete/>
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const methods = useForm(); 


  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          <form onSubmit={methods.handleSumit}></form>
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              />                              
            );
          }

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
 
        
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{getStepContent(activeStep)}
       <div className='ff-btn'>
       <Button
          className={classes.button}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
        back
        </Button>

        <Button
        className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  type= "submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
        </div>     

              </form> 
        </FormProvider>              
        </>
      )}
    </div>
  );
};

export default LinaerStepper;