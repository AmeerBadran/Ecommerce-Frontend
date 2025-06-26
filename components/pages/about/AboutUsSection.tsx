"use client";

import React from "react";

const AboutUsSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 py-20">
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="w-34 h-[2px] bg-secondary"></div>
          <span className="text-lg font-semibold text-secondary uppercase">
            Our History
          </span>
        </div>
      </div>
      <div className="flex items-center 2md:ml-37 gap-3 mb-6">
        <h2 className="text-3xl sm:text-3xl font-medium leading-snug text-gray-900 mb-4">
          Hello, We are Outstock.
          <br />
          <span className="font-bold text-gray-900">
            With 25+ Years of Experience
          </span>
        </h2>
      </div>

      <p className="text-base text-gray-700 mb-4">
        It is accompanied by a case that can contain up to three different
        diffusers and can be used for dry storage of loose tea. The perfect way
        to enjoy brewing tea on low hanging fruit to identify. Lighting is a
        minimal residence located in Tokyo, Japan, designed by Outstock. Large
        tiles were arranged on the counter top plate near the window.
      </p>

      <p className="text-base text-gray-500">
        The perfect way to enjoy brewing tea on low hanging fruit to identify.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me,
        the most important part of improving at photography has been sharing it.
        Sign up for an Exposure account, or post regularly to Tumblr, or both.
        Tell people you’re trying to get better at photography. Talk about it.
        When you talk about it, other people get excited about it. There are few
        plugins and apps available for this purpose, many of them required a
        monthly subscription or needed to expose the full store data to a third
        party.
      </p>
    </div>
  );
};

export default AboutUsSection;
