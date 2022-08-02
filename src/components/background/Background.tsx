import React from 'react'
import BackgroundImg from '../../assets/background.png';
import { backgroundStyles } from './styles';

const Backgroud = () => {
  return <div className={backgroundStyles.container}>
    <img src={BackgroundImg} alt="background" className={backgroundStyles.backgroundImg} />
  </div>
}

export default Backgroud