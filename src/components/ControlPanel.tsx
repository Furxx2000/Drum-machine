import { Display } from './Display';
import { Flex } from './styles/Flex.styled';
import { StyledControlPanel } from './styles/ControlPanel.styled';
import { PowerCtr } from './PowerCtr';
import { VolumeCtr } from './VolumeCtr';
import { useDrumState } from '../hooks/useDrumState';

export function ControlPanel() {
  const { volume } = useDrumState();
  const curVol = Math.floor(volume * 100);

  return (
    <StyledControlPanel>
      <h1>
        <span>Vol</span> {curVol}
        <span> %</span>
      </h1>
      <Flex>
        <Display />
        <PowerCtr />
      </Flex>
      <VolumeCtr />
    </StyledControlPanel>
  );
}
