import { Button, LinearProgress } from '@mui/material'
import React from 'react'
import useStyles from './Steps.styles'
import { ArrowBackIos, ArrowForwardIos, PlayArrow, Pause, Replay, SkipPrevious, SkipNext } from '@mui/icons-material';

const Steps = ({ currentStepIndex, nextStep, prevStep, togglePlayStep, replayStep, stepsLen, isPlaying, skipNextStep, skipPreviousStep }) => {
    const classes = useStyles()
    return (
        <div>
            <div>
                <LinearProgress className={classes.progressContainer} variant="determinate" value={Math.floor((currentStepIndex / (stepsLen - 1)) * 100)} />
            </div>
            <Button variant="outlined" onClick={skipPreviousStep} disabled={currentStepIndex === 0 || isPlaying}><SkipPrevious /></Button>
            <Button variant="outlined" onClick={prevStep} disabled={currentStepIndex === 0 || isPlaying}><ArrowBackIos /></Button>
            {
                isPlaying ? (<Button variant="outlined" onClick={togglePlayStep}><Pause /></Button>)
                    : currentStepIndex === stepsLen - 1 ? (<Button variant="outlined" onClick={replayStep}><Replay /></Button>)
                        : (<Button variant="outlined" onClick={togglePlayStep}><PlayArrow /></Button>)
            }

            <Button variant="outlined" onClick={nextStep} disabled={currentStepIndex === stepsLen - 1 || isPlaying}><ArrowForwardIos /></Button>
            <Button variant="outlined" onClick={skipNextStep} disabled={currentStepIndex === stepsLen - 1 || isPlaying}><SkipNext /></Button>
        </div>
    )
}

export default Steps
