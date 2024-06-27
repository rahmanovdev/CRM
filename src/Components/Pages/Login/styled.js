import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

export const LoginWhiteSide = styled.div`
  padding: 20px 60px;
  background: #fff;
  border-radius: 8px;
`;

export const LoginLogo = styled.div`
  margin-bottom: 40px;
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoginR = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LoginL = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #007bff;
`;

export const LoginSides = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginBtn = styled.div`
  margin-top: 20px;
`;

export const LoginSpan = styled.span`
  font-size: 14px;
  color: #555;
`;

export const LoginStroke = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #aaa;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
    margin: 0 10px;
  }
`;

export const LoginSociety = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const LoginBold = styled.b`
  color: #007bff;
  cursor: pointer;
`;

export const GreenSide = styled.div`
  position: relative;
  background: #0caf60;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const GreenSideNav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px 80px;
`;
export const NAVLINK = styled(NavLink)`
  height: ${({ height }) => height || "100%"};
  color: #fff;
  text-decoration: none;
`;

export const BannerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBannerImg = styled.img`
    width: 500px;
`;

export const TitleEnd = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
`;

export const TitlePEnd = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(206, 239, 223, 1);
`;

export const TextBlock = styled.div`
padding-top: 28 px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;
