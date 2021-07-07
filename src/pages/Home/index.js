import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { fetchStrengthSide } from '../../utils';

import S from './Home.module.css';

const Home = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={S.titleWrapper}>
        <h1>
          Welcome to <strong>iClinic</strong>
        </h1>
        <span>FRONTEND CHALLENGE</span>
      </div>
      <button 
        className={S.startButton}
        disabled={loading}
        onClick={() => fetchStrengthSide(history, undefined, setLoading)}
      >
        S T A R T
      </button>
    </>
  )
}

export default Home;