import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "../../assets/HkLogo.png";
import LoginModal from "./Login";
import SignupModal from "./SignUp";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={Logo} // Replace with your actual logo path if needed
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hisaab Kitab
          </span>
        </div>
        <nav>
          <Button
            variant="outline"
            className="mr-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            onClick={() => setIsSignupOpen(true)}
          >
            Sign Up
          </Button>
        </nav>
      </div>
      {/* Conditional rendering of modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </header>
  );
}
