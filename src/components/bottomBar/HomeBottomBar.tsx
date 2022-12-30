import { css } from '@emotion/css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icon/Icon';
import { gapCss, FlexRow } from '../layout/styles';
import { colorCss, Colors } from '../styles/colors';
import { FlexCss } from '../styles/flex';
import { Subheading } from '../styles/fonts';
import BottomBar from './BottomBar';

const HomeBottomBar = () => {
  return (
    <></>
    // <BottomBar className={css(FlexCss.justifyStart, gapCss(20))}>
    //   <NavLink
    //     to="/"
    //     className={(isActive) =>
    //       colorCss(isActive ? Colors.Branding.Purple : Colors.Gray.V5)
    //     }
    //   >
    //     <FlexRow className={css(gapCss(4), FlexCss.alignCenter)}>
    //       <Icon icon="home" />
    //       <Subheading.SH14>Read</Subheading.SH14>
    //     </FlexRow>
    //   </NavLink>
    //   <NavLink
    //     to="/news"
    //     className={(isActive) =>
    //       colorCss(isActive ? Colors.Branding.Purple : Colors.Gray.V5)
    //     }
    //   >
    //     <FlexRow className={css(gapCss(4), FlexCss.alignCenter)}>
    //       <Icon icon="globe" />
    //       <Subheading.SH14>News</Subheading.SH14>
    //     </FlexRow>
    //   </NavLink>
    // </BottomBar>
  );
};

export default HomeBottomBar;
