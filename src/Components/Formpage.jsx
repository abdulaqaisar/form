import React, { useState, useRef } from "react";
import "./Formpage.css";
import { FiEdit3 } from "react-icons/fi";
import image from "../assets/holder.jpg";
const Formpage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const profileInputRef = useRef(null);

  //   selectedImage(defaultImage);
  const handlePrflImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <div className="form">
        <div className="formbody">
          <div className="image">
            <label
              htmlFor="profileUploadInput"
              className="profileEdit"
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  marginTop: " 20px",
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  border: "2px solid rgb(28, 0, 59)",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={selectedImage ? selectedImage : image}
                />
                <FiEdit3
                  style={{
                    position: "absolute",
                    border: "2px solid white",
                    borderRadius: "50%",
                    padding: "2px",
                    height: "20px",
                    width: "20px",
                    top: "80%",
                    color: "white",
                    background: "rgb(28, 0, 59)",
                    right: "8px",
                  }}
                />
              </div>
              <input
                id="profileUploadInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePrflImageChange}
                ref={profileInputRef}
              />
            </label>
          </div>

          <div className="fields">
            <div className="imageinfo">
              <input type="text" placeholder="Box Name/Number" />
              <input type="text" placeholder="Quantity Left in Box" />
            </div>
            <div className="imageinfo">
              <input
                type="text"
                placeholder="Type Of Item i.e Plushie/KeyChain"
              />
              <input type="text" placeholder="Name of item i.e Dog or Cat" />
            </div>
            <div className="imageinfo" style={{ width: "50%" }}>
              <input type="text" placeholder="Quantity Taken out of box" />
            </div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formpage;
