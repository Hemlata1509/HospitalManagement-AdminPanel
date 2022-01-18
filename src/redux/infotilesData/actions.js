import ApiIntegration from "api";

const getAllInfotilesData = () => (dispatch) => {

    ApiIntegration(dispatch,
        {
            api: "info-tiles/",
            type: "infotiles/infotilesData"
        })
}

export default getAllInfotilesData;


