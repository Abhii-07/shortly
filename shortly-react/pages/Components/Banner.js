import React from "react";
import { AboutImage, StyledContent, Title } from "../../styles/Banner.styled";
// import people from "../../Assets/people.png"
import people2 from "../../Assets/people2.svg"

const Banner = () => {
  return (
    <StyledContent>
        <Title>More than just shorter links</Title>
        <AboutImage src={people2} />
    </StyledContent>
  );
};

export default Banner;
