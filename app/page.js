import Albums from "@/components/Albums";
import Members from "@/components/Members";
import Band from "@/components/Band";
import GrandMask from "@/components/GrandMask";

export default function Home() {
  return (
    <div>
      <GrandMask />
      <Albums />
      <Members />
      <Band />
    </div>
  );
}
