import Image from "next/image";
import Hero from "@/components/Hero";
import Albums from "@/components/Albums";
import Members from "@/components/Members";
import Band from "@/components/Band";

export default function Home() {
  return (
    <div>
      <Hero />
      <Albums />
      <Members />
      <Band />
    </div>
  );
}
