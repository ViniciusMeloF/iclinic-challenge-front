import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as ArrowLeft} from '../../assets/arrow_left.svg';

import S from './BackButton.module.css';

const BackButton = ({ force }) => {
  let forceSideTheme;
  
  if (force === 'dark') {
    forceSideTheme = S.darkTheme;
  } else {
    forceSideTheme = S.lightTheme;
  }

  return (
    <div className={forceSideTheme}>
      <Link className={S.backButton} to="/">
        <ArrowLeft />
        <span>back</span>
      </Link>
    </div>
  )
}

export default BackButton;