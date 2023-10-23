"use client";
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const Profile = () => {
  const router = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      // User is authenticated, you can access session data here
      console.log(session?.user);
    } else if (status === 'loading') {
      // Session is still loading, you might want to show a loading spinner
    } else {
      // User is not authenticated, redirect to login page
      router.push('/login');
    }
  }, [status, session, router]);

  return (
    <div>
      {status === 'authenticated' && (
        <div className="center flex flex-col">
          <div>
            User profile Image :
            <Image src={session?.user?.image} width={200} height={180} />
          </div>

          <div>
            UserName: {session?.user?.name}
          </div>
          <div>
            Email: {session?.user?.email}
          </div>
        </div>
      )}

      {status === 'authenticated' && (
        <button
          className="p-3 m-5 bg-white text-red-500 rounded-md hover:bg-red-300 hover:text-white"
          onClick={() => signOut()}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Profile;
