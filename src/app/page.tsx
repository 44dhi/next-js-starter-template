import ThemeChanger from "@/components/custom-components/ThemeChanger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 pt-16 container">
      <div className="image-controller">
        <Image src={'/next.svg'} priority fetchPriority="high" className="dark:invert" fill={true} alt="Next logo" />
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Welcome to my Next JS Starter kit
        </h3>
        <p className="mt-6  max-w-[500px] text-[#888888] font-semibold">
          This starter kit contains i18n, redux, dynamic themes using Shadcn harnessing the power of Tailwind and SCSS.
        </p>
        <p className="mt-3 max-w-[500px] text-[#888888] font-semibold">
          Happy Developing :)
        </p>
      </div>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Theme modifier</CardTitle>
          <CardDescription>Modify application theme</CardDescription>
        </CardHeader>
        <CardContent>
          <ThemeChanger />
        </CardContent>
      </Card>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Post List</CardTitle>
          <CardDescription>Server side prefetched posts using JSON Placeholder</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={'/posts'}>
            <Button className="font-bold" size={'lg'}>Go to post list</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
