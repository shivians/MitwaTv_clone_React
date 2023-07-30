import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.css";

const BannerSkeleton = () => {
  return (
    <div>
      <div className="box">
        <div className="loading-content">
          <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <h1>
              <Skeleton className="h-loading" />
            </h1>
            <p>
              <Skeleton className="p-loading" count={4} />
            </p>
            <span className=" btn-group ">
              <Skeleton className="btn-loading " />
              <Skeleton className="btn-loading" />
            </span>
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
