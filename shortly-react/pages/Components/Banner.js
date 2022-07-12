import React from "react";
import { AboutImage, StyledContent, Title } from "../../styles/Banner.styled";

const Banner = () => {
  return (
    <StyledContent>
        <Title>More than just shorter links</Title>
        <AboutImage src="https://drive.google.com/file/d/1Xw7eZyzu_aa-12zM74BiY-0IIfxrBoJE/view?usp=sharing" />
    </StyledContent>
  );
};

export default Banner;
