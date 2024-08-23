import Photo from "@/components/global/photo";
import Social from "@/components/global/social";
import Stats from "@/components/global/stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
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
              <a
                href="/maldonado_cv.pdf" // Aquí reemplazas con la ruta correcta de tu archivo CV
                download="Maldonado_CV.pdf" // Nombre que se le dará al archivo descargado
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <Download className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex  justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
