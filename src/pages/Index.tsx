import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Header } from "@/components/Header";
import { ChatContainer } from "@/components/ChatContainer";

const Index = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[hsl(var(--gmi-bg-dark))]">
      <BackgroundRippleEffect />
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        <Header />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Index;
