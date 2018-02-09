/* eslint-disable no-magic-numbers */
export { defaultTheme } from './default-theme'

/**
 * Get property from pallete
 * @param {string} name Name of the palette
 * @param {number|string} [shade] Shading for selected palette
 * @param {string} [defaultValue] Value return if color not found in palette
 * @return {(props: any) => string}
 */
export const palette = (name, shade = 500, defaultValue = 'black') => (props) => (
  props.theme.palette[name] ? (props.theme.palette[name][shade] || defaultValue) : defaultValue
)

/**
 * Apply styles if property found
 * @param {string} name Property name to search for
 * @param {object|string} stylesThen Styles applied if property found and truthy
 * @param {object|string} [stylesElse] Styles applied if property not found or found but falsy
 * @return {(props: any) => object|string}
 */
export const ifProp = (name, stylesThen, stylesElse = null) => (props) => props[name]
  ? stylesThen
  : stylesElse

