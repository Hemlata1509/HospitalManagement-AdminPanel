import ApiIntegration from "api";

const getAllDeviceData = () => (dispatch) => {
    
    ApiIntegration(dispatch,
        {
            api: "devices/",
            type: "device/deviceData"
        })
}

export default getAllDeviceData;