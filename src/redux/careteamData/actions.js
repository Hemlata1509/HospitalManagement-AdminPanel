import ApiIntegration from "api";

const getAllCareteamData = () => (dispatch) => {

    ApiIntegration(dispatch,
        {
            api: "care-teams/",
            type: "careteam/careteamData"
        })
}

export default getAllCareteamData;


