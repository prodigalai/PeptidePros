import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('Payment Webhook Received:', body);

        // Here you would typically update the order status in your database
        // based on the transaction_id and status provided in the body.

        // PayAgency typically sends status, transaction_id, etc.
        const { status, transaction_id, order_id } = body;

        if (status === 'SUCCESS') {
            console.log(`Payment successful for Transaction ID: ${transaction_id}`);
        } else {
            console.log(`Payment ${status} for Transaction ID: ${transaction_id}`);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Webhook Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
