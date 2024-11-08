import React from "react";
import bannerimg from "@/assets/pages/blogs/blogs.png";
const BannerBlog = () => {
  return (
    <div
      style={{ background: `url('${bannerimg.src||null}')` }}
      className="w-screen h-[50vh] flex justify-center items-end"
    >
      <div className="text-white w-[400px] max-w-[90vh] mb-[35px]">
        <p className="font-bold text-center text-[32px]">Blog articles</p>
        <p className="text-center">
          Discover the Art and Craft of Wooden Homes: Insights, Inspiration, and
          Expert Tips.
        </p>
      </div>
    </div>
  );
};

export default BannerBlog;
