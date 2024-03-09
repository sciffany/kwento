"use client";

import { Box, Card, Grid, Image, Text } from "@mantine/core";
import GenericHeader from "../../components/HeaderMenu";

export default function () {
  return (
    <GenericHeader>
      <Box m={20}>
        <Grid>
          {[1].map((item) => (
            <Card shadow='sm' padding='xl' component='a' href='/stories/1'>
              <Card.Section>
                <Image
                  src='https://www.aboutfilipinofood.com/wp-content/uploads/filipino-ice-cream-cart-sorbetero.jpg'
                  h={300}
                  alt='No way!'
                />
              </Card.Section>

              <Text fw={500} size='lg' mt='md'>
                Lesson 1: My First Ice Cream
              </Text>

              <Text mt='xs' c='dimmed' size='sm'>
                Magkano po ang ice cream? (How much is the ice cream?)
              </Text>
            </Card>
          ))}
        </Grid>
      </Box>
    </GenericHeader>
  );
}
