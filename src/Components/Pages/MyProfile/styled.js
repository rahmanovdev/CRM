import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Links = styled.div`
  background-color: rgba(255, 255, 255, 1);
  max-width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 16px;
  transform: translateX(-24px) translateY(-24px);
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-radius: 12px;
  gap: 16px;
  text-decoration: none;
  width: 100%;

  &.active {
    background-color: rgba(250, 250, 250, 1);
  }
`;

export const LinkIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
`;

export const LinkText = styled.div``;

export const LinkTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 22.4px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: rgba(17, 24, 39, 1);
`;

export const LinkP = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  color: rgba(113, 128, 150, 1);
`;

export const Content = styled.div``;
