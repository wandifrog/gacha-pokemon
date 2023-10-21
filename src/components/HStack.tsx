import { ComponentMetrics } from 'types/Component';
import CSS from 'csstype';
import styled from '@emotion/styled';

type HStackProps = ComponentMetrics & React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  /**
   * Align items
   */
  align?: CSS.Property.AlignItems
  /**
   * Height
   */
  height?: CSS.Property.Height
  /**
   * Justify content
   */
  justify?: CSS.Property.JustifyContent
  /**
   * Width
   */
  width?: CSS.Property.Width
  /**
   * Padding
   */
  padding?: CSS.Property.Padding
}

/**
 * Horizontal Stack component.
 * @example
 * <HStack>
 *   <div>Hello</div>
 *   <div>wWrld</div>
 * </HStack>
 */
const HStack = ({
  children,
  top,
  right,
  bottom,
  left,
  align,
  height,
  justify,
  padding,
  style,
  width,
  ...props
}: HStackProps): JSX.Element => {

  const styHStack: React.CSSProperties = {
    alignItems: align,
    height,
    justifyContent: justify,
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    padding,
    width,
    ...style,
  };

  return <StyledDiv style={styHStack} {...props}>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default HStack;
