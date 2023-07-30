import React,{useContext} from 'react';
import SmallCarousel from '../../components/smallCarousel/SmallCarousel' ;
import LargeCarousel from '../../components/LargeCarousel/LargeCarousel';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import { GlobalState } from '../../GlobalState';

const MitwaMix = () => {
  // const state=useContext(GlobalState);
  // const [mitwaMixData] =state.mitwaMixApi.mitwaMixData;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <BreadCrumb breadCrumb={"Mitwa Mix"}/>
            {/* {mitwaMixData.map((item, i) => (
              <div key={i}>
                {item.image_orientation === 1 ? (
                  <LargeCarousel carouselData={item} />
                ) : (
                  <SmallCarousel carouselData={item} />
                )}
                
              </div>
            ))} */}

        </div>
      </div>
    </div>
  )
}

export default MitwaMix