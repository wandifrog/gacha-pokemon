import React from 'react'
import styled from '@emotion/styled'
import * as CSS from 'csstype'
import { ComponentMetrics } from '../types/Component'

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
 * <Vstack>
 *   <div>Hello</div>
 *   <div>wWrld</div>
 * </Vstack>
 */
const VStack = ({
  children,
  top,
  bottom,
  align,
  height,
  justify,
  padding,
  style,
  width,
  ...props
}: VStackProps): JSX.Element => {

  const flexstyle: React.CSSProperties = {
    alignItems: align,
    height,
    justifyContent: justify,
    marginBottom: bottom,
    marginTop: top,
    padding,
    width,
    ...style
  }

  return <Flex style={flexstyle} {...props}>{children}</Flex>
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export default VStack
