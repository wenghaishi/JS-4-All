"use client";

import UserDetailsCard from "@/app/components/userPage/UserDetailsCard";
import UserEditModal from "@/app/components/userPage/UserEditModal";
import UserStats from "@/app/components/userPage/UserStats";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function UserPage() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/${session.user._id}`,
    fetcher
  );

  return (
    <div className="bg-black pt-24 pb-10  h-screen flex flex-col sm:flex-row gap-10 px-10 text-white">
      {showModal && <UserEditModal session={session} setShowModal={setShowModal} />}

      <UserDetailsCard session={session} setShowModal={setShowModal}/>

      <UserStats data={data}/>
    </div>
  );
}
export default UserPage;
