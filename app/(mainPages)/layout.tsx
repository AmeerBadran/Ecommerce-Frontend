
import NavbarAndCart from "@/components/features/NavbarAndCart";
import Footer from "@/components/layout/Footer";


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavbarAndCart />
      {children}
      <Footer />
    </main>
  );
}
