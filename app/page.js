import Albums from "@/components/Albums";
import Members from "@/components/Members";
import Band from "@/components/Band";
import GrandMask from "@/components/GrandMask";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <GrandMask />
      <Band />
      <Albums />
      <Members />
      <Contact />
    </div>
  );
}
