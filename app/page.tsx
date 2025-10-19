import HomelabScroller from "@/components/homelabscroller";
import {
  EthernetPort,
  HardDrive,
  PcCase,
  Server,
  HomeIcon,
  Container,
} from "lucide-react";

const gear = [
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

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
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
            {gear.map((item, index) => (
              <div
                key={index}
                className="border p-4 flex flex-row gap-4 items-start"
              >
                <div className="bg-card aspect-square flex items-center justify-center p-2">
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
            If you don't believe me, look at these setups:
          </h2>
          <HomelabScroller />
          <div className="text-foreground/50 text-sm">
            From r/homelab, original posts are linked
          </div>
        </div>
      </main>
    </>
  );
}
