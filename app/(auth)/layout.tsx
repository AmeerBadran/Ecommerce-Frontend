import loginImage from "../../public/images/loginImage.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      <div className="flex items-stretch justify-center mx-auto relative">
        <div className=" absolute 2md:top-10 w-[160px] h-[50px] 2md:right-10 top-6 right-6 z-20">
          <Link href="/">
            <Image src="/logo_dark.svg" alt="logo" fill priority />
          </Link>
        </div>
        <div className="hidden 2md:block 2md:w-1/2 min-h-screen relative overflow-hidden">
          <Image
            src={loginImage}
            alt="Login Image"
            fill
            className="object-cover min-h-screen object-left-bottom"
          />
        </div>
        <div className="w-full md:w-1/2 min-w-fit flex min-h-screen items-center justify-center z-10 ">
          {children}
        </div>
      </div>
    </div>
  );
}
