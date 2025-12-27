import HomelabScroller from "@/components/homelabscroller";
import { Separator } from "@/components/ui/separator";
import {
  EthernetPort,
  HardDrive,
  PcCase,
  Server,
  HomeIcon,
  Container,
  Gauge,
} from "lucide-react";
import Link from "next/link";

const mySetup = [
  {
    title: "UniFi Dream Machine Pro",
    description: "Yes, I need it, no, it's not overkill at all",
    icon: <HardDrive />,
  },
  {
    title: "USW 24 PoE",
    description: "I am definitely using all the ports to their full capacity",
    icon: <EthernetPort />,
  },
  {
    title: "Synology NAS",
    description: "I need a place to put all my Linux ISOs of course",
    icon: <Server />,
  },
  {
    title: "Fedora Server",
    description:
      "Technically an old mini PC, but it runs my ~50 Docker containers fine",
    icon: <PcCase />,
  },
  {
    title: "Docker",
    description: "I run basically everything in docker containers",
    icon: <Container />,
  },
  {
    title: "Home Assistant",
    description: "I run Home Assistant OS on a HP t640 thin client",
    icon: <HomeIcon />,
  },
];
const averageSetup = [
  {
    title: "2 gateways",
    description: 'For "redundancy" or something',
    icon: <HardDrive />,
  },
  {
    title: "2x 48 Port PoE+++ switch",
    description: "All ports used",
    icon: <EthernetPort />,
  },
  {
    title: "200+ TB storage array",
    description: "1% usage",
    icon: <Server />,
  },
  {
    title: "10Gbe everywhere",
    description: 'Because "why not"',
    icon: <Gauge />,
  },
  {
    title: "Kubernetes cluster",
    description: "With at least 6 nodes",
    icon: <Container />,
  },
  {
    title: "42U rack",
    description: "For all the kubernetes nodes",
    icon: (
      <>
        <Server />
        <Server />
        <Server />
        <Server />
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <main className="w-full max-w-4xl mx-auto">
        <div className="h-96 flex justify-center flex-col gap-4 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl">
            My homelab
            <br />
            <span className="text-primary">is not overkill</span>
          </h1>
          <h2 className="text-xl">Not even a bit</h2>
        </div>
        <div className="p-4 flex flex-col gap-2 max-w-4xl mx-auto">
          <h2 className="text-2xl">My setup</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {mySetup.map((item, index) => (
              <div
                key={index}
                className="border p-4 flex flex-row gap-4 items-start rounded-lg"
              >
                <div className="bg-card aspect-square flex items-center justify-center p-2 flex-col rounded-lg">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-10 relative p-3 max-w-4xl mx-auto">
          <Separator className="absolute inset-0 top-1/2" />
          <span className="bg-background text-muted-foreground relative mx-auto block w-fit px-2">
            vs
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2 max-w-4xl mx-auto">
          <h2 className="text-2xl">Average setup on r/homelab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {averageSetup.map((item, index) => (
              <div
                key={index}
                className="border p-4 flex flex-row gap-4 items-start rounded-lg"
              >
                <div className="bg-card aspect-square flex items-center justify-center p-2 flex-col rounded-lg">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2 max-w-4xl mx-auto">
          <h2 className="text-2xl">
            If you don&apos;t believe me, look at these setups:
          </h2>
          <HomelabScroller />
          <div className="text-foreground/50 text-sm">
            From r/homelab, original posts are linked
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2 max-w-4xl mx-auto">
          <h2 className="text-2xl">
            You see? Not overkill at all. Just because I have a bit of
            enterprise networking gear and a slight docker addiction
            doesn&apos;t mean my setup is overkill.
          </h2>
        </div>

        <footer className="text-sm p-4 py-15 max-w-4xl mx-auto items-center justify-center flex">
          <div className="border border-dashed p-4 rounded-lg">
            This website is built in Next.js and is{" "}
            <Link
              href="https://github.com/Inglan/notoverkill.com"
              target="_blank"
              className="underline"
            >
              open source
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
