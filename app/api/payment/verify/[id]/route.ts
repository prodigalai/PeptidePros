import { NextResponse } from 'next/server';
import { payAgencyService } from '@/lib/pay-agency-service';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const transactionId = params.id;

        // Call the PayAgency service to verify
        const result = await payAgencyService.getTransactionStatus(transactionId);

        if (result.success) {
            return NextResponse.json(result.data);
        } else {
            return NextResponse.json({
                success: false,
                message: result.message
            }, { status: 400 });
        }
    } catch (error: any) {
        console.error('API Verification Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
