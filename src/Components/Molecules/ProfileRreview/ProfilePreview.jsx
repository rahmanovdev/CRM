import React from "react";
import {
  ProfileCompanyName,
  ProfileFullName,
  ProfileImage,
  ProfileStyled,
  ProfileTexts,
  ProfileTextsNav,
} from "./styled";

export default function ProfilePreview() {
  return (
    <ProfileStyled>
      <ProfileImage src="/assets/images/avatar.png" />
      <ProfileTextsNav to={'/my-profile'}>
        <ProfileTexts>
          <ProfileFullName>Tynisha Obey</ProfileFullName>
          <ProfileCompanyName>Makostore</ProfileCompanyName>
        </ProfileTexts>
      </ProfileTextsNav>
    </ProfileStyled>
  );
}
