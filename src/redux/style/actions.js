const styleData = (defaultThemeData) => async (dispatch) => {
    let updateStyle;
    const data = JSON.parse(localStorage.getItem('device-data'));

    if(data.deviceType === 'iPhone'){
        updateStyle = {
            headerDivStyle: {
                backgroundColor: defaultThemeData.moduleHeaderBackgroundColor, color: defaultThemeData.moduleHeaderTextColor, marginBottom: '5px',
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                boxShadow: `2px 3px 7px 2px ${defaultThemeData.moduleHeaderShadow}`,
            },
            infotileDivStyle: {
                backgroundColor: defaultThemeData.infoTileBackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            careteamDivStyle: {
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
            },
            nurseboardDivStyle: {
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
            },
            patientDivStyle: {
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            medicationDivStyle: {
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            painScaleDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            drawingBoarddDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            nextRoundBoardDivStyle:{
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            lastVisitDivStyle:{
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            weatherDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            orderOnlineDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            footerDivStyle: {
                padding: '0px 15px',
            },
            header: {
                head: { fontSize: `${defaultThemeData.moduleHeaderTextFontSize}px`, fontWeight: defaultThemeData.headerFontWeight, },
            },
            infotiles: {
                card1: { margin: '5px' ,padding: '10px', backgroundColor: '#C5070A', height: '89px', width: '116px' },
                card2: { margin: '5px', padding: '10px', backgroundColor: '#BFC83C', height: '89px', width: '116px' },
                card3: { margin: '5px', padding: '10px', backgroundColor: '#4A2966', height: '89px', width: '116px' },
                card4: { margin: '5px', padding: '10px', backgroundColor: '#0A7F78', height: '89px', width: '116px' },
                font: { color: '#FFFFFF', marginBottom: '0px', fontSize: '40px', paddingBottom: '0px' },
                paragraph: { fontSize: '10px', color: '#FFFFFF', marginBottom: '0px' },
            },
            careteam: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
            },
            nurseboard: {
                card: {
                    borderRadius: '5px', margin: '5px', backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
            },
            patientschedule: {
                paragraph: {
                    marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
                pButton: {
                    padding: '1px 5px', backgroundColor: defaultThemeData.moduleHeaderBackgroundColor, color: defaultThemeData.moduleHeaderTextColor, border: 'none',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`
                }
            },
            next_medication: {
                card: {
                    marginBottom: '5px', backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '1vw', height: '40px', width: '70px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`
                },
                font: {
                    textAlign:'left',fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
            },
            painScale:{
                font:{
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                font2:{
                    fontSize: '50px', fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                }
            },
            nextRound: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontWeight:'bold'
                },
            },
            lastVisit: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontWeight:'bold'
                },
            },
            weather:{
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                font2: {
                    fontSize: '65px',alignSelf:'center', fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
            },
            orderOnline:{
                img:{
                    marginLeft: '-30px' ,fontSize:'300px',marginTop:'40px', color: defaultThemeData.moduleHeaderBackgroundColor
                }
            },
            footer: {
                footerButton: {
                    backgroundColor: '#FFFFFF', border: 'none', height: '90px',
                    padding: '17px 12px', width: '85px', textAlign: 'center',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                footerImg: {
                    height: '6vh',
                }
            },
        }
    } else if(data.deviceType === 'iPad-Pro'){
        updateStyle = {
            headerDivStyle: {
                backgroundColor: defaultThemeData.moduleHeaderBackgroundColor, color: defaultThemeData.moduleHeaderTextColor, marginBottom: '5px',
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                boxShadow: `2px 3px 7px 2px ${defaultThemeData.moduleHeaderShadow}`,
            },
            infotileDivStyle: {
                backgroundColor: defaultThemeData.infoTileBackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            careteamDivStyle: {
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
            },
            nurseboardDivStyle: {
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
            },
            patientDivStyle: {
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            medicationDivStyle: {
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            painScaleDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            drawingBoarddDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            nextRoundBoardDivStyle:{
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            lastVisitDivStyle:{
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            weatherDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            orderOnlineDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            footerDivStyle: {
                padding: '0px 15px',
            },
            header: {
                head: { fontSize: `${defaultThemeData.moduleHeaderTextFontSize}px`, fontWeight: defaultThemeData.headerFontWeight, },
            },
            infotiles: {
                card1: { margin: '5px' ,padding: '10px', backgroundColor: '#C5070A', height: '89px', width: '116px' },
                card2: { margin: '5px', padding: '10px', backgroundColor: '#BFC83C', height: '89px', width: '116px' },
                card3: { margin: '5px', padding: '10px', backgroundColor: '#4A2966', height: '89px', width: '116px' },
                card4: { margin: '5px', padding: '10px', backgroundColor: '#0A7F78', height: '89px', width: '116px' },
                font: { color: '#FFFFFF', marginBottom: '0px', fontSize: '40px', paddingBottom: '0px' },
                paragraph: { fontSize: '10px', color: '#FFFFFF', marginBottom: '0px' },
            },
            careteam: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
            },
            nurseboard: {
                card: {
                    borderRadius: '5px', margin: '5px', backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
            },
            patientschedule: {
                paragraph: {
                    marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
                pButton: {
                    padding: '1px 5px', backgroundColor: defaultThemeData.moduleHeaderBackgroundColor, color: defaultThemeData.moduleHeaderTextColor, border: 'none',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`
                }
            },
            next_medication: {
                card: {
                    marginBottom: '5px', backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '1vw', height: '40px', width: '70px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`
                },
                font: {
                    textAlign:'left',fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary
                },
            },
            painScale:{
                font:{
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                font2:{
                    fontSize: '50px', fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                }
            },
            nextRound: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontWeight:'bold'
                },
            },
            lastVisit: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontWeight:'bold'
                },
            },
            weather:{
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                font2: {
                    fontSize: '65px',alignSelf:'center', fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
            },
            orderOnline:{
                img:{
                    marginLeft: '-30px' ,fontSize:'300px',marginTop:'40px', color: defaultThemeData.moduleHeaderBackgroundColor
                }
            },
            footer: {
                footerButton: {
                    backgroundColor: '#FFFFFF', border: 'none', height: '90px',
                    padding: '17px 12px', width: '85px', textAlign: 'center',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                footerImg: {
                    height: '6vh',
                }
            },
        }
    } else if(data.deviceType === 'Desktop'){
        updateStyle = {
            headerDivStyle: {
                backgroundColor: defaultThemeData.moduleHeaderBackgroundColor, color: defaultThemeData.moduleHeaderTextColor, marginBottom: '5px',
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                boxShadow: `2px 3px 7px 2px ${defaultThemeData.moduleHeaderShadow}`, 
            },
            infotileDivStyle: {
                backgroundColor: defaultThemeData.infoTileBackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            careteamDivStyle: {
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
            },
            nurseboardDivStyle: {
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
            },
            patientDivStyle: {
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            medicationDivStyle: {
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            painScaleDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            drawingBoarddDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            nextRoundBoardDivStyle:{
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            lastVisitDivStyle:{
                backgroundColor: defaultThemeData.moduleCellbackGroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            weatherDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            orderOnlineDivStyle:{
                backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
            },
            footerDivStyle: {
                padding: '0px 15px',
            },
            header: {
                head: { fontSize: `${defaultThemeData.moduleHeaderTextFontSize}px`, fontWeight: defaultThemeData.headerFontWeight, },
            },
            infotiles: {
                card1: { margin: '5px' ,padding: '20px', backgroundColor: '#C5070A', height: '125px', width: '49%' },
                card2: { margin: '5px', padding: '20px', backgroundColor: '#BFC83C', height: '125px', width: '49%' },
                card3: { margin: '5px', padding: '20px', backgroundColor: '#4A2966', height: '125px', width: '49%' },
                card4: { margin: '5px', padding: '20px', backgroundColor: '#0A7F78', height: '125px', width: '49%' },
                font: { color: '#FFFFFF', marginBottom: '0px', fontSize: '50px', paddingBottom: '0px' },
                paragraph: { fontSize: '14px', color: '#FFFFFF', marginBottom: '0px' },
            },
            careteam: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '70px', width: '100px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontSize:'16px'
                },
            },
            nurseboard: {
                card: {
                    borderRadius: '5px', margin: '5px',padding:'5px', backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary,fontSize:'20px'
                },
            },
            patientschedule: {
                paragraph: {
                    marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary,fontSize:'20px'
                },
                pButton: {
                    padding: '1px 5px', backgroundColor: defaultThemeData.moduleHeaderBackgroundColor, color: defaultThemeData.moduleHeaderTextColor, border: 'none',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`
                }
            },
            next_medication: {
                card: {
                    marginBottom: '5px', backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor,padding:'3px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '1vw', height: '50px', width: '80px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`
                },
                font: {
                    textAlign:'left',fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary,fontSize:'16px'
                },
            },
            painScale:{
                font:{
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                font2:{
                    fontSize: '50px', fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                }
            },
            nextRound: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '70px', width: '100px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontSize:'16px', fontWeight:'bold'
                },
            },
            lastVisit: {
                card: {
                    backgroundColor: defaultThemeData.moduleCellCardsbackgroundColor, marginBottom: '5px', padding: '5px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                img: {
                    marginRight: '10px', height: '70px', width: '100px',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                paragraph: {
                    textAlign:'left',marginBottom: '0px', color: defaultThemeData.moduleCellTextColorPrimary, fontSize:'16px', fontWeight:'bold'
                },
            },
            weather:{
                font: {
                    fontSize: `${defaultThemeData.fontSize}px`, fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
                font2: {
                    fontSize: '65px',alignSelf:'center', fontWeight: defaultThemeData.bodyFontWeight, color: defaultThemeData.moduleCellCardsTextPrimaryColor, marginBottom: '0px'
                },
            },
            orderOnline:{
                img:{
                    marginLeft: '-30px' ,fontSize:'300px',marginTop:'40px', color: defaultThemeData.moduleHeaderBackgroundColor
                }
            },
            footer: {
                footerButton: {
                    backgroundColor: '#FFFFFF', border: 'none', height: '150px',
                    padding: '25px 0px', width: '120px', textAlign: 'center',
                    borderRadius: `${defaultThemeData.moduleHeaderBorderRediusTopLeft}px ${defaultThemeData.moduleHeaderBorderRediusTopRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomRight}px ${defaultThemeData.moduleHeaderBorderRediusBottomLeft}px`,
                },
                footerImg: {
                    height: '100px',
                }
            },
        }
    }

    // console.log("updatestyle",updateStyle);
     dispatch({ type: 'style/styleLoaded', payload: updateStyle })
}

export default styleData;
