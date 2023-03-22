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
import { BsCardImage } from 'react-icons/bs';

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

    </>
  );
};
const AppraisalForm = () => {
  return(
  <>
    <div className='af-form'>
      <div>
        <p>1.Select the condition that best mathches your vehicle.</p>
        <div className='ci1-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Excellent(Looks new)
        </div>
        <div className="ci1-checks2">
          <input type="radio" name = "subject" value = "appia2"/>Good (Some normal wears)
        </div>
        <div className="ci1-check3">
          <input type="radio" name = "subject" value = "appia3"/>Bad (Numerous wears that require repairing)
        </div>
      </div>
      <div></div>
      <div>
        <p>2.Select the condition that best mathches your rims.</p>
        <div className='ci2-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Excellent(Looks new)
        </div>
        <div className="ci2-checks2">
          <input type="radio" name = "subject" value = "appia2"/>Good (Some normal wears)
        </div>
        <div className="ci2-check3">
          <input type="radio" name = "subject" value = "appia3"/>Bad (Numerous wears that require repairing)
        </div>
      </div>
      <div>
          <p>3. Do you see any wearing lights appearing on your car's dashboard?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes (If yes, What kind of warning light illuniated?)
        </div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No
        </div>
      </div>
      <div>
          <p>4. Have you perfomed any mechnical variation on your car from producton Specs?</p>
          <div className='ci4-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes (If yes, please choose from the following options)
        </div>
        <div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Exhaust
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Suspension
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Exterior
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Performance
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Car Infotainment system
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Other
          </div>
        </div>
        <div className="ci-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No
        </div>
      </div>
      <div>
          <p>5. Do you have any spare keys for your vehicle?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      <div>
          <p>6. Does your vehicle have a spare tire?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      <div>
          <p>7. Does your vehicle have a spare tire?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      <div>
          <p>8. Does your vehicle have any records of accident repairs</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      <div>
          <p>9. Does he vehicle have any mechanical probelm?</p>
          <div className='ci9-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes (If yes, please choose from the following options)
        </div>
        <div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Powertrain(Engine & Trnsmission)
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Brakes
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />A/C
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Exhaust (example: Black smoke or Loud noise)
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Suspension
          </div>
          <div>
            <input type="checkbox" className="checkbox exhaust" />Oil Leak
          </div>
        </div>
        <div className="ci-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No
        </div>
      </div>
      <div>
          <p>10. Does your vehicle have a spare tire?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      <div>
          <p>11. Does your vehicle have a spare tire?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
      <div>
          <p>12. Do you find any bent or dent on your vehicle?</p>
          <div className='ci3-check1'>
          <input type="radio" name = "subject" value = "appia1"/>Yes</div>
        <div className="ci3-checks2">
          <input type="radio" name = "subject" value = "appia2"/> No </div>
      </div>
    </div>
    
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
