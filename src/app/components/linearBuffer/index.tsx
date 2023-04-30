import * as React from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import {
  LinearProgressContainer,
  LinearProgressWithLabelContainer,
  LinearWithValueLabelContainer,
  PercentageText,
  PercentageTextContainer,
} from './styles';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <LinearProgressWithLabelContainer>
      <LinearProgressContainer>
        <LinearProgress variant="determinate" {...props} />
      </LinearProgressContainer>
      <PercentageTextContainer>
        <PercentageText>{`${Math.round(props.value)}%`}</PercentageText>
      </PercentageTextContainer>
    </LinearProgressWithLabelContainer>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10,
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearWithValueLabelContainer>
      <LinearProgressWithLabel className="linear-progress" value={progress} />
    </LinearWithValueLabelContainer>
  );
}
