import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl"> Front Dev</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent"> Jesus Maldonado</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-9">
              I am excellent at transforming ideas into unforgettable digital
              experiences and enjoy using the latest technologies to achieve
              this.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Button>
              <div className="mb">

              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
