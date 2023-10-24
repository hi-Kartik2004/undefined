"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const page = () => {

    const router = useRouter();
    const {status , data:session} = useSession();
    if(status!='authenticated'){
        router.push('/login')
    }
    console.log(status)

  return (
    <div>
      
      { status==='authenticated' &&
      <div className="center flex flex-col">
       hello! you are successfully authenticated
        <div>
            User profile Image :
           <Image src={session?.user?.image} width={200} height={180} />
        </div>

        <div>
            UserName : {session?.user?.name}
        </div>
        <div>
           Email : {session?.user?.email}
        </div>
      </div>

    <button className="p-3 m-5 bg-white text-red-500 rounded-md hover:bg-red-300 hover:text-white"  onClick={()=>signOut()}>
        Logout
    </button>
      }
    </div>
  )
}

export default page
