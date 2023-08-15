'use client'

function Contact() {

  const handleSubmit = () => {

  }

  return (
    <div className="w-full bg-black text-white flex flex-col items-center mt-20 mb-28">
      <h1 className="sm:text-2xl mb-7 text-lg"> Questions? Leave us a Message</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col px-20 md:w-4/6">
        <label htmlFor="" className="flex flex-col mb-4">
          Email: 
          <input type="text" className="bg-gray-700 h-10 mt-4 w-full rounded-md focus:outline-none p-2"/>
        </label>
        <label htmlFor="" className="flex flex-col w-full mb-4">
          Name: 
          <input type="text" className="bg-gray-700 h-10 mt-4 w-full rounded-md focus:outline-none p-2"/>
        </label>
        <label htmlFor="" className="flex flex-col w-full mb-4">
          Message: 
          <textarea type="text" className="bg-gray-700 h-32 mt-4 w-full rounded-md focus:outline-none p-2"/>
        </label>
        <button type="submit" className="px-32 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md border text-center border-neutral-50/20 mt-4">Submit</button>
      </form>
    </div>
  )
}
export default Contact