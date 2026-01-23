import axios from 'axios';
import https from 'https';
import dns from 'dns';

// PayAgency naming is confusing, but behavior is clear according to user:
// X-API-KEY: Test Secret Key (PA_TEST_...)
// X-API-SECRET: Test Secret Key (PA_TEST_...) - Same value as API Key in test mode

const PAYAGENCY_CONFIG = {
    API_KEY: process.env.PAYAGENCY_API_KEY,
    AUTH_SECRET: process.env.PAYAGENCY_AUTH_SECRET,
    BASE_URL: process.env.PAYAGENCY_BASE_URL || 'https://api.pay.agency',
    ENCRYPTION_KEY: process.env.PAYAGENCY_ENCRYPTION_KEY,
};

// Custom DNS lookup to fix potential DNS issues mentioned by user
const customDnsLookup = (hostname: string, options: any, callback: any) => {
    return dns.lookup(hostname, { family: 4 }, callback);
};

class PayAgencyService {
    private api: any;

    constructor() {
        this.api = axios.create({
            baseURL: PAYAGENCY_CONFIG.BASE_URL,
            headers: {
                'X-API-KEY': PAYAGENCY_CONFIG.API_KEY,
                'X-API-SECRET': PAYAGENCY_CONFIG.AUTH_SECRET,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            httpsAgent: new https.Agent({
                family: 4, // Force IPv4 to avoid DNS/Connection issues
                lookup: customDnsLookup
            })
        });
    }

    async createPayment(data: any) {
        try {
            // According to PayAgency docs, we send the payload to the creation endpoint.
            // We ensure card details and IP address are included if provided.
            const response = await this.api.post('/hosted/create', {
                ...data, // Pass all data including card info if present
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                phone_number: data.phone_number,
                amount: data.amount,
                currency: data.currency,
                address: data.address,
                country: data.country,
                city: data.city,
                state: data.state,
                zip: data.zip,
                redirect_url: data.redirect_url,
                webhook_url: data.webhook_url,
                order_id: data.order_id,
                ip_address: data.ip_address,
                // Include card details explicitly for 2D transactions
                card_number: data.card_number,
                card_expiry_month: data.card_expiry_month,
                card_expiry_year: data.card_expiry_year,
                card_cvv: data.card_cvv
            });

            const responseData = response.data;
            const success = responseData.success || responseData.status === "SUCCESS";
            const redirectUrl = responseData.redirect_url || responseData.payment_url || responseData.data?.redirect_url;

            return {
                success,
                status: responseData.status || (success ? "SUCCESS" : "FAILED"),
                redirect_url: redirectUrl,
                transaction_id: responseData.data?.transaction_id || responseData.transaction_id || responseData.data?.order_id,
                message: responseData.message || (success ? "Transaction processed successfully" : "Payment failed")
            };
        } catch (error: any) {
            console.error('PayAgency Error:', error.response?.data || error.message);
            return {
                success: false,
                message: error.response?.data?.message || 'Authentication Secret Key is missing or invalid'
            };
        }
    }

    async getTransactionStatus(transactionId: string) {
        try {
            const response = await this.api.get(`/hosted/verify/${transactionId}`);
            return {
                success: true,
                data: response.data
            };
        } catch (error: any) {
            console.error('PayAgency Verification Error:', error.response?.data || error.message);
            return {
                success: false,
                message: error.response?.data?.message || 'Transaction verification failed'
            };
        }
    }
}

export const payAgencyService = new PayAgencyService();
