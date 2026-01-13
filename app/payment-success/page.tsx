"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ArrowRight, Home, Info } from "lucide-react"

function PaymentStatusContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [status, setStatus] = useState<{
        transactionId: string | null;
        status: string | null;
        message: string | null;
        amount: string | null;
        currency: string | null;
        orderId: string | null;
    } | null>(null)

    useEffect(() => {
        const transactionId = searchParams.get('transaction_id')
        const paymentStatus = searchParams.get('status')
        const message = searchParams.get('message')
        const amount = searchParams.get('amount')
        const currency = searchParams.get('currency')
        const orderId = searchParams.get('order_id')

        setStatus({
            transactionId,
            status: paymentStatus?.toUpperCase() || null,
            message: message ? decodeURIComponent(message) : null,
            // Format amount from cents to dollars if it's a large integer
            amount: amount ? (parseFloat(amount) > 1000 ? (parseFloat(amount) / 100).toFixed(2) : amount) : null,
            currency,
            orderId
        })
    }, [searchParams])

    if (!status) return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin mb-4" />
            <p className="text-muted-foreground font-medium animate-pulse">Verifying Transaction...</p>
        </div>
    )

    const isSuccess = status.status === 'SUCCESS'

    return (
        <div className="max-w-2xl mx-auto py-12 px-4 text-center">
            <div className={`inline-flex items-center justify-center p-4 rounded-full mb-8 ${isSuccess ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                {isSuccess ? <CheckCircle2 className="h-16 w-16" /> : <XCircle className="h-16 w-16" />}
            </div>

            <h1 className="text-4xl font-serif font-light mb-4">
                {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
            </h1>

            <p className="text-muted-foreground mb-8 text-lg">
                {isSuccess
                    ? "Your order has been confirmed and our team is beginning the curation process for your personalized compounds."
                    : status.message || "There was an issue processing your transaction. Please try again or contact support."
                }
            </p>

            <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 mb-6 space-y-4 text-left">
                {status.orderId && (
                    <div className="flex justify-between items-center pb-4 border-b border-border/50">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Order Reference</span>
                        <span className="font-mono text-sm font-medium">{status.orderId}</span>
                    </div>
                )}
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Transaction ID</span>
                    <span className="font-mono text-sm font-medium">{status.transactionId || 'N/A'}</span>
                </div>
                {status.amount && (
                    <div className="flex justify-between items-center pt-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Amount Paid</span>
                        <span className="text-xl font-serif font-medium">{status.currency} {status.amount}</span>
                    </div>
                )}
            </div>

            {/* Help Section for Failed Authorization */}
            {!isSuccess && status.message?.includes('Authorization') && (
                <div className="mb-8 p-6 bg-accent/5 border border-accent/20 rounded-2xl text-left">
                    <div className="flex items-center gap-2 mb-3 text-accent transition-colors">
                        <Info className="h-4 w-4" />
                        <h3 className="text-sm font-bold uppercase tracking-widest">Test Transaction Tips</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>Use the correct test card: <code className="bg-accent/10 px-1 rounded text-accent">4111 1111 1111 1111</code></span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>Ensure the cardholder name matches the order details.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>Complete the 3D Secure (3DS) authentication if prompted.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>Check that the expiry date is set in the future (e.g., 12/2027).</span>
                        </li>
                    </ul>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isSuccess ? (
                    <>
                        <Button onClick={() => router.push('/orders')} className="h-14 rounded-2xl px-8 font-bold tracking-widest uppercase text-xs gap-2">
                            View Order Status <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" onClick={() => router.push('/')} className="h-14 rounded-2xl px-8 font-bold tracking-widest uppercase text-xs gap-2">
                            <Home className="h-4 w-4" /> Home
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => router.push('/checkout')} className="h-14 rounded-2xl px-8 font-bold tracking-widest uppercase text-xs gap-2">
                            Try Again
                        </Button>
                        <Button variant="ghost" onClick={() => router.push('/')} className="h-14 rounded-2xl px-8 font-bold tracking-widest uppercase text-xs">
                            Return Home
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}

export default function PaymentSuccessPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-32 pb-24">
                <Suspense fallback={
                    <div className="flex flex-col items-center justify-center min-h-[400px]">
                        <div className="h-12 w-12 rounded-full border-4 border-accent border-t-transparent animate-spin mb-4" />
                    </div>
                }>
                    <PaymentStatusContent />
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}
