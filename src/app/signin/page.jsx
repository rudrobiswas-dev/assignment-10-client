"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto">
      <div className="rounded bg-surface p-6 w-2xl border-none">
      <Surface className="w-full">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-4xl text-orange-800">SignIn</Fieldset.Legend>
            <Description>Sign in account</Description>
            <Fieldset.Group>
              <TextField isRequired name="email" type="email" className={"bg-transparent"}>
                <Label>Email</Label>
                <Input placeholder="mygmail@example.com" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Password" variant="secondary" />
                <FieldError />
              </TextField>
            </Fieldset.Group>

            <Button type="submit" className={"w-full glitch-btn rounded-none"}>
              Signin
            </Button>
          </Fieldset>
        </Form>
      </Surface>
    </div>
    </div>
  );
}
