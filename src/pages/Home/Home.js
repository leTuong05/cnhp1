import React from "react";
import CarouselContent from "./CarouselContent";
import { Image, Divider } from "antd";
import bg2 from "../../common/images/imageHome_page/bg2.png";
import bg3 from "../../common/images/imageHome_page/homepage-bg2.png";
import Number from "./Number";
import Grid from "./Grid";
import Service from "./Service";
import PostsHome from "./PostsHome";

const Home = () => {
  return (
    <>
      <CarouselContent />
      <Divider className="mt-[0px]" />
      <Service />
      <Divider className="mt-[0px]" />
      <PostsHome />
      <Divider className="mt-[0px]" />
      <img preview={false} src={bg2} style={{ width: "100%" }} />
      <Grid />
      <img preview={false} src={bg3} style={{ width: "100%" }} />
      <Number />
    </>
  );
};

export default Home;
