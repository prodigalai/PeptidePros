"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Lock, ShieldCheck } from "lucide-react"

export default function DashboardLoginPage() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Authenticate via backend API
            const response = await fetch('https://peptide-445ed25dbf1d.herokuapp.com /login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Important for session cookies
                body: JSON.stringify({ username, password })
            })

            const data = await response.json()

            if (data.success) {
                // Store in sessionStorage
                sessionStorage.setItem("dashboard_auth", "true")
                sessionStorage.setItem("dashboard_user", data.user?.username || username)
                sessionStorage.setItem("dashboard_role", data.user?.role || "")
                sessionStorage.setItem("session_id", data.session_id || "")
                toast.success(data.message || "Login successful")
                router.push("/dashboard")
            } else {
                toast.error(data.message || "Invalid username or password")
                setLoading(false)
            }
        } catch (error) {
            console.error("Login error:", error)
            toast.error("Login failed. Please try again.")
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                            <ShieldCheck className="h-8 w-8 text-accent" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Dashboard Access</h1>
                        <p className="text-slate-400 text-sm">Enter your credentials to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Username</label>
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin / manager / dev"
                                required
                                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-accent"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Password</label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                required
                                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-accent"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                        >
                            {loading ? "Signing in..." : (
                                <>
                                    <Lock className="h-4 w-4 mr-2" />
                                    Sign In
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-700">
                        <p className="text-xs text-slate-500 text-center">
                            Usernames: admin, manager, dev
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
