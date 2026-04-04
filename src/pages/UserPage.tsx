import { Trash2, LogOut, Wallet, History, User, Heart, Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useUser } from "@/hooks/useUser"
import { useState } from "react"
import { UpdateUserProfile } from "@/api/request"
import type { UpdateUserDto } from "@/api/types"

const UserPage = () => {
    const { user, setUser } = useUser()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const [form, setForm] = useState<UpdateUserDto>({ firstName: '', lastName: '', phoneNumber: '' })

    const onSave = () =>{
        UpdateUserProfile(form).then((response)=>{
            toast.success("Schimbarile au fost aplicate")
            setUser(response)
            setEdit(false)
        }).catch((error)=>{
            toast.error(error.message)
        })
    }

    return (
        <div className="flex min-h-screen bg-gray-50 pt-16">
            <div className="md:hidden fixed top-16 left-0 right-0 z-20 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 rounded-lg hover:bg-gray-100">
                    <Menu className="h-8" />
                </button>
                <span className="font-semibold text-base">{t("UserProfile.profile")}</span>
            </div>

            {sidebarOpen && (
                <div className="md:hidden fixed inset-0 z-30 bg-black/40"
                    onClick={() => setSidebarOpen(false)}></div>
            )}

            <div className={`fixed md:static inset-y-0 left-0 z-40 w-72 shrink-0 border-r border-gray-200 bg-white px-6 pt-8 flex flex-col gap-1 transition-transform duration-300 ${sidebarOpen ? "translate-x-0 " : "-translate-x-full"}  md:translate-x-0`}>
                <button
                    className="md:hidden self-end mb-2 p-1 rounded-lg hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}>
                    <X className="h-5" />
                </button>

                <div className="flex items-center gap-3 font-semibold text-lg px-3 py-2 mb-4 cursor-pointer"
                    onClick={() => {
                        //TODO: implement profile logic
                        toast.info('not implemented yet')
                    }}
                >
                    <User size={20} /> {t("UserProfile.profile")}
                </div>
                <div
                    className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <History size={18} /> {t("UserProfile.order")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <Heart size={18} /> {t("UserProfile.wishlist")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600">
                    <Wallet size={18} /> {t("UserProfile.wallet")}
                </div>
                <div className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-gray-600"
                    onClick={() => {
                        localStorage.removeItem("accessToken")
                        navigate('/')
                    }}
                >
                    <LogOut size={18} /> {t("UserProfile.logOut")}
                </div>
                <div className="mt-auto flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-base hover:bg-gray-100 text-red-500">
                    <Trash2 size={18} /> {t("UserProfile.delete")}
                </div>

            </div>

            <div className="flex-1 flex flex-col items-center justify-start py-16 px-6 sm:px-6 mt-12 md:mt-0">
                <div className="w-full max-w-2xl">
                    <h1 className="text-lg font-bold uppercase tracking-wide mb-6">{t("UserProfile.personalData")}</h1>

                    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="bg-[#1e3a5f] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg shrink-0">
                                    {user?.firstName[0]?.toUpperCase()}{user?.lastName[0]?.toUpperCase()}
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <span className="font-bold text-lg text-gray-900 truncate">{user?.firstName} {user?.lastName}</span>
                                    <span className="text-sm text-gray-500 truncate">{user?.email}</span>
                                    <span className="lowercase text-xs font-bold text-blue-700 bg-blue-100 px-3 py-0.5 rounded-full w-fit mt-1">
                                        {user?.role}
                                    </span>
                                </div>
                            </div>

                            {/* <div className="flex gap-0 self-stretch sm:self-auto border-t sm:border-t-0 sm:border-l border-gray-100 pt-3 sm:pt-0 sm:pl-4 w-full sm:w-auto">
                                <div className="flex flex-col items-center flex-1 sm:flex-none sm:px-5 border-r-0 sm:border-l border-gray-100">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{t("UserProfile.orders")}</span>
                                    <span className="text-3xl font-bold text-gray-900">3</span>
                                </div>
                                <div className="flex flex-col items-center flex-1 sm:flex-none sm:px-5 sm:border-l border-gray-100">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{t("UserProfile.sales")}</span>
                                    <span className="text-3xl font-bold text-gray-900">3</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-2xl">
                    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm mt-4 sm:p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">{t("UserProfile.personalInfo")}</h2>
                            {edit ? (
                                <div className="flex gap-3">
                                    <button className="text-sm border border-gray-300 px-3 py-1 rounded-lg hover:bg-red-50 hover:text-red-500"
                                        onClick={() => {
                                            setForm({
                                                firstName: '',
                                                lastName: '',
                                                phoneNumber: ''
                                            })
                                            setEdit(false)
                                        }}>
                                        Cancel
                                    </button>
                                    <button className="text-sm border border-gray-300 px-3 py-1 rounded-lg hover:bg-green-50 hover:text-green-500"
                                    onClick={onSave}>
                                    Save
                                    </button>
                                </div>
                            ) : (
                                <button className="text-sm border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-50"
                                    onClick={() => {
                                        setForm({
                                            firstName: user?.firstName ?? '',
                                            lastName: user?.lastName ?? '',
                                            phoneNumber: user?.phoneNumber ?? ''
                                        })
                                        setEdit(true)
                                    }}>
                                    Edit
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.firstName")}</p>
                                {edit ? (
                                    <input
                                        value={form.firstName}
                                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                        className="text-sm border border-gray-300 rounded-lg px-2 py-1 w-full" />
                                ) : (
                                    <p className="text-sm text-gray-900">{user?.firstName}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.lastName")}</p>
                                {edit ? (
                                    <input
                                        value={form.lastName}
                                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                        className="text-sm border border-gray-300 rounded-lg px-2 py-1 w-full" />
                                ) : (
                                    <p className="text-sm text-gray-900">{user?.lastName}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.email")}</p>
                                <p className="text-sm text-gray-900">{user?.email}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.phone")}</p>
                                {edit ? (
                                    <input
                                        value={form.phoneNumber}
                                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                                        className="text-sm border border-gray-300 rounded-lg px-2 py-1 w-full" />
                                ) : (
                                    <p className="text-sm text-gray-900">{user?.phoneNumber}</p>
                                )}
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.memberSince")}</p>
                                <p className="text-sm text-gray-900">{user?.createdAt ? new Date(user?.createdAt).toLocaleDateString() : "-"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t("UserProfile.member")}</p>
                                <p className="lowercase text-sm text-gray-900">{user?.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserPage