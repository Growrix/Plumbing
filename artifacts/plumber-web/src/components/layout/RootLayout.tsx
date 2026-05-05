import { Header } from "./Header";
import { Footer } from "./Footer";
import { EmergencyBanner } from "./EmergencyBanner";
import { StickyCallButton } from "./StickyCallButton";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <EmergencyBanner />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
