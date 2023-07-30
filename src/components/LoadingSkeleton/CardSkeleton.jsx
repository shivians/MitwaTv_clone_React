import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card-loading-container container mt-2 mb-3">
      <div className="row">
        <h3 className="ms-1">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee" >
            <Skeleton className="card-h-loading " />

            </SkeletonTheme>
          
        </h3>

        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
      </div>
      <div className="row mt-2">
        <h3 className="ms-1">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee" >
            <Skeleton className="card-h-loading " />

            </SkeletonTheme>
          
        </h3>

        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
        <div className="col-3">
          <div className="card-img-loading">
            <SkeletonTheme baseColor="#ffffff" highlightColor=" #eee">
            <Skeleton className="card-loading-con"/>

            </SkeletonTheme>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
