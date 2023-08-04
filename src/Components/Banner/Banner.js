// import React, { useState } from "react";
// import DynamicPosts from "../DynamicPosts/DynamicPosts";

// import "./Banner.css";

// function Banner() {
//   let [category, setCategory] = useState();
  
//   return (
//     <div className="bannerParentDiv">
//       <div className="bannerChildDiv">
//         <div className="menuBar">
//           <div className="categoryMenu">
//             <select
//               name="Category"
//               onChange={(e) => {
//                 setCategory(e.target.value);
//               }}
//             >
//               {" "}
//               <option value="null">ALL CATEGORIES</option>
//               <option value="Cars">Cars</option>
//               <option value="Cameras & Lenses">Cameras & Lenses</option>
//               <option value="Computers & Laptops">Computers & Laptops</option>
//               <option value="Mobile Phones">Mobile Phones</option>
//               <option value="Motorcycles">Motorcycles</option>
//               <option value="Tablets">Tablets</option>
//             </select>
//           </div>
//           <div className="otherQuickOptions">
//             <span onClick={()=>setCategory("Cars")} >Cars</span>
//             <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
//             <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
//             <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
//             <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
//             <span onClick={()=>setCategory("Tablets")} >Tablets</span>
//           </div>
//         </div>
//         <div className="banner">
//           <img src="../../../Images/banner copy.png" alt="" />
//         </div>
//       </div>
//      { category!=null && <DynamicPosts category={category}/>  }
//     </div>
//   );
// }

// export default Banner;


import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Rice</option>
              <option value="Cameras & Lenses">Wheat</option>
              <option value="Computers & Laptops">Fruits</option>
              <option value="Mobile Phones">Vegetables</option>
              <option value="Motorcycles">Oil seeds</option>
              <option value="Tablets">Nuts and Dry fruits</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Rice")} >Rice</span>
            <span onClick={()=>setCategory("Wheat")} >Wheat</span>
            <span onClick={()=>setCategory("Fruits")} >Fruits</span>
            <span onClick={()=>setCategory("Vegetables")} >Vegetables</span>
            <span onClick={()=>setCategory("Oil seeds")} >Oil seeds</span>
            <span onClick={()=>setCategory("Nuts and Dry fruits")} >Nuts and Dry fruits</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/farmer.jpg" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
