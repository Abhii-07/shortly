import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  InputBox,
  StyledContainer,
} from "../../styles/UrlContainer.styled";
import useLocalStorage from "./Utils/useLocalStorage";

const UrlContainer = () => {
  const [shortenedLinks, setShortenedLinks] = useLocalStorage(
    "shortendLinks",
    ""
  );

  const [selectedLink, setSelectedLink] = useState(null);
  const [errorRes, setErrorRes] = useState(null);

  async function getShortenedLink(url) {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .catch((err) => setErrorRes(err));

    return res.result.full_short_link;
  }

  async function onSubmit(values) {
    const shortLink = await getShortenedLink(values.link);
    const id = uuid();
    const newShortenedLink = {
      originalLink: values.link,
      shortenedLink: shortLink,
      id,
    };
    setShortenedLinks([newShortenedLink, ...shortenedLinks]);
    reset();
  }

  return (
    <StyledContainer>
      <form onSubmit={onSubmit}>
        <InputBox
          placeholder="Shorten a link here..."
          required="please add a link"
          id="link"
        />
        <Button type="submit">Shorten It!</Button>
      </form>
    </StyledContainer>
  );
};

export default UrlContainer;
