import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';



const Packages = ({addToList}) => {

    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setPackages(data));
        


        

    },[])

    return (
        
             <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
            {
                packages.map(pack=><Package key={pack.id} pack={pack}addToList={addToList}></Package>)
            }
        </div>
        
    );
};

export default Packages;