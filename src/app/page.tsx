import LanguageChanger from "@/components/custom-components/LanguageChanger";
import ThemeChanger from "@/components/custom-components/ThemeChanger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const cardItems = [
    {
      title: 'Theme Modifier',
      description: "Modify application theme",
      children:  <ThemeChanger />
    },
    {
      title: 'Select Language',
      description: 'i18next based language selector',
      children: <Dialog>
        <DialogTrigger asChild>
          <Button variant={'secondary'}>Change language</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Language</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <LanguageChanger />
          </div>
        </DialogContent>
      </Dialog>
    },
    {
      title: "Post List",
      description: "Server side prefetched posts using JSON Placeholder",
      children: <Link href={'/posts'}>
        <Button className="font-bold" size={'lg'}>Go to post list</Button>
      </Link>
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 pt-16 container">
      <div className="image-controller">
        <Image src={'/next.svg'} priority fetchPriority="high" className="dark:invert" fill={true} alt="Next logo" />
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Welcome to my Next JS Starter kit
        </h3>
        <p className="mt-6  max-w-[500px] text-[#888888] font-regular">
          This starter kit contains i18n, redux, dynamic themes using Shadcn harnessing the power of Tailwind and SCSS.
        </p>
        <p className="mt-3 max-w-[500px] text-[#888888] font-regular">
          Happy Developing :)
        </p>
      </div>
      {
        cardItems.map((key, index) => (
          <Card className="w-full max-w-lg" key={index}>
            <CardHeader>
              <CardTitle>{key.title}</CardTitle>
              <CardDescription>{key.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {key.children}
            </CardContent>
          </Card>
        ))
      }
    </main>
  );
}
