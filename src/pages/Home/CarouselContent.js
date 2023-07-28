import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import slide1 from "../../common/images/imageHome_page/Slide1.png";
import slide2 from "../../common/images/imageHome_page/slide2.png";
import slide3 from "../../common/images/imageHome_page/slide3.png";

const CarouselContent = () => {
  return (
    // <Carousel
    //   arrows={true}
    //   prevArrow={<LeftOutlined />}
    //   nextArrow={<RightOutlined />}
    //   dots={false}
    // >
    //   <img preview={false} src={slide1}/>
    //   <img preview={false} src={slide2}/>
    //   <img preview={false} src={slide3}/>
    // </Carousel>
    <Carousel
      autoplay
      arrows
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
    >
      <div style={{ position: "relative" }}>
        <img src={slide1} alt="Slide 1" style={{width: '100%'}}/>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(0, -50%)",
          }}
        >
          <LeftOutlined />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translate(0, -50%)",
          }}
        >
          <RightOutlined />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={slide2} alt="Slide 2" style={{width: '100%'}}/>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(0, -50%)",
          }}
        >
          <LeftOutlined />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translate(0, -50%)",
          }}
        >
          <RightOutlined />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={slide3} alt="Slide 3" style={{width: '100%'}}/>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(0, -50%)",
          }}
        >
          <LeftOutlined />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translate(0, -50%)",
          }}
        >
          <RightOutlined />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselContent;
