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
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
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
              incremental
            </Text>{" "}
            and{" "}
            <Text
              component='span'
              inherit
              variant='gradient'
              gradient={{ from: "blue", to: "green" }}
            >
              interactive
            </Text>{" "}
            way to learn a new language
          </Title>
          <Text className={classes.description} mt={30} fz={28}>
            Learning a new language can be a gargantuan task. We can break it
            down for you!
          </Text>
          <ul
            style={{
              fontSize: "1.2rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <li>Gradual introduction to new sentence structures</li>
            <li>Exposure to a wide array of vocabulary words</li>
            <li>Interactive and repetitive audio</li>
          </ul>
          <Button
            variant='gradient'
            gradient={{ from: "blue", to: "green" }}
            size='xl'
            className={classes.control}
            mt={40}
            fz='xl'
            onClick={() => {
              router.push("/stories");
            }}
          >
            Learn Now
          </Button>
        </Container>
      </div>
    </GenericHeader>
  );
}
