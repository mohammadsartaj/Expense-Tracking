// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { Loader2 } from "lucide-react";

// export default function LoginModal({ isOpen, onClose }) {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showTwoFactor, setShowTwoFactor] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setShowTwoFactor(true);
//     setIsLoading(false);
//   };

//   const handleTwoFactorSubmit = (e) => {
//     e.preventDefault();
//     // Handle 2FA verification here
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-purple-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Login to ExpenseShare
//           </DialogTitle>
//         </DialogHeader>
//         {!showTwoFactor ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <Label
//                 htmlFor="adminToggle"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 Admin Access
//               </Label>
//               <Switch
//                 id="adminToggle"
//                 checked={isAdmin}
//                 onCheckedChange={(value) => setIsAdmin(value)}
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </form>
//         ) : (
//           <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="twoFactorCode">2FA Code</Label>
//               <Input
//                 id="twoFactorCode"
//                 type="text"
//                 placeholder="Enter 2FA code"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//             >
//               Verify
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }
///////////////////////////////////////////////////

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import { Loader2, Key } from "lucide-react";

// export default function LoginModal({ isOpen, onClose }) {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showTwoFactor, setShowTwoFactor] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setShowTwoFactor(true);
//     setIsLoading(false);
//   };

//   const handleTwoFactorSubmit = (e) => {
//     e.preventDefault();
//     // Handle 2FA verification here
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-purple-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             {isAdmin ? "Admin Login" : "User Login"}
//           </DialogTitle>
//         </DialogHeader>
//         {!showTwoFactor ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center justify-between mb-4">
//               <Label
//                 htmlFor="adminToggle"
//                 className="text-sm font-medium leading-none"
//               >
//                 Admin Access
//               </Label>
//               <Switch
//                 id="adminToggle"
//                 checked={isAdmin}
//                 onCheckedChange={setIsAdmin}
//                 aria-readonly
//                 className="border-solid"
//               />
//             </div>
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             {isAdmin && (
//               <div>
//                 <Label htmlFor="adminKey">Admin Key</Label>
//                 <div className="relative">
//                   <Input
//                     id="adminKey"
//                     type="password"
//                     placeholder="Enter admin key"
//                     className="bg-gray-800 text-white border-gray-700 pl-10"
//                     required
//                   />
//                   <Key
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
//                     size={16}
//                   />
//                 </div>
//               </div>
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </form>
//         ) : (
//           <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="twoFactorCode">2FA Code</Label>
//               <Input
//                 id="twoFactorCode"
//                 type="text"
//                 placeholder="Enter 2FA code"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//             >
//               Verify
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }

// LoginModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
//   onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
// };

/////////////////////////////////////////////////////
// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Loader2 } from "lucide-react";

// export default function LoginModal({ isOpen, onClose }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showTwoFactor, setShowTwoFactor] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setShowTwoFactor(true);
//     setIsLoading(false);
//   };

//   const handleTwoFactorSubmit = (e) => {
//     e.preventDefault();
//     // Handle 2FA verification here
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-purple-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Login to ExpenseShare
//           </DialogTitle>
//         </DialogHeader>
//         {!showTwoFactor ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 type="text"
//                 placeholder="Enter your username"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </form>
//         ) : (
//           <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="twoFactorCode">2FA Code</Label>
//               <Input
//                 id="twoFactorCode"
//                 type="text"
//                 placeholder="Enter 2FA code"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//             >
//               Verify
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }

// LoginModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
//   onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
// };

//////////////////////////////////////////

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Loader2 } from "lucide-react";

// export default function LoginModal({ isOpen, onClose }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showTwoFactor, setShowTwoFactor] = useState(false);
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setShowTwoFactor(true);
//     setIsLoading(false);
//   };

//   const handleTwoFactorSubmit = (e) => {
//     e.preventDefault();
//     // Handle 2FA verification here
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-purple-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Login to ExpenseShare
//           </DialogTitle>
//         </DialogHeader>
//         {!showTwoFactor ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 type="text"
//                 value="username"
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter your username"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
//             {message && (
//               <p className="text-green-600 text-sm mb-3">{message}</p>
//             )}
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </form>
//         ) : (
//           <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="twoFactorCode">2FA Code</Label>
//               <Input
//                 id="twoFactorCode"
//                 type="text"
//                 placeholder="Enter 2FA code"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//             >
//               Verify
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }

// LoginModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
//   onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
// };

////////////////////////////////////
//Dipesh youtube testing
import React from "react";
import LoginForm from "../../appComponents/LoginForm";
// import { useNavigate } from "react-router-dom";
// import { useSession } from "../../context/SessionContext";

const Login = () => {
  // const navigate = useNavigate();
  // const { login } = useSession();
  // const handleLoginSuccess = (userData) => {
  //   console.log("The Logged in userdata : ", userData);
  //   login(userData);
  //   if (!userData.isMfaActive) {
  //     navigate("/setup-2fa");
  //   } else {
  //     navigate("/verify-2fa");
  //   }
  // };

  // return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  return (
    <div className="w-screen sm-w-1/2 flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-pink-200">
      <div className="sm:max-w-[425px] bg-gray-900 text-white border-solid border-4 border-pink-900 p-6 rounded-xl shadow-lg">
        <div className="text-center mb-6"></div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
