import React from "react"
import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const rebootStyles = reboot({
  // black: '#000',
  // fontFamilyBase:
  //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  // fontFamilyMonospace:
  //   'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  // fontSizeBase: '1rem',
  // fontWeightBase: 400,
  // lineHeightBase: 1.5,
  // bodyColor: '#212529',
  bodyBg: 'rgba(0, 0, 0, 0.95)',
  // headingsMarginBottom: '0.5rem',
  // paragraphMarginBottom: '1rem',
  // labelMarginBottom: '0.5rem',
  // dtFontWeight: 700,
  // linkColor: '#007bff',
  // linkDecoration: 'none',
  // linkHoverColor: '#0056b3',
  // linkHoverDecoration: 'underline',
  // tableCellPadding: '0.75rem',
  // textMuted: '#6c757d'
});

const GlobalStyle = createGlobalStyle`
  ${rebootStyles}

  html,
  body,
  #___gatsby,
  #___gatsby > div {
    width: 100%;
    min-height: 100%;
  }

  #___gatsby > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)
