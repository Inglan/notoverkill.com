"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import AutoScroll from "embla-carousel-auto-scroll";

const images = [
  {
    url: "my-silent-homelab-v0-my1rjsmwjvvf1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1o9wa5t/my_silent_homelab/",
  },
  {
    url: "a-17-year-olds-homelab-v0-2n9pwb09ewvf1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1oa0g2t/a_17_year_olds_homelab/",
  },
  {
    url: "it-finally-works-kinda-my-first-homelab-v0-mvuv3jcnlvvf1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1o9wgpf/it_finally_works_kinda_my_first_homelab/",
  },
  {
    url: "new-unas-pro-8-installed-v0-k77jwhcygcvf1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1o7nzf2/new_unas_pro_8_installed/",
  },
  {
    url: "recently-sorted-a-few-things-so-sharing-v0-z2hl1gwjm3vf1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1o6j7yf/recently_sorted_a_few_things_so_sharing/",
  },
  {
    url: "my-overkill-rack-v0-qqij1hgj7kxe1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1k9szwx/my_overkill_rack/",
  },
  {
    url: "always-a-work-in-progress-v0-h39a7sbguete1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1jtklix/always_a_work_in_progress/",
  },
  {
    url: "homelab-setup-almost-final-maybe-v0-d6o888i7zlxe1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1ka2cfx/homelab_setup_almost_final_maybe/",
  },
  {
    url: "finally-feel-complete-homelab-v0-5us18bui99sd1.webp",
    link: "https://www.reddit.com/r/homelab/comments/1fu61z0/finally_feel_complete_homelab/",
  },
  {
    url: "my-rack-s-v0-o2r0h8zwoxac1.webp",
    link: "https://www.reddit.com/r/homelab/comments/190hz32/my_racks/",
  },
];

export default function HomelabScroller() {
  return (
    <Carousel
      opts={{ dragFree: true, loop: true }}
      plugins={[
        AutoScroll({
          active: true,
          startDelay: 0,
          speed: 0.5,
          stopOnInteraction: false,
        }),
      ]}
      className="rounded overflow-hidden"
    >
      <CarouselContent>
        {images.map((image) => {
          return (
            <CarouselItem className="basis-1/2 md:basis-1/3" key={image.url}>
              <Link href={image.link} target="_blank">
                <Image
                  width={500}
                  height={500}
                  className="aspect-square object-cover rounded"
                  src={"/homelabs/" + image.url}
                  alt=""
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
