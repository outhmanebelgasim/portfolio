import { NavBar } from "../components/NavBar";
import { StarBackground } from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />
      {/* NavBar*/}
      <NavBar />
      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
