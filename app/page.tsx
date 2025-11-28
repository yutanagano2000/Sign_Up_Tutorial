"use client"

import { Box, Button, FormControl, FormLabel, Input, Link, Sheet, Typography } from "@mui/joy"

export default function App() {
  return (
    <Box
    sx={{
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}
    >
    <Sheet
    sx={{
      width:300,
      mx:'auto',
      my:5,
      px:4,
      py:2,
      display:'flex',
      flexDirection:'column',
      gap:1.5,
      borderRadius:'md',
      boxShadow:'md',
    }}
    variant="outlined">
      <div>
        <Typography level='h3'>Welcome!</Typography>
        <Typography level='body-sm'>Sign up to continue</Typography>
      </div>
      <FormControl sx={{mt:1}}>
        <FormLabel>Email</FormLabel>
        <Input
        name='email'
        type='email'
        placeholder='enter your email'
        ></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
        name='password'
        type='password'
        placeholder='enter your password'>
        </Input>
      </FormControl>
      <Button sx={{mt:1}}>Login</Button>
      <Typography
      endDecorator={<Link href="/sign-up">Sign up</Link>}
      fontSize='sm'
      level="body-sm"
      sx={{alignSelf:'center'}}>
        Don&apos;t have an account?
      </Typography>
    </Sheet>
    </Box>
  )
}