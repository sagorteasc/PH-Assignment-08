"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, InputGroup, Label, Separator, TextField } from "@heroui/react";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
        });

        if (error) {
            toast.error(error.message);
        }

        if (data) {
            await authClient.updateUser({
                image: userData.photo,
            });
            toast.success("Registration Successful");
            router.push("/login");
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
                        <h1 className="text-gray-800 font-bold text-2xl">Create New Account</h1>
                    </div>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="photo"
                    >
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter your photo URL" />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
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
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex flex-col gap-2">
                        <Button type="submit" variant="outline" className={"bg-gray-700 text-white hover:bg-accent w-full"}>
                            Create Account
                        </Button>

                        <div className="flex gap-2 justify-center items-center">
                            <Separator className="my-4 w-2/5" />
                            <p>Or</p>
                            <Separator className="my-4 w-2/5" />
                        </div>

                        <Button
                            onClick={handleContinueWithGoogle}
                            type="button"
                            variant="outline"
                            className={"w-full text-[#4079ee] border border-[#4079ee] hover:text-white hover:bg-accent"}
                        >
                            <BsGoogle /> Continue with Google
                        </Button>

                        <p className="text-gray-500 text-center mt-3">
                            Already have an account? <Link href={"/login"}><span className="text-accent">Login</span></Link>
                        </p>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default RegisterForm;