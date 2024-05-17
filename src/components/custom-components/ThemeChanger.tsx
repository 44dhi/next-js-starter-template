'use client';
import { useTheme } from 'next-themes';
import React from 'react'
import { Button } from '../ui/button';
import { toast } from 'sonner';

function ThemeChanger() {
  const {resolvedTheme, setTheme} = useTheme()

  function setDarkTheme() {
    setTheme('dark')
    toast.dismiss('dark-theme');
    toast.dismiss('light-theme');

    toast.info("Theme modified", {
      id: 'dark-theme',
      dismissible: true,
      description: "Application theme changed to dark",
      action: <Button className='ml-2' variant={'secondary'} onClick={() => {setTheme('light'); toast.dismiss('dark-theme'); }}>Undo</Button>
    })
  }

  function setLightTheme() {
    setTheme('light')
    toast.dismiss('dark-theme');
    toast.dismiss('light-theme');
    
    toast.info("Theme modified", {
      id: 'light-theme',
      dismissible: true,
      description: "Application theme changed to light",
      action: <Button className='ml-2' variant={'secondary'} onClick={() => {setTheme('dark'); toast.dismiss('light-theme');}}>Undo</Button>
    })
  }

  return (
    <div className='flex flex-row gap-4 max-sm:flex-col'>
      <Button variant={'secondary'} onClick={setDarkTheme} disabled={resolvedTheme == 'dark'}>Change Theme to dark</Button>
      <Button variant={'secondary'} onClick={setLightTheme} disabled={resolvedTheme == 'light'}>Change Theme to light</Button>
    </div>
  )
}

export default ThemeChanger