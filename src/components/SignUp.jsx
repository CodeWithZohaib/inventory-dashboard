import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignUp() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - can be customized with a background image or color */}
      <div className="hidden w-1/2 bg-gray-50 lg:block">
        {/* Left side content - intentionally left blank as per requirements */}
      </div>

      {/* Right side - form */}
      <div className="flex w-full items-center justify-center p-4 lg:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8 px-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">Start your 30-day free trial.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input id="password" type="password" placeholder="Create a password" />
              <p className="text-xs text-muted-foreground">Must be at least 8 characters.</p>
            </div>

            {/* <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company Name
              </label>
              <Input id="company" placeholder="Enter your company" />
            </div> */}

            {/* <div className="space-y-2">
              <label htmlFor="roleId" className="text-sm font-medium">
                Role ID
              </label>
              <Input id="roleId" placeholder="Enter your role ID" />
            </div> */}

            <Button className="w-full">Get Started</Button>

            <Button variant="outline" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                <path d="M15.5 8.5L14 12l1.5 3.5-3.5 1.5L8.5 15.5 7 12l1.5-3.5L12 7l3.5 1.5z" />
              </svg>
              Sign up with Google
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="text-primary hover:underline">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}