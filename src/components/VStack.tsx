import { ComponentMetrics } from 'types/Component';
import CSS from 'csstype';
import styled from '@emotion/styled';

type VStackProps = ComponentMetrics & React.HTMLAttributes<HTMLDivElement> & {
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
 * Vertical Stack component.
 * @example
 * <VStack>
 *   <div>Hello</div>
 *   <div>World</div>
 * </VStack>
 */
const VStack = ({
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
}: VStackProps): JSX.Element => {

  const styVStack: React.CSSProperties = {
    alignItems: align,
    height,
    justifyContent: justify,
    marginBottom: bottom,
    marginLeft: left,
    marginRight: right,
    marginTop: top,
    padding,
    width,
    ...style,
  };

  return <StyledDiv style={styVStack} {...props}>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default VStack;
