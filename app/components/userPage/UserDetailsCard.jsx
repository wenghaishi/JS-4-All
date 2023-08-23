import Image from "next/image"

export default function UserDetailsCard({session, setShowModal}) {
  return (
    <div className="flex flex-col bg-gray-800 rounded-xl w-2/6 p-14 ">
    <div className="flex flex-row items-start bg-gray-800 ">
      <Image
        src={session.user.image}
        width={70}
        height={70}
        alt="user profile picture"
      />
      <div className="flex flex-col ml-6">
        <h1 className="text-white md:text-lg font-bold text-sm">
          {session.user.email}
        </h1>
        <h1 className="text-white md:text-lg font-bold text-sm">
          {session.user.name}
        </h1>
      </div>
    </div>
    <button
      className="bg-gray-700 mt-6 p-3 rounded-lg"
      onClick={() => setShowModal(true)}
    >
      Edit Profile
    </button>
  </div>
  )
}