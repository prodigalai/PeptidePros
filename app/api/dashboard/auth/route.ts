import { NextResponse } from 'next/server';

// Dashboard credentials - Store in environment variables for production
// For now, keeping here but should move to .env.local
const DASHBOARD_USERS = {
    admin: process.env.DASHBOARD_ADMIN_PASSWORD || "admin123",
    manager: process.env.DASHBOARD_MANAGER_PASSWORD || "manager123",
    dev: process.env.DASHBOARD_DEV_PASSWORD || "dev123"
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json({
                success: false,
                message: "Username and password are required"
            }, { status: 400 });
        }

        // Check if username exists and password matches
        const validPassword = DASHBOARD_USERS[username as keyof typeof DASHBOARD_USERS];
        
        if (validPassword && validPassword === password) {
            return NextResponse.json({
                success: true,
                message: "Authentication successful",
                user: username
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Invalid username or password"
            }, { status: 401 });
        }
    } catch (error: any) {
        console.error('Dashboard Auth Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
