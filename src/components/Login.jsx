// src/pages/Login.jsx
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-md">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Log in to your account</h2>
          <p className="text-sm text-muted-foreground text-center">Welcome back! Please enter your details.</p>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="border rounded" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <Button className="w-full">Sign in</Button>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <img src="/images/google.png" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </Button>

          <p className="text-center text-sm">
            Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
