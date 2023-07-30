import React,{useContext} from 'react';
import SmallCarousel from '../../components/smallCarousel/SmallCarousel' ;
import LargeCarousel from '../../components/LargeCarousel/LargeCarousel';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import { GlobalState } from '../../GlobalState';
import SelectionBox from '../../components/breadCrumb/SelectionBox';

const Live = () => {
  const state=useContext(GlobalState);
  const [liveData]=state.liveApi.liveData;
  return (
    <div className="live-container container">
      <div className="row">
        <div className="col">
        <div className="crumb-container">
              <BreadCrumb breadCrumb={"LIVE"} />
              <SelectionBox />
            </div>
        
            {liveData.map((item, i) => (
              <div key={i}>
                {item.image_orientation === 1 ? (
                  <LargeCarousel carouselData={item} />
                ) : (
                  <SmallCarousel carouselData={item} />
                )}
                
              </div>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Live