import React, { useState } from "react";
import { BlockContainer } from "../../../Base/styled";
import {
  Form,
  FormField,
  FormLabel,
  FormSubmit,
  HR,
  Row,
  Title,
  UploadImage,
  UploaderActions,
  UploaderAdd,
  UploaderBlock,
  UploaderDelete,
  UploaderInput,
  UploaderText,
} from "./styled";
import Button from "../../Atoms/Button/Button";

import { REGIONS } from "./const";
import Select from "../../Atoms/Select/Select"; 
import Input from "../../Atoms/Input/Input";

export default function PersonalInformation() {
  const [image, setImage] = useState(null);
  const [currentRegions, setCurrentRegion] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleImageRemove = () => setImage(null);

  const handleRegions = (option) => setCurrentRegion(option);

  const handleCity = (option) => setCurrentCity(option);

  return (
    <BlockContainer
      style={{
        width: "751px",
        padding: "24px  32px",
      }}
    >
      <Title>Personal Informations</Title>
      <HR />
      <UploaderBlock>
        <FormLabel htmlFor="upload-photo">
          <UploadImage src={image} />
        </FormLabel>
        <UploaderInput onChange={handleImage} id="upload-photo" type="file" />
        <UploaderBlock direction="column">
          <UploaderText>
            We only support .JPG, .JPEG, or .PNG file.
          </UploaderText>
          <UploaderActions>
            <UploaderAdd htmlFor="upload-photo">Upload your photo</UploaderAdd>
            <UploaderDelete>
              <Button
                handler={handleImageRemove}
                type="transparent-dark"
                height="48px"
                width="150px"
              >
                Delete
              </Button>
            </UploaderDelete>
          </UploaderActions>
        </UploaderBlock>
      </UploaderBlock>
      <Form>
        <Row>
          <FormField>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              padding="15px 20px"
              width="328px"
              height="100%"
              id="firstName"
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              padding="15px 20px"
              width="328px"
              height="100%"
              id="lastName"
            />
          </FormField>
        </Row>
        <Row>
          <FormField>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input padding="15px 20px" width="328px" height="100%" id="email" />
          </FormField>
          <FormField>
            <FormLabel htmlFor="phoneNumber">Phone Number (Optional)</FormLabel>
            <Input
              type="number"
              padding="15px 20px"
              width="328px"
              height="100%"
              id="phoneNumber"
            />
          </FormField>
        </Row>
        <Title>Personal Address</Title>
        <Row>
          <FormField>
            <FormLabel>Country or Region</FormLabel>
            <Select
              height="60px"
              maxWidth="400px"
              width="330px"
              handler={handleRegions}
              options={REGIONS}
            />
          </FormField>
          <FormField>
            <FormLabel>City</FormLabel>
            <Select
              height="60px"
              maxWidth="400px"
              width="330px"
              handler={handleCity}
              options={currentRegions?.cities ?? []}
            />
          </FormField>
        </Row>
        <Row>
          <FormField>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              padding="15px 20px"
              width="328px"
              height="100%"
              id="address"
            />
          </FormField>
          <FormField>
            <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
            <Input
              padding="15px 20px"
              width="328px"
              height="100%"
              id="postalCode"
            />
          </FormField>
        </Row>
        <FormSubmit>
          <Button width="131px" fontSize="18px">
            Save
          </Button>
        </FormSubmit>
      </Form>
    </BlockContainer>
  );
}
