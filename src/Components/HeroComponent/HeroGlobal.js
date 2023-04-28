import React, { useEffect, useState } from "react";
import "./HeroComponent.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ServiceData } from "../ServiceComponent/ServiceData";
import { TeamData } from "../TeamComponent/TeamData";
import { HeaderData } from "../Header/HeaderData";
import { BlogData } from "../BlogComponent/BlogData";

const HeroGlobal = () => {
  const [heading, setHeading] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();
  let pathName = location.pathname;

  useEffect(()=>{
    const id = searchParams.get("id")
    if(id){
      if(pathName.includes("Service_Details")){
        const sData = ServiceData.find((e)=>e.id == id)
        setHeading(sData.Name )
      }
      if(pathName.includes("Team_Details")){
        const tData = TeamData.find((e)=>e.id == id)
        setHeading(tData.name)
      }
      if(pathName.includes("Blog_Details")){
        const bData = BlogData.find((e)=>e.id == id)
        setHeading(bData.name)
      }
    }
    else {
      const data = HeaderData.find((data) => {
        if (data?.subNav) {
          const subTitel = data?.subNav?.find((s) => s.path === pathName);
          if (subTitel) {
            return data;
          }
        } else if (data.path === pathName) {
          return data;
        }
      });

      if (data?.subNav) {
        const obj = data?.subNav.find((s) => s.path === pathName);
        setHeading(obj.heading);
      } else {
        setHeading(data.heading);
      }
    }
  },[])


  useEffect(() => {
    const pathnamee = location.pathname.split("/").filter((p) => !!p);
    const breadcrumbs = pathnamee.map((e, i) => ({
      title: e,
      path: `/${pathnamee.slice(0, i + 1).join("/")}`,
    }));
    setBreadcrumbs(breadcrumbs);
  }, [location]);
  return (
    <section class="troo-da-sub-page-section" id="troo-da-sub-page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-page-text">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbs.map((breadcrumb, index) => (
                    <li
                      className={`breadcrumb-item${
                        index === breadcrumbs.length - 1 ? " active" : ""
                      }`}
                    >
                      <Link key={index} to={breadcrumb.path}>
                        {breadcrumb.title.replace(/_/g, " ")}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
              <h2>{heading} </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGlobal;
