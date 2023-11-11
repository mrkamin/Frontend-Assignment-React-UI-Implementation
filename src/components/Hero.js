import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BsFillArrowDownLeftSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import { fetchData } from "../redux/data/actions";
import IMG from "../assets/Group.png";
import IMG1 from "../assets/Group2.png";
import "../css/hero.css";

const Hero = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <>
      <div className=" hero-container grid ">
        <div className="hero-container-left-side d-flex flex-column">
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <BsFillArrowDownLeftSquareFill className="total-visit-first-item-item-one" />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p>Total Visits</p>
                <h3>{data.totalVisits}</h3>
              </div>
            </div>
            <p className="total-visits-second-item">+1.29%</p>
          </div>
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <BsFillArrowUpRightSquareFill className="total-sub-first-item-item-one" />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p>Total Subscribers</p>
                <h3>{data.totalSubscribers}</h3>
              </div>
            </div>
            <p className="total-sub-second-item">+1.29%</p>
          </div>
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <img
                src={IMG}
                alt="acitve-img"
                className="total-active-first-item-item-one"
              />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p>Active Users</p>
                <h3>{data.activeUsers}</h3>
              </div>
            </div>
            <p className="Active-second-item" />
          </div>
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <img
                src={IMG1}
                alt="acitve-img"
                className="total-click-first-item-item-one"
              />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p>Total Clicks</p>
                <h3>{data.totalClicks}</h3>
              </div>
            </div>
            <p className="Active-second-item" />
          </div>
        </div>
        <div className="hero-container-right-side">
          <div className="">
            <h4>User Traffic</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
