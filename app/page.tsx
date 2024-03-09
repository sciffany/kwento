"use client";

import {
  AppShell,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import SigninButton from "../components/SigninButton";
import classes from "./Home.module.css";
import GenericHeader from "../components/HeaderMenu";

export default function () {
  return (
    <GenericHeader>
      <div className={classes.root}>
        <Container size='lg'>
          <Title className={classes.title} fz={50}>
            The{" "}
            <Text
              component='span'
              inherit
              variant='gradient'
              gradient={{ from: "blue", to: "green" }}
            >
              immersive
            </Text>{" "}
            and{" "}
            <Text
              component='span'
              inherit
              variant='gradient'
              gradient={{ from: "blue", to: "green" }}
            >
              fun
            </Text>{" "}
            way to learn a new language
          </Title>
          <Text className={classes.description} mt={30} fz={28}>
            Learn a new language by reading and listening to stories. Over 60+
            stories with more added every week.
          </Text>
          <Button
            variant='gradient'
            gradient={{ from: "blue", to: "green" }}
            size='xl'
            className={classes.control}
            mt={40}
            fz='xl'
            onClick={() => {
              window.location.href = "/stories";
            }}
          >
            Learn Now
          </Button>
        </Container>
      </div>
    </GenericHeader>
  );
}
