'use client';
import { useTheme } from 'next-themes';
import React from 'react'
import { Button } from '../ui/button';
import { toast } from 'sonner';

function ThemeChanger() {
  const {resolvedTheme, setTheme} = useTheme()


  function changeTheme() {
    toast.dismiss('dark-theme');
    toast.dismiss('light-theme');

    if (resolvedTheme == 'light') {
      setTheme('dark')

      setTimeout(() => {
        toast.info("Theme modified", {
          id: 'dark-theme',
          dismissible: true,
          description: "Application theme changed to dark",
          action: <Button className='ml-2' variant={'secondary'} onClick={() => {setTheme('light'); toast.dismiss('dark-theme'); }}>Undo</Button>
        })
      }, 10)
      return
    } else {
      setTheme('light')

      setTimeout(() => {
        toast.info("Theme modified", {
          id: 'light-theme',
          dismissible: true,
          description: "Application theme changed to light",
          action: <Button className='ml-2' variant={'secondary'} onClick={() => {setTheme('dark'); toast.dismiss('light-theme');}}>Undo</Button>
        })
      }, 10)
    }
  }


  return (
    <div className='flex flex-row gap-4 max-sm:flex-col'>
      <Button variant={'secondary'} onClick={changeTheme}>Toggle Theme</Button>
    </div>
  )
}

export default ThemeChanger