import React from 'react'
import * as CSS from 'csstype'
import {ComponentMetrics} from '../types/Component'
import {fontSize} from '../constants/Fonts.constant'
import useTheme from '../hooks/Theme.hook'

type TextProps = ComponentMetrics & React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode | string
  /**
   * Font weight
   */
  bold?: boolean
  /**
   * Text align center
   */
  center?: boolean
  /**
   * onClick event
   */
  onClick?: () => void
  /**
   * Font family
   */
  font?: string
  /**
   * Font style italic
   */
  italic?: boolean
  /**
   * Font size
   */
  size?: CSS.Property.FontSize
  /**
   * Span element
   */
  span?: boolean
}

/**
 * Text component.
 * @example
 * <Text>Hello world</Text>
 * <Text top="5px">Nakama</Text>
 * <Text size="14px" color="cadetblue" center>Mulai aja dulu</Text>
 */
const Text = ({
  children,
  top,
  right,
  bottom,
  left,
  bold = false,
  center = false,
  color,
  font,
  italic = false,
  onClick,
  size = fontSize.normal,
  span = false,
  ...props
}: TextProps): JSX.Element => {
  const colors = useTheme()

  const textStyle: React.CSSProperties = {
    color: color || colors.text,
    cursor: onClick ? 'pointer' : undefined,
    fontFamily: font,
    fontSize: size,
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: bold ? 'bold' : 'normal',
    marginBottom: bottom,
    marginLeft: left,
    marginRight: right,
    marginTop: top,
    textAlign: center ? 'center' : undefined,
    userSelect: onClick ? 'none' : 'initial',
  }

  return React.createElement(
    span ? 'span' : 'div',
    {
      onClick: () => onClick && onClick(),
      style: textStyle,
      ...props,
    },
    children
  )

  // return span === true
  //   ? <span style={textStyle} onClick={() => onClick && onClick()} {...props}>{children}</span>
  //   : <div style={textStyle} onClick={() => onClick && onClick()} {...props}>{children}</div>
}

export default Text
