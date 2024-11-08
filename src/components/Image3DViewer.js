// app/components/ModelViewer.js
"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const ModelViewer = ({url,environmentImage,poster}) => {
  console.log(environmentImage,poster)
  useEffect(() => {
    // Load the model-viewer script on the client side
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
      script.type = "module";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return (
    <model-viewer
      alt="3D Model of a 1BHK Apartment"
      src={url}
      ar
      environment-image={environmentImage} // Update with absolute URL
      poster={poster} // Update with absolute URL
      shadow-intensity="1"
      camera-controls
      touch-action="pan-y"
      style={{ width: "100%", height: "700px" }}

    ></model-viewer>
  );
};

export default dynamic(() => Promise.resolve(ModelViewer), { ssr: false });
