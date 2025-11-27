"use client";
import * as React from 'react';
import {CssVarsProvider} from '@mui/joy/styles';
import {Input, Sheet} from '@mui/joy';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

export default function App() {
  return (
    <CssVarsProvider>
      <Sheet 
      sx={{
        width: 300,
        mx: 'auto',
        my: 4,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
      variant='outlined'>
        <div>
          <Typography level="h3" component="h1">Welcome!</Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
           name='email'
           type='email'
           placeholder='Enter your email'
           />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name='password'
            type='password'
            placeholder='Enter your password'
            />
        </FormControl>
        <Button sx={{mt:1}}>
          Log in
        </Button>
        <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        sx={{slignSelf: 'center', justifyContent: 'center'
        }}
        >
          Don&apos;t have an account?
        </Typography>

        </Sheet>
    </CssVarsProvider>
  );
}