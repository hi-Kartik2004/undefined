"use client";
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const { status, data: session } = useSession();

    useEffect(() => {
        if (status !== 'authenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status !== 'authenticated') {
        // You might want to return a loading spinner or something while the session is being checked.
        return null;
    }

    return (
        <div>
            hello! you are successfully authenticated
            {/* Your content here */}
        </div>
    );
};

export default Page;
