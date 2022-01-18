export const themeData = () => async (dispatch) => {
    const data = JSON.parse(localStorage.getItem('device-data'));
    let defaultTheme;
    if (data.deviceType === 'iPhone') {
        defaultTheme = {
            themeName: "dark theme",
            moduleHeaderBackgroundColor: "#013668",
            moduleHeaderBorderRediusTopLeft: '10',
            moduleHeaderBorderRediusTopRight: '10',
            moduleHeaderBorderRediusBottomLeft: '10',
            moduleHeaderBorderRediusBottomRight: '10',
            headerFontWeight: "bold",
            moduleHeaderTextColor: "#FFFFFF",
            moduleHeaderTextFontSize: '18',   
            backgroundColor: "#D1D1DE",
            moduleHeaderShadow: '#00000033',
            moduleCellCardsTextPrimaryColor: "#000000",
            moduleCellTextColorPrimary: '#000000',
            moduleCellbackGroundColor: '#ffffff4d',
            fontSize: "16",
            bodyFontWeight: "bold",
            infoTileBackgroundColor: '#000000',
            moduleCellCardsbackgroundColor: '#FFFFFF',
        }
    }else if (data.deviceType === 'iPad-Pro') {
            defaultTheme = {
                themeName: "dark theme",
                moduleHeaderBackgroundColor: "#013668",
                moduleHeaderBorderRediusTopLeft: '10',
                moduleHeaderBorderRediusTopRight: '10',
                moduleHeaderBorderRediusBottomLeft: '10',
                moduleHeaderBorderRediusBottomRight: '10',
                headerFontWeight: "bold",
                moduleHeaderTextColor: "#FFFFFF",
                moduleHeaderTextFontSize: '24',
                backgroundColor: "#D1D1DE",
                moduleHeaderShadow: '#00000033',
                moduleCellCardsTextPrimaryColor: "#000000",
                moduleCellTextColorPrimary: '#000000',
                moduleCellbackGroundColor: '#ffffff4d',
                fontSize: "20",
                bodyFontWeight: "bold",
                infoTileBackgroundColor: '#000000',
                moduleCellCardsbackgroundColor: '#FFFFFF',
            }
        }else if (data.deviceType === 'Desktop') {
            defaultTheme = {
                themeName: "dark theme",
                moduleHeaderBackgroundColor: "#013668",
                moduleHeaderBorderRediusTopLeft: '10',
                moduleHeaderBorderRediusTopRight: '10',
                moduleHeaderBorderRediusBottomLeft: '10',
                moduleHeaderBorderRediusBottomRight: '10',
                headerFontWeight: "bold",
                moduleHeaderTextColor: "#FFFFFF",
                moduleHeaderTextFontSize: '28',
                backgroundColor: "#D1D1DE",
                moduleHeaderShadow: '#00000033',
                moduleCellCardsTextPrimaryColor: "#000000",
                moduleCellTextColorPrimary: '#000000',
                moduleCellbackGroundColor: '#ffffff4d',
                fontSize: "24",
                bodyFontWeight: "bold",
                infoTileBackgroundColor: '#000000',
                moduleCellCardsbackgroundColor: '#FFFFFF',
            }
        }
        dispatch({ type: 'Theme/ThemeLoaded', payload: defaultTheme })
    }

    export const updateThemeData = (updateTheme) => async (dispatch) => {
        await dispatch({ type: 'Theme/ThemeLoaded', payload: updateTheme })
    }

