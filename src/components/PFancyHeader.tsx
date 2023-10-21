import { fontFamily } from 'constants/Fonts.constant';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useApp from 'hooks/App.hook';
import useTheme from 'hooks/Theme.hook';

/**
 * Pokemon fancy header component.
 * @example
 * <PFancyHeader />
 */
const PFancyHeader = (): JSX.Element => {
  const [state] = useApp();
  const colors = useTheme();

  const [activeIndex, setActiveIndex] = useState(-3);

  useEffect(() => {
    const incrementCount = () => {
      if (activeIndex < 6)
        setActiveIndex((prevCount) => prevCount + 1);
      else
        setActiveIndex(-3);
    };

    const intervalId = setInterval(incrementCount, 350);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <StyledDiv color={colors.text} darkMode={state.darkMode}>
      <span style={{ color: ([-3, -1, 0].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>P</span>
      <span style={{ color: ([-3, -1, 1].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>O</span>
      <span style={{ color: ([-3, -1, 2].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>K</span>
      <span style={{ color: ([-3, -1, 3].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>E</span>
      <span style={{ color: ([-3, -1, 4].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>M</span>
      <span style={{ color: ([-3, -1, 5].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>O</span>
      <span style={{ color: ([-3, -1, 6].includes(activeIndex)) ? colors.fancyHeaderActive : colors.fancyHeader }}>N</span>
    </StyledDiv>
  );
};

const StyledDiv = styled.div<{ darkMode: boolean }>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.darkMode ? fontFamily.pokemonHollow : fontFamily.pokemonSolid};
  font-size: 30px;
  font-weight: ${(props) => props.darkMode ? 'bold' : 'normal'};
  letter-spacing: ${(props) => props.darkMode ? '0' : '4px'};
  margin: 0;
  padding: 15px;
  text-align: center;
  user-select: none;
`;

export default PFancyHeader;
