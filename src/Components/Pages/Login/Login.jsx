import React from "react";

import { BlockContainer } from "../../../Base/styled";

import {
  BannerBlock,
  Container,
  GreenSide,
  GreenSideNav,
  LoginBannerImg,
  LoginBlock,
  LoginBold,
  LoginBtn,
  LoginInputs,
  LoginL,
  LoginLogo,
  LoginR,
  LoginSides,
  LoginSociety,
  LoginSpan,
  LoginStroke,
  LoginTitle,
  LoginWhiteSide,
  Navigation,
  NAVLINK,
  TextBlock,
  TitleEnd,
  TitlePEnd,
} from "./styled";
import Input from "../../Atoms/Input/Input";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import Button from "../../Atoms/Button/Button";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../../Assets/Icons/Logo";
import GoogleIcon from "../../../Assets/Icons/GoogleIcon";
import AppleIcon from "../../../Assets/Icons/AppleIcon";

export default function Login() {
  return (
    <Container>
      <BlockContainer width="45%" borderRadius="none">
        <LoginWhiteSide>
          <LoginLogo>
            <LogoIcon />
          </LoginLogo>
          <LoginBlock>
            <LoginTitle>Login to your account</LoginTitle>
            <LoginInputs>
              <Input width="100%" height="56px" placeholder="Email" />
              <Input
                width="100%"
                height="56px"
                type="password"
                placeholder="Password"
              />
            </LoginInputs>
            <LoginSides>
              <LoginR>
                <Checkbox />
                <LoginSpan>Remember me</LoginSpan>
              </LoginR>
              <LoginL>Forgot Password?</LoginL>
            </LoginSides>
            <LoginBtn>
              <Button>Sign in with email</Button>
            </LoginBtn>
            <LoginStroke>Or login with</LoginStroke>
            <LoginSociety>
              <NavLink to="https://www.google.com">
                <GoogleIcon />
              </NavLink>
              <NavLink to="https://www.apple.com/">
                <AppleIcon />
              </NavLink>
            </LoginSociety>
            <LoginSpan>
              Don’t have an account?
              <NavLink to="/signup">
                <LoginBold>Get Started</LoginBold>
              </NavLink>
            </LoginSpan>
          </LoginBlock>
        </LoginWhiteSide>
      </BlockContainer>
      <GreenSide>
        <Navigation>
          <GreenSideNav>
            <NAVLINK height="1%" to="/products">
              Products
            </NAVLINK>
            <NAVLINK height="1%" to="/features">
              Features
            </NAVLINK>
            <NAVLINK height="1%" to="/pricing">
              Pricing
            </NAVLINK>
            <NAVLINK height="1%" to="/faq">
              FAQ
            </NAVLINK>
          </GreenSideNav>
        </Navigation>
        <BannerBlock>
          <LoginBannerImg src="/assets/images/BannerImage.svg" />
        </BannerBlock>
        <TextBlock>
          <TitleEnd>
            The easiest way to build <br /> your own eCommerce
          </TitleEnd>
          <TitlePEnd>
            Create an ecommerce website backed by powerful tools <br /> that
            help you find customers, drive sales, and manage <br /> your
            day-to-day.
          </TitlePEnd>
        </TextBlock>
      </GreenSide>
    </Container>
  );
}
