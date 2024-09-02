import { useState } from "react";


import { addDoc } from "firebase/firestore"

import swal from 'sweetalert'
//  import { Appstate } from "../App";
import { TailSpin } from "react-loader-spinner";
import { restref } from "../firebase/Firebase";
//  import { useNavigate } from "react-router-dom";


const AddResturant = () => {
  //    const useAppState= useContext(Appstate);
  //    const navigate= useNavigate();
  const [form, setForm] = useState({
    name: "",
    image: "",
    address: "",
    offer: "",
    minTime: 0,
    maxTime: 0,
    rating: 0
  });

  const [loding, setLoding] = useState(false);

  const addfoodRest = async () => {
    setLoding(true);
    try {
      await addDoc(restref, form);
      swal({
        title: "Successfuly added",
        icon: 'success',
        buttons: false,
        timer: 3000

      });

      setForm({
        name: "",
        image: "",
        address: "",
        offer: "",
        minTime: 0,
        maxTime: 0,
        rating: 0
      })

    }
    catch (err) {
      console.log(err);
    }
    setLoding(false);

  }

  return (
    <div className="text-gray-600 body-font relative">
      <div className="max-w-[1200px] px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-black">Add Your Resturant</h1>
        </div>

        <div className="lg:w-[500px] md:w-[500px] mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"

                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500
              focus:bg-white focus:ring-2 focus:ring-indigo-200
               text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
                  required />
              </div>
            </div>


            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"

                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500
              focus:bg-white focus:ring-2 focus:ring-indigo-200
               text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
                  required />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="flex gap-1">
                <label className="leading-7 text-sm text-black">Min Time</label>
                <input
                  type="number"
                  id="minTime"
                  name="minTime"

                  value={form.minTime}
                  onChange={(e) => setForm({ ...form, minTime: e.target.value })}
                  className=" bg-gray-100  rounded border border-gray-300 focus:border-indigo-500
              focus:bg-white focus:ring-2 focus:ring-indigo-200
               text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
                  required />

                <label className="leading-7 text-sm text-black">Max Time</label>
                <input
                  type="number"
                  id="maxTime"
                  name="maxTime"

                  value={form.maxTime}
                  onChange={(e) => setForm({ ...form, maxTime: e.target.value })}
                  className=" bg-gray-100  rounded border border-gray-300 focus:border-indigo-500
              focus:bg-white focus:ring-2 focus:ring-indigo-200
               text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
                  required />
              </div>

            </div>



            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Offer</label>
                <input
                  type="text"
                  id="offer"
                  name="offer"

                  value={form.offer}
                  onChange={(e) => setForm({ ...form, offer: e.target.value })}
                  className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500
              focus:bg-white focus:ring-2 focus:ring-indigo-200
               text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
                  required />
              </div>
            </div>


            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Image Link</label>
                <input
                  type="text"
                  id="img"
                  name="img"

                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  required
                  className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none
               text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                />
              </div>
            </div>



            <div className="p-2 w-full">
              <button
                onClick={addfoodRest}
                className="flex mx-auto text-black bg-[#fc8019] border-0 py-2 px-8 focus:outline-none
          hover:bg-green-600 rounded text-lg">
                {loding ? <TailSpin height={20} color="white" /> : 'Submit'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddResturant