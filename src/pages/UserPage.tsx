import { Trash2, LogOut, Wallet, History, User, Heart } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import type { UserDto } from "@/api/types"
import { UserProfile, UpdateUserProfile } from "@/api/request"


const UserPage = () => {
    const [form, setForm] = useState<UserDto | null>(null)
    const [editing, setEditing] = useState(false)

    useEffect(()=>{
        UserProfile().then(data => setForm(data))
    }, [])

    const { t } = useTranslation()
    return (
        <div className="flex min-h-screen bg-gray-50 pt-16">

            <div className="w-72 shrink-0 border-r border-gray-200 bg-white px-6 pt-8 flex flex-col gap-1">
                <div className="flex items-center gap-3 font-semibold text-lg px-3 py-2 mb-4">
                    <User size={20} /> {t("UserProfile.profile")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <History size={18} /> {t("UserProfile.order")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <Heart size={18} /> {t("UserProfile.wishlist")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <Wallet size={18} /> {t("UserProfile.wallet")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <LogOut size={18} /> {t("UserProfile.logOut")}
                </div>
                <div className="mt-auto flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-red-500">
                    <Trash2 size={18} /> {t("UserProfile.delete")}
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start py-16 px-6">
                <div className="w-full max-w-2xl">
                    <h1 className="text-lg font-bold uppercase tracking-wide mb-6">{t("UserProfile.personalData")}</h1>

                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#1e3a5f] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg shrink-0">
                                NP
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <span className="font-bold text-lg text-gray-900">Nume Prenume</span>
                                <span className="text-sm text-gray-500">email@email.com</span>
                                <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-3 py-0.5 rounded-full w-fit mt-1">
                                    member(buyer/seller)
                                </span>
                            </div>
                            <div className="flex gap-4 pr-2">
                                <div className="flex flex-col items-center px-5 border-l border-gray-100">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{t("UserProfile.orders")}</span>
                                    <span className="text-3xl font-bold text-gray-900">3</span>
                                </div>
                                <div className="flex flex-col items-center px-5 border-l border-gray-100">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{t("UserProfile.sales")}</span>
                                    <span className="text-3xl font-bold text-gray-900">3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-2xl">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-4">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">{t("UserProfile.personalInfo")}</h2>
                            <button className="text-sm border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-50">
                                Edit
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.fullName")}</p>
                                <p className="text-sm text-gray-900">Nume Prenume</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.email")}</p>
                                <p className="text-sm text-gray-900">email@email.com</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.phone")}</p>
                                <p className="text-sm text-gray-900">+373 000 000</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.memberSince")}</p>
                                <p className="text-sm text-gray-900">Jan 1, 2024</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.member")}</p>
                                <p className="text-sm text-gray-900">Buyer/Seller</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.id")}</p>
                                <p className="text-sm text-gray-900">usr_8f3k2a</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserPage