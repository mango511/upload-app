import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1C3E6E",  //blue
        },
        secondary: {
            main: "#109D59", //green
            light: "#B3B3B3"  //gray
        },
        warning: {
            main: "#FA9D26" //yellow
        },
        text: {
            primary: "#556e85" //light gray
        }
    },
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: "12px"
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: "12px"
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    padding: "4.5px 14px"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: "11px",
                    margin: "0 15px",
                    borderRadius: "6px"
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    margin: "0 4px !important"
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                container: {
                    background: "#B3B3B3"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#092c4c",
                    fontWeight: "600"
                }
            }
        }
    }
})

export default theme