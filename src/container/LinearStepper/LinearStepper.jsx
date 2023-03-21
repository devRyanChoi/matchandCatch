import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IoImageOutline } from 'react-icons/io';

import {useForm, FormProvider, useFormContext, Controller} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
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
  const {control} = useFormContext();
  return(
    <>
    <Controller 
      control={control}
      name="firstName" 
      render={(field) => (
        <TextField
            id="first-name"
            label="Maker"
            variant="outlined"
            placeholder="Enter Your Car Maker"
            fullWidth
            margin="normal"
            {...field}            
            />
          )}
        />  
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
          />
        </>
  );
};
const CarImages = () => {
  const {control} = useFormContext();
  return(
    <>
      <div className="wrapper">
        <div className="box">
          <div className="input-box">
            <h2 className="upload-area-title">Upload car image</h2>
            <form action="">
              <input type="file" className="upload" accept='.png, .jpg, .jpeg'/>
              <label htmlFor="upload" className="uploadlabel">
                <span><IoImageOutline/></span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  // return(
  //   <>
  //         <TextField
  //           id="email"
  //           label="E-mail"
  //           variant="outlined"
  //           placeholder="Enter Your E-mail Address"
  //           fullWidth
  //           margin="normal"
  //           name="emailAddress"
  //         />
  //         <TextField
  //           id="phone-number"
  //           label="Phone Number"
  //           variant="outlined"
  //           placeholder="Enter Your Phone Number"
  //           fullWidth
  //           margin="normal"
  //           name="phoneNumber"
  //         />
  //         <TextField
  //           id="alternate-phone"
  //           label="Alternate Phone"
  //           variant="outlined"
  //           placeholder="Enter Your Alternate Phone"
  //           fullWidth
  //           margin="normal"
  //           name="alternatePhone"
  //         />
  //       </>
  // );
};
const AppraisalForm = () => {
  return(
<>
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
        </>
    );
};
const Complete = () => {
  return(
<>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
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
  // const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods = useForm(); 


  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  // const isStepSkipped = (step) => {
  //   return skippedSteps.includes(step);
  // };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    // setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };
  
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
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
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
            
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                  back
                </Button>

                {/* {isStepOptional(activeStep) 
                && 
                (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )} */}

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  type= "submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </form> 
        </FormProvider>              
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
