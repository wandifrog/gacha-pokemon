import React from 'react'
import styled from '@emotion/styled'
import * as CSS from 'csstype'
import {ComponentMetrics} from '../types/Component'

type PFlexProps = ComponentMetrics & React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  /**
   * Align items
   */
  align?: CSS.Property.AlignItems
  /**
   * Flex Direction
   */
  flexDirection?: CSS.Property.FlexDirection
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
 * Pokemon flex component.
 * @example
 * <PFlex>
 *   <div>Hello</div>
 *   <div>wWrld</div>
 * </PFlex>
 */
const PFlex = ({
  children,
  top,
  bottom,
  align,
  flexDirection,
  height,
  justify,
  padding,
  style,
  width,
  ...props
}: PFlexProps): JSX.Element => {

  const flexstyle: React.CSSProperties = {
    alignItems: align,
    flexDirection,
    height,
    justifyContent: justify,
    marginBottom: bottom,
    marginTop: top,
    padding,
    width,
    ...style,
  }

  return <Flex style={flexstyle} {...props}>{children}</Flex>
}

const Flex = styled.div`
  display: flex;
`

export default PFlex
