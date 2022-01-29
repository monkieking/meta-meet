/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import LandingPageCSS from "./LandingPage.module.css";
import Logo from "../../public/static/images/landing-page-icon.png";
import logo from "../../public/static/images/logo.png";
import Image from "next/image";
import NavBar from "../../components/NavBar/NavBar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectlandingPageVisit,
  setLandingPageVisit,
} from "../slices/landingSlice";

function LandingPage() {
  const landingPageVisit = useSelector(selectlandingPageVisit);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLandingPageVisit(true));
    }, 3000);
  }, []);
  return (
    <div className={LandingPageCSS.landingPage}>
      <NavBar />
      <div className={LandingPageCSS.landingPageContainer}>
        {landingPageVisit && (
          <div className={LandingPageCSS.landingPageTagline}>
            <div className={LandingPageCSS.company}>
              <div className={LandingPageCSS.companyName}>MetaMeet.io</div>
              <div className={LandingPageCSS.companyLogo}>
                <Image src={logo} alt="welcome to meta-meet.io" />
              </div>
            </div>
            <div className={LandingPageCSS.tagline}>
              Bring your Offices and Schools to your homes through MetaMeet.io
            </div>
            <Link href="/auth/register">
              <div className={LandingPageCSS.joinUs}>
                <div>
                  <p>Join us</p>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className={`${!landingPageVisit && LandingPageCSS.logo} `}>
          <Image src={Logo} alt="welcome to meta-meet.io" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
