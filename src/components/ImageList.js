import React from "react";

const ImageList = props => {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} width='150px' src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
