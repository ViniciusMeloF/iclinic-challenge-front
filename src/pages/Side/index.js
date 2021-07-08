import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import darkSideMaster from "../../assets/dark_side.png";
import lightSideMaster from "../../assets/light_side.png";

import BackButton from "../../components/BackButton";
import {
  DARK_SIDE_NAME,
  fetchStrengthSide,
  LIGHT_SIDE_NAME,
} from "../../utils";

import S from "./Side.module.css";

const Side = () => {
  const { force } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  let forceSideTheme;

  if (force === "dark") {
    forceSideTheme = S.darkTheme;
  } else {
    forceSideTheme = S.lightTheme;
  }

  const MASTER_NAME = force === "dark" ? DARK_SIDE_NAME : LIGHT_SIDE_NAME;

  return (
    <div className={forceSideTheme}>
      <BackButton force={force} />
      <div className={S.wrapper}>
        <button
          className={S.chooseButton}
          disabled={loading}
          onClick={() => fetchStrengthSide(history, force, setLoading)}
        >
          choose your path again, Padawan
        </button>
        <img
          src={force === "dark" ? darkSideMaster : lightSideMaster}
          alt={MASTER_NAME}
        />
        <span className={S.title}>
          Your master is <strong>{MASTER_NAME}</strong>
        </span>
      </div>
    </div>
  );
};

export default Side;
