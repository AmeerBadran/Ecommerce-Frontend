"use client";

import React from "react";

const MapSection = () => {
  return (
    <div className="w-full h-[500px] mb-20">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.4037817265484!2d-0.12038472380135424!3d51.50329707181196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b06b08b1f3%3A0xd70aa0a2e4f4dc0b!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1719319240006!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
