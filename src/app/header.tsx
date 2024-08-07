"use client";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated } from "convex/react";

export function Header() {
  return (
    <div className="border-b bg-gray-100">
      <div className="flex justify-between items-center py-4 container mx-auto">
        <span className="font-semibold">SendSwift</span>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
          <Unauthenticated>
            <SignInButton>
              <Button variant={"outline"}>Sign In</Button>
            </SignInButton>
          </Unauthenticated>
        </div>
      </div>
    </div>
  );
}
