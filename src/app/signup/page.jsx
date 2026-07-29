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
import { FaUser, FaStore } from "react-icons/fa";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

 
    await authClient.signUp.email({
      ...user,
      plan: "free",

    });

    redirect('/')
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className=" rounded bg-surface p-6 w-2xl mx-auto border-none">
      <Surface className="w-full">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend className="text-4xl text-orange-800">SignUp</Fieldset.Legend>
            <Description>Create your account</Description>
            <Fieldset.Group>
              <TextField isRequired name="name">
                <Label>Name</Label>
                <Input placeholder="My Name" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField name="image" type="url">
                <Label>Image URL</Label>
                <Input placeholder="Image URL" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="myname@example.com" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Password" variant="secondary" />
                <FieldError />
              </TextField>

              <Select
  isRequired
  name="role"
  placeholder="Choose your role"
  className="w-full border-none"
>
  <Label className="mb-2 text-sm font-medium text-gray-950">
    Sign Up As
  </Label>

  <Select.Trigger className="h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-primary transition-all duration-300">
    <Select.Value />
    <Select.Indicator />
  </Select.Trigger>

  <Select.Popover className="rounded-xl border border-white/10 bg-gray-700 shadow-2xl">
    <ListBox className="p-2">
      <ListBox.Item
        id="buyer"
        textValue="buyer"
        className="rounded-lg transition-all hover:bg-primary/20 data-[selected]:bg-primary/25"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/15 p-2">
            <FaUser className="text-primary" />
          </div>

          <div>
            <p className="font-medium">User</p>
            <p className="text-xs text-default-500">
              Purchase products
            </p>
          </div>
        </div>

        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="seller"
        textValue="seller"
        className="rounded-lg transition-all hover:bg-success/20 data-[selected]:bg-success/25"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-success/15 p-2">
            <FaStore className="text-success" />
          </div>

          <div>
            <p className="font-medium">Trainer</p>
            <p className="text-xs text-default-500">
              Sell your products
            </p>
          </div>
        </div>

        <ListBox.ItemIndicator />
      </ListBox.Item>
    </ListBox>
  </Select.Popover>
</Select>
            
            
            
            </Fieldset.Group>

            <Button type="submit" className={"w-full btn glitch-btn"}>
              Signup
            </Button>
          </Fieldset>
        </Form>
      </Surface>
    </div>
    </div>
  );
}
