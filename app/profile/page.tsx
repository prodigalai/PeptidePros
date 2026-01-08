"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import { toast } from "sonner"
import {
    User as UserIcon,
    Settings,
    Package,
    CreditCard,
    LogOut,
    ShieldCheck,
    FlaskConical,
    History,
    Mail,
    Edit2,
    Download,
    ExternalLink,
    ChevronRight,
    Bell,
    Lock,
    Eye,
    Plus
} from "lucide-react"

type TabType = "personal" | "orders" | "lab" | "payment" | "settings"

export default function ProfilePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
            <ProfileContent />
        </Suspense>
    )
}

function ProfileContent() {
    const { user, logout, isInitialized, isAuthenticated } = useAuth()
    const searchParams = useSearchParams()
    const initialTab = (searchParams.get("tab") as TabType) || "personal"
    const [activeTab, setActiveTab] = useState<TabType>(initialTab)
    const router = useRouter()

    useEffect(() => {
        if (isInitialized && !isAuthenticated) {
            router.push("/login")
        }
    }, [isInitialized, isAuthenticated, router])

    useEffect(() => {
        const tab = searchParams.get("tab") as TabType
        if (tab && ["personal", "orders", "lab", "payment", "settings"].includes(tab)) {
            setActiveTab(tab)
        }
    }, [searchParams])

    if (!isInitialized || !user) return null

    const handleAction = (label: string) => {
        toast.info(`${label} requested`, {
            description: "Our secure systems are processing your request."
        })
    }

    const handleLogout = () => {
        logout()
        toast.success("Successfully signed out", {
            description: "Come back soon for your research needs."
        })
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "personal":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Account Details */}
                            <div className="p-8 bg-background border border-border rounded-[32px] space-y-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-foreground font-serif">Secure Profile Details</h3>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 rounded-xl border border-border hover:bg-accent/10 hover:text-accent"
                                        onClick={() => handleAction("Profile Edit")}
                                    >
                                        <Edit2 className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="space-y-5">
                                    <div className="flex flex-col gap-1.5 p-4 bg-muted/20 rounded-2xl border border-border/50">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Full Name</label>
                                        <p className="text-sm font-medium text-foreground">{user.name}</p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 p-4 bg-muted/20 rounded-2xl border border-border/50">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Email Address</label>
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-3.5 w-3.5 text-accent" />
                                            <p className="text-sm font-medium text-foreground">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 p-4 bg-muted/20 rounded-2xl border border-border/50">
                                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Laboratory ID</label>
                                        <p className="text-sm font-mono text-accent">PP-RES-{user.id.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white dark:bg-muted/10 border border-border rounded-[28px] flex flex-col justify-between hover:border-accent/40 transition-colors group cursor-pointer" onClick={() => setActiveTab("orders")}>
                                    <Package className="h-6 w-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-3xl font-bold text-foreground">12</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Orders</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white dark:bg-muted/10 border border-border rounded-[28px] flex flex-col justify-between hover:border-purple-500/40 transition-colors group cursor-pointer" onClick={() => handleAction("Financial Statistics")}>
                                    <History className="h-6 w-6 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-3xl font-bold text-foreground">$4.2k</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Value</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white dark:bg-muted/10 border border-border rounded-[28px] flex flex-col justify-between hover:border-emerald-500/40 transition-colors group cursor-pointer" onClick={() => handleAction("KYC/Identity Verification")}>
                                    <ShieldCheck className="h-6 w-6 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-2xl font-bold text-foreground">Verified</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Security Status</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-accent/5 border border-accent/20 rounded-[28px] flex flex-col justify-between hover:bg-accent/10 transition-colors group cursor-pointer" onClick={() => setActiveTab("lab")}>
                                    <FlaskConical className="h-6 w-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-3xl font-bold text-accent">8</p>
                                        <p className="text-[10px] font-bold text-accent/70 uppercase tracking-widest">CoAs Filed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders Section */}
                        <div className="p-8 bg-background border border-border rounded-[32px] space-y-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-foreground font-serif text-balance">Recent Research Shipments</h3>
                                <Button variant="outline" size="sm" className="rounded-xl gap-2 font-bold tracking-tight text-xs h-9" onClick={() => setActiveTab("orders")}>
                                    View All Orders <ChevronRight className="h-3 w-3" />
                                </Button>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-border/50">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted/30">
                                        <tr>
                                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Order ID</th>
                                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Compound</th>
                                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Status</th>
                                            <th className="px-6 py-4 font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {[
                                            { id: "#PP-9001", compound: "BPC-157 5mg", status: "Delivered", date: "Jan 04, 2026", color: "text-emerald-500" },
                                            { id: "#PP-8942", compound: "NAD+ 500mg", status: "In Transit", date: "Jan 07, 2026", color: "text-accent" },
                                        ].map((order, i) => (
                                            <tr key={i} className="group hover:bg-muted/20 transition-colors cursor-pointer" onClick={() => handleAction(`Order Details ${order.id}`)}>
                                                <td className="px-6 py-4 font-mono font-bold">{order.id}</td>
                                                <td className="px-6 py-4 font-medium text-foreground">{order.compound}</td>
                                                <td className={`px-6 py-4`}>
                                                    <span className={`px-2 py-1 rounded-full bg-muted text-[10px] font-bold uppercase tracking-wider ${order.color}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-muted-foreground text-xs">{order.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            case "orders":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-2xl font-serif font-light text-foreground">Order History</h3>
                        {[
                            { id: "PP-9001", items: "3x BPC-157, 1x TB-500", total: "$240.00", date: "Jan 04, 2026", status: "Delivered" },
                            { id: "PP-8942", items: "1x NAD+ 500mg Vials", total: "$125.00", date: "Jan 07, 2026", status: "In Transit" },
                            { id: "PP-8812", items: "10x Alcohol Prep Pads", total: "$15.00", date: "Dec 28, 2025", status: "Delivered" },
                        ].map((order, i) => (
                            <div
                                key={i}
                                className="p-6 bg-background border border-border rounded-2xl flex items-center justify-between hover:border-accent/40 transition-colors cursor-pointer group"
                                onClick={() => handleAction(`Order Management for #${order.id}`)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-muted rounded-xl group-hover:bg-accent/10 transition-colors">
                                        <Package className="h-6 w-6 text-muted-foreground group-hover:text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">#{order.id}</p>
                                        <p className="text-sm text-muted-foreground">{order.items}</p>
                                    </div>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="font-bold text-foreground">{order.total}</p>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{order.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            case "lab":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-serif font-light text-foreground">Laboratory Reports (CoA)</h3>
                            <p className="text-xs text-muted-foreground">Request customized testing documentation via support</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: "BPC-157 Purity Analysis", batch: "BATCH-4412", date: "Dec 2025" },
                                { name: "NAD+ Concentration Study", batch: "BATCH-9011", date: "Jan 2026" },
                                { name: "TB-500 HPLC Report", batch: "BATCH-8822", date: "Nov 2025" },
                                { name: "Glutathione Sterility", batch: "BATCH-3310", date: "Jan 2026" },
                            ].map((report, i) => (
                                <div key={i} className="p-6 bg-background border border-border rounded-3xl space-y-4 hover:shadow-lg transition-all group">
                                    <div className="flex items-start justify-between">
                                        <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">
                                            <FlaskConical className="h-6 w-6" />
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-muted-foreground hover:text-accent"
                                            onClick={() => handleAction(`Download Report: ${report.name}`)}
                                        >
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{report.name}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Ref ID: {report.batch} • {report.date}</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl text-xs gap-2 font-bold uppercase tracking-widest h-10 border-accent/20 hover:bg-accent/5"
                                        onClick={() => handleAction(`Viewing ${report.name}`)}
                                    >
                                        <Eye className="h-3 w-3" /> View Online
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case "settings":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-2xl font-serif font-light text-foreground">Account Settings</h3>

                        <div className="space-y-4">
                            {[
                                { icon: Bell, title: "Shipping Notifications", desc: "Receive real-time tracking updates via email", type: "toggle" },
                                { icon: Lock, title: "Two-Factor Auth", desc: "Add an extra layer of security to your clinical portal", type: "button", action: "Enable" },
                                { icon: CreditCard, title: "Default Currency", desc: "Display prices in your local region (USD)", type: "select" },
                            ].map((setting, i) => (
                                <div key={i} className="p-6 bg-background border border-border rounded-2xl flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-muted rounded-xl">
                                            <setting.icon className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground">{setting.title}</p>
                                            <p className="text-xs text-muted-foreground">{setting.desc}</p>
                                        </div>
                                    </div>
                                    {setting.type === "button" && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="rounded-xl font-bold uppercase tracking-widest text-[10px]"
                                            onClick={() => handleAction(`${setting.action} ${setting.title}`)}
                                        >
                                            {setting.action}
                                        </Button>
                                    )}
                                    {setting.type === "toggle" && (
                                        <button
                                            className="w-10 h-5 bg-accent rounded-full relative transition-opacity hover:opacity-80"
                                            onClick={() => handleAction(`Toggle ${setting.title}`)}
                                        >
                                            <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                                        </button>
                                    )}
                                    {setting.type === "select" && (
                                        <Button
                                            variant="ghost"
                                            className="text-xs font-bold gap-1"
                                            onClick={() => handleAction(`Change ${setting.title}`)}
                                        >
                                            USD <ChevronRight className="h-3 w-3" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-border">
                            <Button
                                variant="outline"
                                className="text-destructive border-destructive/20 hover:bg-destructive/10 hover:text-destructive rounded-xl w-full py-6 font-bold uppercase tracking-widest text-xs"
                                onClick={() => toast.error("Security Confirmation Required", {
                                    description: "Please contact laboratory support to delete your researcher account."
                                })}
                            >
                                Delete Research Portal Account
                            </Button>
                        </div>
                    </div>
                )
            case "payment":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-serif font-light text-foreground">Payment Methods</h3>
                            <Button
                                className="rounded-xl gap-2 font-bold tracking-tight text-xs h-10 px-6"
                                onClick={() => handleAction("Add New Card")}
                            >
                                <Plus className="h-4 w-4" /> Add New Card
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Saved Card 1 */}
                            <div
                                className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[32px] text-white shadow-2xl overflow-hidden group cursor-pointer"
                                onClick={() => handleAction("Managing VISA Card 4412")}
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="h-8 w-12 bg-white/10 rounded-md backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold italic text-[10px]">VISA</div>
                                </div>
                                <div className="space-y-8 relative z-10">
                                    <div className="h-10 w-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg" />
                                    <div className="space-y-1">
                                        <p className="text-lg font-mono tracking-[0.3em]">•••• •••• •••• 4412</p>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[8px] uppercase tracking-widest opacity-50">Card Holder</p>
                                                <p className="text-sm font-medium">{user.name}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[8px] uppercase tracking-widest opacity-50">Expires</p>
                                                <p className="text-sm font-medium">09/28</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            {/* Add New Quick Card */}
                            <button
                                className="p-8 border-2 border-dashed border-border rounded-[32px] flex flex-col items-center justify-center gap-4 hover:border-accent hover:bg-accent/5 transition-all text-muted-foreground hover:text-accent group"
                                onClick={() => handleAction("Add Alternative Method")}
                            >
                                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/20">
                                    <Plus className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-foreground group-hover:text-accent transition-colors">Add Alternative Method</p>
                                    <p className="text-xs">Securely link a crypto wallet or credit line</p>
                                </div>
                            </button>
                        </div>

                        <div className="p-8 bg-muted/20 border border-border rounded-[32px] space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105c1.602-6.43 8.113-10.34 14.542-8.736 6.426 1.593 10.336 8.116 8.734 14.535zm-6.336-4.66c.232-1.558-.946-2.392-2.553-2.946l.52-2.085-1.27-.318-.507 2.03c-.333-.082-.676-.16-1.015-.235l.512-2.052-1.268-.316-.52 2.086c-.276-.063-.545-.125-.806-.19l.002-.008-1.75-.436-.338 1.355s.94.216.92.23c.513.127.606.465.59.733l-.592 2.373c.035.01.082.022.133.042l-.135-.034-.83 3.325c-.062.155-.22.387-.577.298.013.02-.942-.236-.942-.236l-.63 1.453 1.652.41c.307.078.61.16.908.236l-.526 2.115 1.268.317.524-2.1c.346.096.682.185 1.01.27l-.52 2.088 1.27.317.525-2.11c2.167.41 3.8.245 4.487-1.714.554-1.577-.024-2.486-1.163-3.08.83-.193 1.456-.74 1.623-1.87zm-2.83 4.102c-.392 1.577-3.047.724-3.91.51l.7-2.805c.86.214 3.612.635 3.21 2.295zm.393-4.13c-.358 1.432-2.57.705-3.29.525l.635-2.545c.72.18 3.02.512 2.655 1.98z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Crypto Research Grant</p>
                                    <p className="text-xs text-muted-foreground">Anonymous funding available via BTC, ETH, and SOL</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    className="ml-auto text-accent text-xs font-bold uppercase tracking-tight hover:bg-accent/10"
                                    onClick={() => handleAction("Crypto Gateway Configuration")}
                                >
                                    Configure
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar */}
                    <aside className="lg:col-span-3 space-y-8">
                        <div className="p-8 bg-muted/30 border border-border rounded-[40px] text-center space-y-4 shadow-sm backdrop-blur-sm">
                            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-accent p-1.5 bg-background shadow-xl">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center justify-center gap-2">
                                    <h2 className="text-2xl font-bold text-foreground font-serif tracking-tight">{user.name}</h2>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 rounded-full hover:bg-accent/10"
                                        onClick={() => handleAction("Name Change Request")}
                                    >
                                        <Edit2 className="h-3 w-3 text-muted-foreground" />
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground tracking-tight font-medium pb-2 border-b border-border/50">{user.email}</p>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                                <span className="text-[9px] font-bold text-accent uppercase tracking-[0.2em]">{user.role} ACCESS</span>
                            </div>
                        </div>

                        <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 no-scrollbar">
                            {[
                                { id: "personal" as const, icon: UserIcon, label: "Personal Info" },
                                { id: "orders" as const, icon: Package, label: "My Orders" },
                                { id: "lab" as const, icon: FlaskConical, label: "Lab Reports" },
                                { id: "payment" as const, icon: CreditCard, label: "Payment Methods" },
                                { id: "settings" as const, icon: Settings, label: "Settings" },
                            ].map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex flex-shrink-0 items-center gap-3 px-5 py-3.5 rounded-2xl text-[13px] font-bold tracking-tight transition-all duration-300 ${activeTab === item.id
                                            ? "bg-accent text-accent-foreground shadow-[0_8px_20px_rgba(var(--accent),0.25)] scale-105"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }`}
                                >
                                    <item.icon className={`h-4.5 w-4.5 ${activeTab === item.id ? "text-white" : "text-muted-foreground"}`} />
                                    <span className="whitespace-nowrap">{item.label}</span>
                                    {activeTab === item.id && <ChevronRight className="ml-auto h-3 w-3 hidden lg:block" />}
                                </button>
                            ))}
                            <div className="pt-0 lg:pt-4 mt-0 lg:mt-4 border-l lg:border-l-0 lg:border-t border-border flex lg:block">
                                <button
                                    onClick={handleLogout}
                                    className="flex flex-shrink-0 items-center gap-3 px-5 py-3.5 rounded-2xl text-[13px] font-bold text-destructive hover:bg-destructive/10 transition-all group"
                                >
                                    <LogOut className="h-4.5 w-4.5 group-hover:-translate-x-1 transition-transform" />
                                    <span className="whitespace-nowrap">Sign Out</span>
                                </button>
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 space-y-8 min-h-[600px]">

                        {/* Context Header */}
                        <div className="p-8 md:p-12 bg-gradient-to-br from-accent/20 via-accent/5 to-background border border-accent/20 rounded-[48px] relative overflow-hidden shadow-inner">
                            <div className="relative z-10 space-y-4">
                                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
                                    Clinical <span className="text-accent italic">Dashboard</span>
                                </h1>
                                <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
                                    {activeTab === 'personal' && "Manage your research identity and secure login credentials."}
                                    {activeTab === 'orders' && "Track your ongoing shipments and historical research orders."}
                                    {activeTab === 'lab' && "Access HPLC purity reports and batch-specific lab certificates."}
                                    {activeTab === 'payment' && "Manage secure payment methods and research funding sources."}
                                    {activeTab === 'settings' && "Configure your communication preferences and security settings."}
                                </p>
                            </div>
                            <FlaskConical className="absolute -right-12 -bottom-12 h-64 w-64 text-accent/5 rotate-12 pointer-events-none" />
                        </div>

                        {/* Dynamic Content */}
                        <div className="relative">
                            {renderTabContent()}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
