import React, { useContext } from "react";
import { FlexRow } from "../../firefly/styles/layout";
import { HeaderLink } from "../../firefly/styles/links";
import { headerStyles } from "./styles";
import { Heading, Subheading } from "../styles/fonts";
import FirebaseAuth from "../../firefly/views/misc/FirebaseAuth";
import { FlexCss } from "../styles/flex";
import { globalContext } from "../../context";
import SodaCanImg from "../../assets/icons/sodaCan.png";

const Header = () => {
  const { globalState } = useContext(globalContext);
  console.log("globalState", globalState);
  return (
    <div className={headerStyles.containerCss}>
      <FlexRow className={headerStyles.contentContainerCss}>
        <HeaderLink to="/">
          <FlexRow className={headerStyles.logoContainer}>
            <Heading.H18 className={headerStyles.logoText}>
              FireFanFic
            </Heading.H18>
          </FlexRow>
        </HeaderLink>
        <FirebaseAuth>
          {({ isLoading, error, auth }: any) => {
            if (isLoading) {
              return "...";
            }
            if (error) {
              return "⚠️ login error";
            }
            if (auth) {
              return (
                <HeaderLink to={`/account`}>
                  <FlexRow className={FlexCss.alignCenter}>
                    <img
                      src={auth.photoURL}
                      alt={auth.displayName}
                      width="30"
                      height="30"
                      className={headerStyles.userPicCss}
                    />
                    <Subheading.SH14>Hi, {auth.displayName}</Subheading.SH14>
                  </FlexRow>
                </HeaderLink>
              );
            } else {
              return (
                <HeaderLink to={`/signin`}>
                  <Subheading.SH14>Sign In</Subheading.SH14>
                </HeaderLink>
              );
            }
          }}
        </FirebaseAuth>
      </FlexRow>
    </div>
  );
};

export default Header;
