import React, {useState} from "react";

const Contact = ({page}) => {
  const [color, setColor] = useState(page === "contact" ? "#8957FF" : "#444444")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
      version="1.1"
      width="25"
      height="25"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      
      class=""
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M485.743,85.333H26.257C11.815,85.333,0,97.148,0,111.589V400.41c0,14.44,11.815,26.257,26.257,26.257h459.487    c14.44,0,26.257-11.815,26.257-26.257V111.589C512,97.148,500.185,85.333,485.743,85.333z M475.89,105.024L271.104,258.626    c-3.682,2.802-9.334,4.555-15.105,4.529c-5.77,0.026-11.421-1.727-15.104-4.529L36.109,105.024H475.89z M366.5,268.761    l111.59,137.847c0.112,0.138,0.249,0.243,0.368,0.368H33.542c0.118-0.131,0.256-0.23,0.368-0.368L145.5,268.761    c3.419-4.227,2.771-10.424-1.464-13.851c-4.227-3.419-10.424-2.771-13.844,1.457l-110.5,136.501V117.332l209.394,157.046    c7.871,5.862,17.447,8.442,26.912,8.468c9.452-0.02,19.036-2.6,26.912-8.468l209.394-157.046v275.534L381.807,256.367    c-3.42-4.227-9.623-4.877-13.844-1.457C363.729,258.329,363.079,264.534,366.5,268.761z"
              fill={color}
              data-original="#000000"
              
            />
          </g>
        </g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
        <g xmlns="http://www.w3.org/2000/svg"></g>
      </g>
    </svg>
  );
};

export default Contact;
