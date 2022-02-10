import * as React from "react";

const MediumFilledIcon = (props) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={25} height={25} rx={6} fill="#000" />
    <path
      d="M18.803 8.293 20 7.233V7h-4.146l-2.955 6.813L9.537 7H5.189v.232l1.399 1.56a.523.523 0 0 1 .189.453v6.127a.666.666 0 0 1-.202.607L5 17.748v.229h4.466v-.232L7.89 15.979a.688.688 0 0 1-.217-.607v-5.3l3.92 7.908h.455l3.371-7.908v6.3c0 .166 0 .2-.117.309l-1.213 1.086V18h5.883v-.232l-1.17-1.06a.311.311 0 0 1-.133-.31V8.603a.31.31 0 0 1 .133-.31Z"
      fill="#fff"
    />
  </svg>
);

export default MediumFilledIcon;
