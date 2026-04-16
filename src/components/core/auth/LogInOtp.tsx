import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { toast } from 'sonner'
import { sendVerficationCode } from "@/api/request";

interface LogInOtpFormProps {
  show: boolean;
  onClose: () => void;
}

const LogInOtp = ({show, onClose}: LogInOtpFormProps) => {
    const [emailInput, setEmailInput] = useState('')
  
  const submit = () => {
    if (!emailInput) {
      toast.error("email-ul este obligatoriu")
      return
    }
    
    sendVerficationCode(emailInput)

  }
  
  return (


    <Dialog open={show} onOpenChange={onClose} >
      <DialogContent className="p-0 border-none " showCloseButton={false}>
        <DialogTitle className="hidden"/>
        <div className="w-full rounded-lg bg-gray-900 p-8 text-gray-100 shadow-lg">
          <p className="text-center text-2xl font-bold mb-2">Login</p>

          <div className="mt-6">
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-1"
              >
                email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                autoComplete="email"
                className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value = {emailInput}
                onChange={(e) => setEmailInput(e.target.value)}

             />
            </div>

            

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors py-3 rounded-md font-semibold text-white"
              onClick={submit}
           >
              Send code
            </button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
export default LogInOtp