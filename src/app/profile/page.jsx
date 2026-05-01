"use client";
import { signOut, useSession } from '@/lib/auth-client';
import { Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfile = () => {

    const { data } = useSession();
    const user = data?.user;
    console.log(user);

    return (
        <div className='max-w-200 w-4/5 md:w-2/5 lg:w-1/4 mx-auto my-16'>
            <Card className="w-full h-full rounded-xl p-0 drop-shadow-xl shadow-lg">
                <div className=' flex justify-center p-5'>
                    <div className="rounded-full">
                        <Image
                            className="mx-auto rounded-full"
                            src={user?.image}
                            alt="User Image"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>

                <div className='p-5'>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>Name</p>
                        <strong className='text-gray-800'>{user?.name}</strong>
                    </div>

                    <Separator className='my-4' />

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>Email</p>
                        <strong className='text-gray-800'>{user?.email}</strong>
                    </div>

                    <Separator className='my-4' />

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>Member since</p>
                        <strong className='text-gray-800'>{new Date(user?.createdAt).toLocaleDateString()}</strong>
                    </div>

                    <Separator className='my-4' />

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>Updated Profile</p>
                        <strong className='text-gray-800'>{new Date(user?.updatedAt).toLocaleDateString()}</strong>
                    </div>

                    <Card.Footer className="mt-6 gap-2 justify-end">
                        <Link href={"/profile/updateprofile"}><Button>Update Info</Button></Link>
                        <Button onClick={() => signOut()}>Log Out</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default MyProfile;