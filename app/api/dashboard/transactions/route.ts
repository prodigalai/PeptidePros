import { NextResponse } from 'next/server';

const BACKEND_URL = 'http://localhost:5000';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const cursor = searchParams.get('cursor') || '';
        const startDate = searchParams.get('start_date') || '';
        const endDate = searchParams.get('end_date') || '';

        // Build query string
        let queryString = 'only_success=true';
        if (startDate) {
            queryString += `&transaction_start_date=${startDate}`;
        }
        if (endDate) {
            queryString += `&transaction_end_date=${endDate}`;
        }
        if (cursor) {
            queryString += `&cursor=${cursor}`;
        }

        // Fetch transactions from backend
        const response = await fetch(`${BACKEND_URL}/api/payment/transactions?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Backend API error: ${response.status}`);
        }

        const backendData = await response.json();

        if (!backendData.success || !backendData.data) {
            return NextResponse.json({
                success: true,
                transactions: [],
                meta: {
                    totalCount: 0,
                    hasNextPage: false,
                    nextCursor: null
                }
            });
        }

        // Transform backend data to dashboard format
        // Calculate breakdown: original amount, 15% fee, total
        const transactions = backendData.data.map((tx: any) => {
            // Amount from backend is total (original + 15% fee)
            const totalAmount = parseFloat(tx.amount || tx.total_amount || 0);

            // Calculate original amount: total / 1.15
            const originalAmount = totalAmount / 1.15;

            // Calculate platform fee: 15% of original
            const platformFee = originalAmount * 0.15;

            return {
                transactionId: tx.transaction_id || tx.id || '',
                orderId: tx.order_id || '',
                amount: totalAmount, // Total amount paid
                originalAmount: originalAmount, // Original amount before fee
                platformFee: platformFee, // 15% platform fee
                date: tx.created_at || tx.date || tx.transaction_date || new Date().toISOString(),
                status: tx.status || 'SUCCESS',
                email: tx.email || '',
                name: tx.first_name && tx.last_name ? `${tx.first_name} ${tx.last_name}` : '',
                currency: tx.currency || 'USD'
            };
        });

        return NextResponse.json({
            success: true,
            transactions: transactions,
            meta: backendData.meta || {
                totalCount: transactions.length,
                hasNextPage: false,
                nextCursor: null
            }
        });
    } catch (error: any) {
        console.error('Dashboard API Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error',
            transactions: []
        }, { status: 500 });
    }
}
