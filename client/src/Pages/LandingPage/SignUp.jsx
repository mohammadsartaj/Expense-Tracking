// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import PropTypes from "prop-types"; // Import PropTypes

// export default function SignupModal({ isOpen, onClose }) {
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//     console.log("Signup submitted");
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-pink-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Sign Up for ExpenseTrack
//           </DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="name">Full Name</Label>
//             <Input
//               id="name"
//               type="text"
//               placeholder="Enter your full name"
//               className="bg-gray-800 text-white border-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               className="bg-gray-800 text-white border-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               placeholder="Create a password"
//               className="bg-gray-800 text-white border-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <Input
//               id="confirmPassword"
//               type="password"
//               placeholder="Confirm your password"
//               className="bg-gray-800 text-white border-gray-700"
//               required
//             />
//           </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="adminAccess"
//               checked={isAdmin}
//               onChange={() => setIsAdmin(!isAdmin)}
//               className="rounded text-pink-500 focus:ring-pink-500"
//             />
//             <Label htmlFor="adminAccess">Request Admin Access</Label>
//           </div>
//           <Button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//           >
//             Sign Up
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

////////////////////////////////////////////////////

// import { useState } from "react";
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
// import { Loader2, Building2, Key } from "lucide-react";

// export default function SignupModal({ isOpen, onClose }) {
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

//   const handleTwoFactorSetup = (e) => {
//     e.preventDefault();
//     // Handle 2FA setup here
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-pink-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             {isAdmin ? "Admin Sign Up" : "User Sign Up"}
//           </DialogTitle>
//         </DialogHeader>
//         {!showTwoFactor ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex items-center justify-between mb-4">
//               <Label
//                 htmlFor="adminToggle"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 Request Admin Access
//               </Label>
//               <Switch
//                 id="adminToggle"
//                 checked={isAdmin}
//                 onCheckedChange={setIsAdmin}
//               />
//             </div>
//             <div>
//               <Label htmlFor="name">Full Name</Label>
//               <Input
//                 id="name"
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
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
//                 placeholder="Create a password"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input
//                 id="confirmPassword"
//                 type="password"
//                 placeholder="Confirm your password"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             {isAdmin && (
//               <>
//                 <div>
//                   <Label htmlFor="companyName">Company Name</Label>
//                   <div className="relative">
//                     <Input
//                       id="companyName"
//                       type="text"
//                       placeholder="Enter company name"
//                       className="bg-gray-800 text-white border-gray-700 pl-10"
//                       required
//                     />
//                     <Building2
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                       size={16}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="adminKey">Admin Registration Key</Label>
//                   <div className="relative">
//                     <Input
//                       id="adminKey"
//                       type="password"
//                       placeholder="Enter admin registration key"
//                       className="bg-gray-800 text-white border-gray-700 pl-10"
//                       required
//                     />
//                     <Key
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                       size={16}
//                     />
//                   </div>
//                 </div>
//               </>
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
//                 "Sign Up"
//               )}
//             </Button>
//           </form>
//         ) : (
//           <form onSubmit={handleTwoFactorSetup} className="space-y-4">
//             <div>
//               <Label htmlFor="twoFactorSetup">2FA Setup</Label>
//               <Input
//                 id="twoFactorSetup"
//                 type="text"
//                 placeholder="Enter the code from your authenticator app"
//                 className="bg-gray-800 text-white border-gray-700"
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//             >
//               Complete Setup
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }

// // Prop validation
// SignupModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
//   onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
// };

// import { useState } from "react";
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

// export default function SignupModal({ isOpen, onClose }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setIsLoading(false);
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-pink-500">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Sign Up
//           </DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="username">Username</Label>
//             <Input
//               id="username"
//               type="text"
//               value="username"
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               className="bg-gray-800 text-white border-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               value="password"
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Create a password"
//               className="bg-gray-800 text-white border-gray-700"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
//           {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
//           <Button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Please wait
//               </>
//             ) : (
//               "Sign Up"
//             )}
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// // Prop validation
// SignupModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
//   onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
// };

//////////////////////////////////////////////////

import { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function SignupModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-pink-500">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sign Up
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="bg-gray-800 text-white border-gray-700"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="bg-gray-800 text-white border-gray-700"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Prop validation
SignupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and is required
  onClose: PropTypes.func.isRequired, // `onClose` must be a function and is required
};
