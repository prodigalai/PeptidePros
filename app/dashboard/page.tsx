"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogOut, DollarSign, TrendingUp, CheckCircle2, RefreshCw, Calendar, Filter, X } from "lucide-react"
import { toast } from "sonner"

interface Transaction {
    transactionId: string
    orderId: string
    amount: number
    originalAmount: number
    platformFee: number
    date: string
    status: string
    email?: string
    name?: string
}

export default function DashboardPage() {
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState("")
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    useEffect(() => {
        // Check authentication
        const auth = sessionStorage.getItem("dashboard_auth")
        const username = sessionStorage.getItem("dashboard_user")

        if (auth === "true" && username) {
            setAuthenticated(true)
            setUser(username)
            // Set default start date (30 days ago)
            const defaultStartDate = new Date()
            defaultStartDate.setDate(defaultStartDate.getDate() - 30)
            setStartDate(defaultStartDate.toISOString().split('T')[0])
            fetchTransactions()
        } else {
            router.push("/dashboard/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router])

    const fetchTransactions = async () => {
        setLoading(true)
        try {
            // Use selected dates or default to last 30 days
            let dateString = ""
            if (startDate) {
                dateString = `start_date=${startDate}`
                if (endDate) {
                    dateString += `&end_date=${endDate}`
                }
            } else {
                // Default to last 30 days
                const defaultStartDate = new Date()
                defaultStartDate.setDate(defaultStartDate.getDate() - 30)
                dateString = `start_date=${defaultStartDate.toISOString().split('T')[0]}`
            }
            
            const response = await fetch(`/api/dashboard/transactions?${dateString}`)
            const data = await response.json()
            
            if (data.success && data.transactions) {
                setTransactions(data.transactions)
                if (data.transactions.length > 0) {
                    toast.success(`${data.transactions.length} successful transactions loaded`)
                } else {
                    toast.info("No transactions found for selected date range")
                }
            } else {
                setTransactions([])
                toast.error(data.message || "Failed to load transactions")
            }
        } catch (error) {
            console.error("Error fetching transactions:", error)
            toast.error("Failed to load transactions")
            setTransactions([])
        } finally {
            setLoading(false)
        }
    }

    const handleFilter = () => {
        fetchTransactions()
    }

    const clearFilter = async () => {
        // Reset to default dates (last 30 days)
        const defaultStartDate = new Date()
        defaultStartDate.setDate(defaultStartDate.getDate() - 30)
        const defaultDateString = defaultStartDate.toISOString().split('T')[0]
        
        setStartDate(defaultDateString)
        setEndDate("")
        
        // Fetch with default dates
        setLoading(true)
        try {
            const response = await fetch(`/api/dashboard/transactions?start_date=${defaultDateString}`)
            const data = await response.json()
            
            if (data.success && data.transactions) {
                setTransactions(data.transactions)
                toast.success("Filter cleared")
            }
        } catch (error) {
            console.error("Error:", error)
            toast.error("Failed to clear filter")
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem("dashboard_auth")
        sessionStorage.removeItem("dashboard_user")
        toast.success("Logged out successfully")
        router.push("/dashboard/login")
    }

    // Calculate totals
    const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0)
    const totalOriginal = transactions.reduce((sum, t) => sum + t.originalAmount, 0)
    const totalFees = transactions.reduce((sum, t) => sum + t.platformFee, 0)

    if (!authenticated) {
        return null
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header */}
            <div className="bg-slate-800/50 border-b border-slate-700/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                            <p className="text-sm text-slate-400">Logged in as: <span className="text-accent font-medium">{user}</span></p>
                        </div>
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="border-slate-700 text-red-600 hover:bg-slate-700 hover:border-slate-600 transition-all duration-200"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Total Transactions</p>
                                <p className="text-3xl font-bold text-white">{transactions.length}</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Total Revenue</p>
                                <p className="text-3xl font-bold text-white">${totalRevenue.toFixed(2)}</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <DollarSign className="h-6 w-6 text-blue-400" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Platform Fees (15%)</p>
                                <p className="text-3xl font-bold text-white">${totalFees.toFixed(2)}</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-amber-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date Filter Section */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    Start Date
                                </label>
                                <Input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="bg-slate-900/50 border-slate-700 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <Calendar className="h-4 w-4 color-white" />
                                    <span className="text-white">End Date</span>
                                </label>
                                <Input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="bg-slate-900/50 border-slate-700 text-white"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                onClick={handleFilter}
                                disabled={loading}
                                className="bg-white text-black hover:bg-gray-100 font-bold px-6 border-2 border-white"
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                            <Button
                                onClick={clearFilter}
                                disabled={loading}
                                variant="outline"
                                className="border-slate-700 text-red-600 hover:bg-slate-700"
                            >
                                <X className="h-4 w-4 mr-2" />
                                Clear
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Transactions Table */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Successful Transactions</h2>
                        <Button
                            onClick={fetchTransactions}
                            disabled={loading}
                            className="bg-white text-black hover:bg-gray-100 font-bold px-6 border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                            {loading ? "Refreshing..." : "Refresh"}
                        </Button>
                    </div>

                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="h-8 w-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-slate-400">Loading transactions...</p>
                        </div>
                    ) : transactions.length === 0 ? (
                        <div className="p-12 text-center">
                            <CheckCircle2 className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                            <p className="text-slate-400">No successful transactions yet</p>
                            <p className="text-sm text-slate-500 mt-2">Transactions will appear here once payments are completed</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-900/50 border-b border-slate-700/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Transaction ID</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Original Amount</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Platform Fee (15%)</th>
                                        <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Total Amount</th>
                                        <th className="px-6 py-4 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {transactions.map((transaction, index) => (
                                        <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                                                {new Date(transaction.date).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-300">
                                                {transaction.orderId}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-300">
                                                {transaction.transactionId}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 text-right">
                                                ${transaction.originalAmount.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-400 text-right font-medium">
                                                ${transaction.platformFee.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-right font-bold">
                                                ${transaction.amount.toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                                                    {transaction.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Summary Footer */}
                {transactions.length > 0 && (
                    <div className="mt-6 bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Total Original Amount</p>
                                <p className="text-2xl font-bold text-white">${totalOriginal.toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Total Platform Fees</p>
                                <p className="text-2xl font-bold text-amber-400">${totalFees.toFixed(2)}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Grand Total</p>
                                <p className="text-2xl font-bold text-emerald-400">${totalRevenue.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
