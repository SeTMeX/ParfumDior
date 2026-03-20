import type { RegisterDto } from "@/api/types";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Register } from "@/api/request";
import { toast } from "sonner";

interface RegisterFormProps {
show: boolean;
onClose: () => void;
}

const RegisterForm = ({ show, onClose }: RegisterFormProps) => {

  const [firstName, setfirstName] = useState('')
const [lastName, setLastName] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onSubmit = () =>{
  const payload: RegisterDto = {
    firstName: firstName,
    lastName,
    phoneNumber,
    email,
    password
  }
  Register(payload).then((response)=>{
    localStorage.setItem('accessToken', response.accessToken)
    localStorage.setItem('refreshToken', response.refreshToken)
    toast.success("Va-ti inregistrat cu success")
    onClose()
  }).catch((error)=>{
    toast.error(error.response.data.message)
  })
}

return (
<Dialog open={show} onOpenChange={onClose}>
<DialogContent className="p-0 border-none" showCloseButton={false}>
  <DialogTitle className="hidden"/>
<div className="w-full rounded-lg bg-gray-900 p-8 text-gray-100 shadow-lg">
<p className="text-center text-2xl font-bold mb-2">Sign Up</p>
<p className="text-center text-sm text-gray-400 mb-6">
Create your free account
</p>

<div className="mt-6">
{/* Name + Surname */}
<div className="grid grid-cols-2 gap-4">
<div>
<label
htmlFor="name"
className="block text-sm text-gray-400 mb-1"
>
Name
</label>
<input
onChange={(e) => setfirstName(e.target.value)}
value={firstName}
type="text"
id="name"
placeholder="Enter your name"
autoComplete="given-name"
className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
/>
</div>

<div>
<label
htmlFor="surname"
className="block text-sm text-gray-400 mb-1"
>
Surname
</label>
<input
onChange={(e) => setLastName(e.target.value)}
value={lastName}
type="text"
id="surname"
placeholder="Enter your surname"
autoComplete="family-name"
className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
/>
</div>
</div>

{/* Phone */}
<div className="mt-4">
<label
htmlFor="phone"
className="block text-sm text-gray-400 mb-1"
>
Phone Number
</label>
<input
onChange={(e) => setPhoneNumber(e.target.value)}
value={phoneNumber}
type="tel"
id="phone"
placeholder="Enter your phone number"
autoComplete="tel"
className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
/>
</div>

{/* Email */}
<div className="mt-4">
<label
htmlFor="email"
className="block text-sm text-gray-400 mb-1"
>
Email
</label>
<input
onChange={(e) => setEmail(e.target.value)}
value={email}
type="email"
id="email"
placeholder="Enter your email"
autoComplete="email"
className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
/>
</div>

{/* Password */}
<div className="mt-4">
<label
htmlFor="password"
className="block text-sm text-gray-400 mb-1"
>
Password
</label>
<input
onChange={(e) => setPassword(e.target.value)}
value={password}
type="password"
id="password"
placeholder="Create a password"
autoComplete="new-password"
className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
/>
</div>

<button
onClick={onSubmit}
type="submit"
className="mt-6 w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors py-3 rounded-md font-semibold text-white"
>
Create Account
</button>
</div>

{/* Divider */}
<div className="flex items-center my-6">
<div className="h-px flex-1 bg-gray-700" />
<p className="px-4 text-sm text-gray-400">or sign up with</p>
<div className="h-px flex-1 bg-gray-700" />
</div>

{/* Social buttons */}
<div className="flex justify-center gap-4">
{/* Google */}
<button
type="button"
className="rounded-full p-3 bg-gray-800 hover:bg-gray-700 transition-colors"
aria-label="Sign up with Google"
>
<svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
<path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.894.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
</svg>
</button>

{/* X / Twitter */}
<button
type="button"
className="rounded-full p-3 bg-gray-800 hover:bg-gray-700 transition-colors"
aria-label="Sign up with Twitter/X"
>
<svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>
</button>

{/* GitHub */}
<button
type="button"
className="rounded-full p-3 bg-gray-800 hover:bg-gray-700 transition-colors"
aria-label="Sign up with GitHub"
>
<svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
</svg>
</button>
</div>

<p className="text-center text-sm mt-6 text-gray-400">
Already have an account?{" "}
<a
href="#"
className="text-blue-400 hover:text-blue-300 hover:underline"
>
Sign in
</a>
</p>
</div>
</DialogContent>
</Dialog>
);
};

export default RegisterForm;