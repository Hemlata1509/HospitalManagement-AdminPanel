/* eslint-disable no-param-reassign */

import React from 'react';
import HeaderDemo from 'views/app/designTheme/NewPage/demo/headerDemo';
import CareteamDemo from 'views/app/designTheme/NewPage/demo/careteamDemo';
import InfotileDemo from 'views/app/designTheme/NewPage/demo/infotileDemo';
import NurseBoardDemo from 'views/app/designTheme/NewPage/demo/nurseDemo';
import PainScale from 'views/app/designTheme/NewPage/demo/painScaleDemo';
import PatientDemo from 'views/app/designTheme/NewPage/demo/patientDemo';
import MedicationDemo from 'views/app/designTheme/NewPage/demo/medicationDemo';
import FooterDemo from 'views/app/designTheme/NewPage/demo/footerDemo';
import NextRound from 'views/app/designTheme/NewPage/demo/nextRound';
import LastVisit from 'views/app/designTheme/NewPage/demo/lastVisit';
import DrawingBoard from 'views/app/designTheme/NewPage/demo/drawingBoard'
import Weather from 'views/app/designTheme/NewPage/demo/weather';
import OrderOnline from 'views/app/designTheme/NewPage/demo/orderOnline';

let layoutIndex;
let defaultLayoutIndex;

export const changeLayout = (pages) => async (dispatch) => {
    const header = () => {
        return <HeaderDemo
            headerTitle="DEMO HEADER"
        />
    }
    const infotiles = () => {
        return <InfotileDemo
        />
    }
    const careteam = () => {
        return <CareteamDemo
        />
    }
    const nurseboard = () => {
        return <NurseBoardDemo
        />
    }
    const patientboard = () => {
        return <PatientDemo
        />
    }
    const medication = () => {
        return <MedicationDemo
        />
    }
    const footer = () => {
        return <FooterDemo
        />
    }
    const painScale = () => {
        return <PainScale />
    }
    const drawingBoard = () => {
        return <DrawingBoard />
    }
    const nextRound = () => {
        return <NextRound />
    }
    const lastVisit = () => {
        return <LastVisit />
    }
    const weather = () => {
        return <Weather />
    }
    const orderOnline = () => {
        return <OrderOnline />
    }

    const data = JSON.parse(localStorage.getItem('device-data'));

    const allLayoutData = [
        { i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
        { i: "infotiles", x: 0, y: 3, w: 2, h: 22, component: infotiles(), divStyle: 'infotileDivStyle' },
        { i: "careteam", x: 2, y: 3, w: 7, h: 22, component: careteam(), divStyle: 'careteamDivStyle', },
        { i: "nurseboard", x: 9, y: 3, w: 3, h: 9, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
        { i: "patientschedule", x: 9, y: 12, w: 3, h: 9, component: patientboard(), divStyle: 'patientDivStyle' },
        { i: "nextmedication", x: 9, y: 21, w: 3, h: 9, component: medication(), divStyle: 'medicationDivStyle' },
        { i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' },
        { i: "painscale", x: 0, y: 3, w: 3, h: 7, component: painScale(), divStyle: 'painScaleDivStyle' },
        { i: "nextround", x: 3, y: 3, w: 6, h: 11, component: nextRound(), divStyle: 'nextRoundBoardDivStyle', },
        { i: "lastvisit", x: 3, y: 14, w: 6, h: 11, component: lastVisit(), divStyle: 'lastVisitDivStyle', },
        { i: "drawingboard", x: 0, y: 10, w: 3, h: 15, component: drawingBoard(), divStyle: 'drawingBoarddDivStyle', },
        { i: "weather", x: 0, y: 3, w: 3, h: 8, component: weather(), divStyle: 'weatherDivStyle' },
        { i: "orderonline", x: 0, y: 6, w: 3, h: 14, component: orderOnline(), divStyle: 'orderOnlineDivStyle', },
    ]


    defaultLayoutIndex = [
        { key: '1', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
        { key: '2', i: "infotiles", x: 0, y: 3, w: 2, h: 22, component: infotiles(), divStyle: 'infotileDivStyle' },
        { key: '3', i: "careteam", x: 2, y: 3, w: 7, h: 22, component: careteam(), divStyle: 'careteamDivStyle', },
        { key: '4', i: "nurseboard", x: 9, y: 3, w: 3, h: 9, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
        { key: '5', i: "patientschedule", x: 9, y: 12, w: 3, h: 9, component: patientboard(), divStyle: 'patientDivStyle' },
        { key: '6', i: "nextmedication", x: 9, y: 21, w: 3, h: 9, component: medication(), divStyle: 'medicationDivStyle' },
        { key: '7', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
    ]

    if (data.deviceType === 'iPhone') {
        layoutIndex = await {
            1: [
                { key: '1', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
                { key: '2', i: "infotiles", x: 0, y: 3, w: 2, h: 22, component: infotiles(), divStyle: 'infotileDivStyle' },
                { key: '3', i: "careteam", x: 2, y: 3, w: 7, h: 22, component: careteam(), divStyle: 'careteamDivStyle', },
                { key: '4', i: "nurseboard", x: 9, y: 3, w: 3, h: 9, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
                { key: '5', i: "patientschedule", x: 9, y: 3, w: 3, h: 9, component: patientboard(), divStyle: 'patientDivStyle' },
                { key: '6', i: "nextmedication", x: 9, y: 21, w: 3, h: 9, component: medication(), divStyle: 'medicationDivStyle' },
                { key: '7', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
            ],
            2: [
                { key: '8', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
                { key: '9', i: "painScale", x: 0, y: 3, w: 3, h: 7, component: painScale(), divStyle: 'painScaleDivStyle' },
                { key: '10', i: "nextRound", x: 3, y: 3, w: 6, h: 11, component: nextRound(), divStyle: 'nextRoundBoardDivStyle', },
                { key: '11', i: "lastVisit", x: 3, y: 14, w: 6, h: 11, component: lastVisit(), divStyle: 'lastVisitDivStyle', },
                { key: '12', i: "drawingBoard", x: 0, y: 10, w: 3, h: 15, component: drawingBoard(), divStyle: 'drawingBoarddDivStyle', },
                { key: '13', i: "nurseboard", x: 9, y: 3, w: 3, h: 14, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
                { key: '14', i: "nextmedication", x: 9, y: 17, w: 3, h: 13, component: medication(), divStyle: 'medicationDivStyle' },
                { key: '15', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
            ],
            3: [
                { key: '16', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
                { key: '17', i: "weather", x: 0, y: 3, w: 3, h: 8, component: weather(), divStyle: 'weatherDivStyle' },
                { key: '18', i: "orderOnline", x: 0, y: 6, w: 3, h: 14, component: orderOnline(), divStyle: 'orderOnlineDivStyle', },
                // { key: '19', i: "nurseboard", x: 9, y: 3, w: 3, h: 9, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
                // { key: '5', i: "patientschedule", x: 9, y: 3, w: 3, h: 9, component: patientboard(), divStyle: 'patientDivStyle' },
                // { key: '6', i: "nextmedication", x: 9, y: 22, w: 3, h: 8, component: medication(), divStyle: 'medicationDivStyle' },
                { key: '20', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
            ]
        }
    } else if (data.deviceType === 'iPad-Pro') {
        layoutIndex = await {
            1: [
                { key: '1', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
                { key: '2', i: "infotiles", x: 0, y: 3, w: 2, h: 22, component: infotiles(), divStyle: 'infotileDivStyle' },
                { key: '3', i: "careteam", x: 2, y: 3, w: 7, h: 22, component: careteam(), divStyle: 'careteamDivStyle', },
                { key: '4', i: "nurseboard", x: 9, y: 3, w: 3, h: 9, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
                { key: '5', i: "patientschedule", x: 9, y: 3, w: 3, h: 9, component: patientboard(), divStyle: 'patientDivStyle' },
                { key: '6', i: "nextmedication", x: 9, y: 21, w: 3, h: 9, component: medication(), divStyle: 'medicationDivStyle' },
                { key: '7', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
            ],
            2: [
                { key: '8', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
                { key: '9', i: "painScale", x: 0, y: 3, w: 3, h: 7, component: painScale(), divStyle: 'painScaleDivStyle' },
                { key: '10', i: "nextRound", x: 3, y: 3, w: 6, h: 11, component: nextRound(), divStyle: 'nextRoundBoardDivStyle', },
                { key: '11', i: "lastVisit", x: 3, y: 14, w: 6, h: 11, component: lastVisit(), divStyle: 'lastVisitDivStyle', },
                { key: '12', i: "drawingBoard", x: 0, y: 10, w: 3, h: 15, component: drawingBoard(), divStyle: 'drawingBoarddDivStyle', },
                { key: '13', i: "nurseboard", x: 9, y: 3, w: 3, h: 14, component: nurseboard(), divStyle: 'nurseboardDivStyle' },
                { key: '14', i: "nextmedication", x: 9, y: 17, w: 3, h: 13, component: medication(), divStyle: 'medicationDivStyle' },
                { key: '15', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
            ],
            3: [
                { key: '16', i: "header", x: 0, y: 0, w: 12, h: 3, component: header(), divStyle: 'headerDivStyle', },
                { key: '17', i: "weather", x: 0, y: 3, w: 3, h: 8, component: weather(), divStyle: 'weatherDivStyle' },
                { key: '18', i: "orderOnline", x: 0, y: 6, w: 3, h: 14, component: orderOnline(), divStyle: 'orderOnlineDivStyle', },
                { key: '20', i: "footer", x: 0, y: 25, w: 9, h: 5, component: footer(), divStyle: 'footerDivStyle' }
            ]
        }
    }

    else if (data.deviceType === 'Desktop') {
        layoutIndex = pages.map(() => {
          return []
        })
    }
    dispatch({
        type: 'layout/layoutLoaded',
        payload: layoutIndex,
    })
    dispatch({
        type: 'alllayout/layoutLoaded',
        payload: allLayoutData
    })
    dispatch({
        type: 'datalayout/layoutLoaded',
        payload: defaultLayoutIndex
    })
}

export const updateLayoutData = (updateLayout, page) => async (dispatch) => {

    layoutIndex[page] = await updateLayout;
    dispatch({
        type: 'layout/layoutLoaded',
        payload: layoutIndex,
    })
}


export const updatePageData = () => async (dispatch) => {

    layoutIndex.splice(layoutIndex.length - 1);
    dispatch({
        type: 'layout/layoutLoaded',
        payload: layoutIndex,
    })
}

export const updateAllLayoutdata = (data) => async(dispatch) => {
    console.log("data",data)
    dispatch({
        type: 'alllayout/layoutLoaded',
        payload: data
    })
}