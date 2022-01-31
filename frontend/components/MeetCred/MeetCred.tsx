import React from "react";
import meetCredCSS from "./MeetCred.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import {
  selectmeetCredentialPageShowState,
  setmeetCredentialPageShowState,
} from "../../pages/slices/meetCredentialSlice";
import { useDispatch, useSelector } from "react-redux";

function MeetCred() {
  const dispatch = useDispatch();

  return (
    <div className={meetCredCSS.container}>
      <div className={meetCredCSS.meetDetailsContainer}></div>
      <div className={meetCredCSS.meetDetails}>
        <div className={meetCredCSS.meetDetailsheading}>
          <ClearIcon
            className={meetCredCSS.clearIcon}
            onClick={() => dispatch(setmeetCredentialPageShowState(false))}
          />
          Enter Meeting Credentials
        </div>
        <input
          type="text"
          placeholder="Enter room id"
          className={meetCredCSS.input}
        ></input>
        <input
          type="text"
          placeholder="Enter your name"
          className={meetCredCSS.input}
        ></input>
        <input
          type="text"
          placeholder="Enter meeting password"
          className={meetCredCSS.input}
        ></input>
        <button className={meetCredCSS.joinButton}>Join</button>
      </div>
    </div>
  );
}

export default MeetCred;
