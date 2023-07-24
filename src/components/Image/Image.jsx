import React from "react";

function Image({ src, alt, ClassName }) {
	return <img className={ClassName} src={src} alt={alt} />;
}

export default Image;
