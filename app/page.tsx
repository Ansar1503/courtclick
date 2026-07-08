import Image from "next/image";
import navLogo from "@/public/navbarLogo.svg"

const navLinks = [
  
]

export default function Home() {
  return (
    <div>
      <nav>
        <div >
          <div>
            <Image
              src={navLogo}
              alt="Court Click Logo"
              width={100}
              height={60}
            />
          </div>
          

        </div>
        <div>

        </div>
      </nav>
    </div>
  );
}
