'use client'

import React from "react";
import Image from "next/image";


{/* Constants Import */}
import { COLORS } from "@/libs/constants";

{/* Components Import */}
import CopyRight from "./shared/copyRight";
import DeveloperQuotes from "./shared/developerQuotes";
import PageProgressBar from "./shared/pageProgressBar";

{/* Assets import */}
import HEAD_IMAGE from "../../public/assets/Images/head.png";
import EXPERIENCE_IMAGE from "../../public/assets/Images/creating-on-experience.png";





const Hero = ({className} : {className? : string}) => {


    return(
        <div className={`hero relative bg-transparent content-wrapper overflow-hidden ${className}`}>
            <div className="hero__content flex flex-col items-center justify-center h-full relative">
                <h1 className="hero__content--name text-[199px] absolute top-1/3 w-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]" style={{ color: COLORS[3] }}>
                    AARON
                </h1>
                <div className="hero__content--headImage relative z-[2] overflow-hidden drop-shadow-2xl">
                    <Image
                    src={HEAD_IMAGE}
                    alt={"The Image of the Head"}
                    width={600}
                    height={455}
                    className="w-auto  mt-[-100px] "
                    // onClick={handleImageClick}
                    />
                </div>
                <div className="hero__content--job absolute z-[3] mt-[-170px] overflow-hidden">
                <Image
                    src={EXPERIENCE_IMAGE}
                    alt={"The Image of the Head"}
                    width={600}
                    height={600}
                    className="w-auto h-auto"
                    // onClick={handleImageClick}
                    />
                    <p className="text-sm place-self-center uppercase mt-[100px]" style={{color: COLORS[3]}}>
                        Software Engineer
                    </p>
                </div>
            </div>
            <div className="hero__footer absolute bottom-0 left-0 right-0">
            </div>
        </div>
    )
}

export default Hero;
