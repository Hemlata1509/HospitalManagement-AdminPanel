import ApiIntegration from "api";

const getAllAlerts = () => (dispatch) => {

    ApiIntegration(dispatch,
        {
            api: "alerts",
            type: "alerts/alertsData"
        })
}

export default getAllAlerts;



