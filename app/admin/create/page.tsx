'use client';

import { Grid, TextInput } from '@mantine/core';
import React from 'react';

export default function CreatePage() {
  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            fw="bold"
            fz="xl"
            width="full"
            size="xl"
            variant="unstyled"
            placeholder="Title (in your language)"
            required
          ></TextInput>
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput
            fw="bold"
            fz="xl"
            width="full"
            size="xl"
            variant="unstyled"
            placeholder="Title (in English)"
            required
          ></TextInput>
        </Grid.Col>
      </Grid>
      <Grid></Grid>
    </>
  );
}
