import React from "react";
import {ContentContainer, LabelContainer, LabelContentContainer} from "./label-span.styles";

const LabelContent = ({label, content}) => {
    return <LabelContentContainer>
        <LabelContainer>{label}</LabelContainer> : <ContentContainer>{content}</ContentContainer>
    </LabelContentContainer>
}

export default LabelContent