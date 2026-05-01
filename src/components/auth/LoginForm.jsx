"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, InputGroup, Label, Separator, TextField } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginForm = () => {

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/",
        });

        console.log({ data, error });

        if (error) {
            toast.error("Something Went Wrong");
        }

        if (data) {
            toast.success("Welcome Back");
        }
    };

    const handleContinueWithGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    }

    return (
        <div className="max-w-400 mx-auto w-11/12">
            <Card className="w-fit p-8 flex justify-center items-center my-16 mx-auto">
                <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-gray-800 font-bold text-2xl">Welcome Back</h1>
                        <p className="text-xs text-gray-500">Please Login to Continue</p>
                    </div>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full max-w-70"
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>
                    <div className="flex flex-col gap-2">
                        <Button type="submit" variant="outline" className={"bg-gray-700 text-white hover:bg-accent w-full"}>
                            Login
                        </Button>

                        <div className="flex gap-2 justify-center items-center">
                            <Separator className="my-4 w-2/5" />
                            <p>Or</p>
                            <Separator className="my-4 w-2/5" />
                        </div>

                        <Button
                            onClick={handleContinueWithGoogle}
                            variant="outline"
                            className={"w-full text-[#4079ee] border border-[#4079ee] hover:text-white hover:bg-accent"}
                        >
                            <BsGoogle /> Continue with Google
                        </Button>

                        <p className="text-gray-500 text-center mt-3">
                            Do not have an account? <Link href={"/register"}><span className="text-accent">Sign Up</span></Link>
                        </p>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginForm;