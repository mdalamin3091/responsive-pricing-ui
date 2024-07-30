import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primaryColor:"#b78deb",
    primaryHoverColor:"#6e41a6",
    infoColor:"#4cb3fd",
    infoHoverColor:"#1884d1",
    successColor:"#68cb9b",
    successHoverColor:"#40a373",
    warningColor:"#ffb72c",
    warningHoverColor:"#d69312",
    white:"#ffffff",
    textColor:"#49687e",
    dangerColor:"#ff424d",
    borderColor:"#eaeff2",
  },

  shadows: {
    tooltipShadow:"0 0 18px 0 rgba(73, 104, 126, .2)",
    dropdownShadow:"0 8px 16px rgba(0, 0, 0, .08)"
  },
  
  fonts: {
    Rubik: 'Rubik',
  },
  paddings: {
    container: '15px',
    pageTop: '30px',
  },
  margins: {
    pageTop: '30px',
  },
}