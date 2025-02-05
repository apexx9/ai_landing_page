import React from "react";
import { COLORS } from "@/libs/constants";

const DeveloperQuotes = ({}) => {
    {/* Fetching the quotes from an API will be done using tanstack query and axios */}
    return(
        <div className="quote bg-transparent">
            <p 
            className="quote__text"
            style={{color: COLORS[3]}}>You are the Star!</p>
        </div>
    );
}

export default DeveloperQuotes;
