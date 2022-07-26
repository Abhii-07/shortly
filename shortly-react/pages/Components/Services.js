import React from "react";
import { StyledServices, Subtitle, Title } from "../../styles/Services.styled";
import Service from "./Service";
import IconBrand from "../../Assets/IconBrand.svg"

const Services = () => {
  return (
    <StyledServices>
      <Title>Advanced Statistics</Title>
      <Subtitle>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Subtitle>
      <div>
      <Service
              index={1}
              icon={
                <IconBrand height="25px" width="35px" />
              }
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <Service
              index={2}
              icon={
                <IconBrand height="25px" width="35px" />
              }
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Service
              index={3}
              icon={
                <IconBrand height="25px" width="35px" />
              }
              title="Fully Customizable"
              text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
      </div>
    </StyledServices>
  );
};

export default Services;
