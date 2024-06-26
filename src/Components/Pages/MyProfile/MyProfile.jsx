import React from "react";
import { Outlet } from "react-router-dom";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import {
  LinkIcon,
  Link,
  LinkP,
  LinkText,
  LinkTitle,
  Links,
  Content,
} from "./styled";
import UserIcon from "../../../Assets/Icons/UserIcon";
import LoginServiceIcon from "../../../Assets/Icons/LoginServiceIcon";
import { FlexBlock } from "../../../Base/styled";

export default function MyProfile() {
  return (
    <MainTemplate title="My Profile">
      <FlexBlock>
        <Links>
          <Link to="personal-information">
            <LinkIcon>
              <UserIcon />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Personal Informations</LinkTitle>
              <LinkP>Est arcu pharetra proin pellentesque</LinkP>
            </LinkText>
          </Link>
          <Link to="login-service">
            <LinkIcon>
              <LoginServiceIcon />
            </LinkIcon>
            <LinkText>
              <LinkTitle>Personal Informations</LinkTitle>
              <LinkP>Est arcu pharetra proin pellentesque</LinkP>
            </LinkText>
          </Link>
        </Links>
        <Content>
          <Outlet />
        </Content>
      </FlexBlock>
    </MainTemplate>
  );
}
