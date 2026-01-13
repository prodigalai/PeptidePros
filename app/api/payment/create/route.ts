import { NextResponse } from 'next/server';
import { payAgencyService } from '@/lib/pay-agency-service';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Call the PayAgency service
        const result = await payAgencyService.createPayment(body);

        if (result.success) {
            return NextResponse.json({
                success: true,
                payment_url: result.payment_url,
                transaction_id: result.transaction_id
            });
        } else {
            return NextResponse.json({
                success: false,
                message: result.message
            }, { status: 400 });
        }
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
