"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Lock, LogOut } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
  })

  const [address, setAddress] = useState({
    street: "123 Research Lane",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
  })

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddress((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPassword((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-12">My Account</h1>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="bg-muted/30 border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-medium text-foreground">Profile Information</h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <Input
                        type="text"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleProfileChange}
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <Input
                        type="text"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleProfileChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      placeholder="Email Address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      placeholder="Phone Number"
                    />
                  </div>

                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6">Save Changes</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="address" className="space-y-6">
              <div className="bg-muted/30 border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-medium text-foreground">Shipping Address</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Street Address</label>
                    <Input
                      type="text"
                      name="street"
                      value={address.street}
                      onChange={handleAddressChange}
                      placeholder="Street Address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">City</label>
                      <Input
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleAddressChange}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">State</label>
                      <Input
                        type="text"
                        name="state"
                        value={address.state}
                        onChange={handleAddressChange}
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
                      <Input
                        type="text"
                        name="zip"
                        value={address.zip}
                        onChange={handleAddressChange}
                        placeholder="ZIP Code"
                      />
                    </div>
                  </div>

                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6">Save Address</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="password" className="space-y-6">
              <div className="bg-muted/30 border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-medium text-foreground">Change Password</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                    <Input
                      type="password"
                      name="current"
                      value={password.current}
                      onChange={handlePasswordChange}
                      placeholder="Current Password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                    <Input
                      type="password"
                      name="new"
                      value={password.new}
                      onChange={handlePasswordChange}
                      placeholder="New Password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
                    <Input
                      type="password"
                      name="confirm"
                      value={password.confirm}
                      onChange={handlePasswordChange}
                      placeholder="Confirm New Password"
                    />
                  </div>

                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6">
                    Update Password
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 border-t border-border pt-8">
            <Button variant="destructive" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
