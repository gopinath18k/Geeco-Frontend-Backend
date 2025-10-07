import React from 'react'
import "../AllPumps/Allpumps.css"
import { Link } from 'react-router-dom'


export const Allpumps = () => {
  return (
    <div>
      <div className="container_all_Category">
        <h1 className='pump_category_main_heading' >All Pumps Categories</h1>
        <div className="all_Category_innter_container">
          <div className="container_agriculture ">
            <h2><Link to="/agriculture-pump-categories"  className='pump_category_heading'>Agriculture Pumps</Link></h2>
          </div>
          <div className="container_domestic ">
            <h2><Link to="/"  className='pump_category_heading'>Domestic Pumps</Link></h2>
          </div>
          <div className="container_industrial ">
            <h2><Link to="/"  className='pump_category_heading'>Industrial Pumps</Link></h2>
          </div>
          <div className="container_commercial ">
            <h2><Link to="/"  className='pump_category_heading'>Commercial Pumps</Link></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
