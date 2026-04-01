import type { RegisterDto } from "@/api/types";
import { Register } from "@/api/request";
import { toast } from "sonner";
import { useState } from "react";
import { PHONE_REGEX } from "@/data/const.ts";

export const useRegisterForm = (onClose: () => void) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


        const validateData = () => {
            if (firstName.length === 0) {
                toast.error('enter first name')
                return false
            }

            if (lastName.length === 0) {
                toast.error('enter last name')
                return false
            }

            if (phoneNumber.length === 0 || !PHONE_REGEX.test(phoneNumber)) {
                toast.error('enter phone number')
                return false
            }

            if (email.length === 0 || !email.includes("@")) {
                toast.error('email invalid')
                return false
            }
            if (password.length < 6 || password.length > 16) {
                toast.error('password invalid')
                return false
            }

            return true
        }

        const onSubmit = () => {
            const isValid = validateData()
            if (!isValid) {
                return;
            }
            const payload: RegisterDto = {
                firstName: firstName,
                lastName,
                phoneNumber,
                email,
                password
            }
            Register(payload).then((response) => {
                localStorage.setItem('accessToken', response.accessToken)
                localStorage.setItem('refreshToken', response.refreshToken)
                toast.success("Va-ti inregistrat cu success")
                onClose()
            }).catch((error) => {
                toast.error(error?.response?.data?.message)
            })
        
    }

    return { firstName, setFirstName, lastName, setLastName, phoneNumber, setPhoneNumber, email, setEmail, password, setPassword, onSubmit }
}