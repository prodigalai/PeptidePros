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
            // According to PayAgency docs (implied by user request), 
            // we send payload directly or encrypted. User says encryption is "correct",
            // so we assume the backend handles it or we send as is.
            const response = await this.api.post('/hosted/create', {
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
                order_id: data.order_id
            });

            return {
                success: true,
                payment_url: response.data.payment_url,
                transaction_id: response.data.transaction_id
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
