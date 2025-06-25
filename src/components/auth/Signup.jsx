"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target[0]?.value;
    const password = e.target[1]?.value;

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Unable to sign up. Please try again");
      return;
    }

        await supabase.auth.signOut();


    toast.success("Success. Please login now");
    router.push("/");
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Enter email password to sign up</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Signup;
