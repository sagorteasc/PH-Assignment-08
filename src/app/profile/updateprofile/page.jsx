"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateProfile = () => {

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.updateUser({
            name: userData.name,
            image: userData.photo,
        })

        if (data) {
            toast.success("Profile update successful");
            router.push("/profile");
        }

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="max-w-400 mx-auto w-11/12">
            <Card className="w-fit h-full p-8 flex justify-center items-center my-16 mx-auto">
                <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-gray-800 font-bold text-2xl">Update Your Profile</h1>
                    </div>
                    <TextField
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Update your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="photo"
                    >
                        <Label>Photo URL</Label>
                        <Input placeholder="Update your photo URL" />
                    </TextField>
                    <div className="flex flex-col gap-2">
                        <Button type="submit" variant="outline" className={"bg-gray-700 text-white hover:bg-accent w-full"}>
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default UpdateProfile;