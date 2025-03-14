import React from "react";
//dynamic routing feature of next.js

const FeatureDetails = async ({params} : {params : Promise<{featureId : String}>}) => {
    const featureid = (await params).featureId;
    return(
        <div className="feature-details">
            <h1>Feature Details of {featureid}</h1>
            <p>Some details of the feature</p>
        </div>
    )
}
export default FeatureDetails;