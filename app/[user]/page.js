"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Share, Plus, Heart } from "lucide-react";
import Header from "@/components/dashboard/header";
import { useForm } from "react-hook-form";
import { useUserInfoContext } from "@/context/userinfoContext";
import { useRouter } from "next/navigation";

const User = ({params}) => {
  const router = useRouter();
  //checks if user is loggedin or not
  const { userInfo } = useUserInfoContext();
  const isLoggedIn = Object.keys(userInfo).length > 0;

  const userParam = params.user;

  //state to check if the page visitor is creator
  const [isCreator, setIsCreator] = useState();

  //makes an api call to check if the page with entered parameter(username) exists in database
  const isPageExists = async (user) => {
    try {
      const url = `/api/users/exists/${user}`;
      const res = await fetch(url);
      const jsonRes = await res.json();
      return jsonRes.exists;
    } catch(error) {
      console.log(error)
    }
  }

  useEffect( () => {
  //checks if the visitor is creator of the page or not
  if (!isLoggedIn || userParam != userInfo.username) {
    setIsCreator(false);
  } else setIsCreator(true);

  const checkPageExists = async () => {
    const pageExists = await isPageExists(userParam);
    if (!pageExists) {
      console.log('shit');
      router.replace('/notFound');
    }
  }

  checkPageExists();
  return;
  })
  

  //state to store tea amount to donate
  const [tea, setTea] = useState(1);
  const [donationAmount, setDonationAmount] = useState(5 * tea);
  //states to highlight selected tea amount while donating
  const [teaAmount1, setTeaAmount1] = useState(true);
  const [teaAmount2, setTeaAmount2] = useState(false);
  const [teaAmount3, setTeaAmount3] = useState(false);

  //function that handle tea value highlights
  const teaValueHighlight = (teaValue) => {
    if(teaValue === 1) {
      setTeaAmount1(true);
      setTeaAmount2(false);
      setTeaAmount3(false);
    } else if (teaValue === 3) {
      setTeaAmount1(false);
      setTeaAmount2(true);
      setTeaAmount3(false);
    } else if (teaValue === 5) {
      setTeaAmount1(false);
      setTeaAmount2(false);
      setTeaAmount3(true);
    } else {
      setTeaAmount1(false);
      setTeaAmount2(false);
      setTeaAmount3(false);
    }
  }

   //handling the custom tea count input
   const handleChangeTeaCount = (e) => {
    const teaValue = e.target.value;
  
    if (teaValue === '') {
      setTea(1); 
      setDonationAmount(5);
    } else {
      const parsedTeaValue = parseInt(teaValue, 10); 
      setTea(parsedTeaValue); 
      setDonationAmount(5 * parsedTeaValue); 
      teaValueHighlight(parsedTeaValue);
    }
  };
  
  
  //handling selection of amount of tea
  const handleTeaSelection = (teaValue) => {
    console.log(teaValue);
    teaValueHighlight(teaValue);
    setDonationAmount(5 * teaValue);
  }

  //react hook form
  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <header className="fixed top-0 w-full">
        <nav className="px-7 py-4 flex justify-between bg-[#f2f2f2] shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="/assets/pfp.jpg"
              alt="profile picture"
              width={50}
              className="rounded-lg"
            />
            <h1 className="font-semibold text-2xl">Lomash</h1>
          </div>

          <div className="capitalize flex items-center gap-5 justify-center absolute left-[45%] top-8 font-semibold">
            <Link href={"#"}>home</Link>
            <Link href={"#"}>posts</Link>
          </div>

          <div className="flex items-center gap-5 capitalize">
            <button className="border-2 border-gray-400 py-2 px-3 rounded-full">
              <Share />
            </button>
            <button className="border-2 border-gray-400 py-2 px-4 rounded-full">
              Edit&nbsp;page
            </button>
            <button className="flex items-center bg-elementColor text-white px-4 py-2 rounded-full">
              <Plus />
              Create
            </button>
            <Header style={"w-[105px] py-[0px] bg-[#f2f2f2] "} />
          </div>
        </nav>
      </header>

      <main className="flex items-start m-20 justify-center gap-5 mt-[10rem]">
        <div className="bg-[#f2f2f2] rounded-2xl w-[35%] py-3 px-10 flex flex-col gap-1">
          <h2 className="capitalize font-semibold text-lg mt-5">
            About Lomash
          </h2>
          <p>
            I'm a passionate Full-Stack MERN Developer who loves creating web
            applications using the latest trendy technologies. I enjoy turning
            ideas into user-friendly and efficient solutions that stand out in
            today's fast-paced tech world.
          </p>
          <hr className="my-5" />

          <div>
            <h3 className="font-semibold text-lg">Recent Supporters</h3>
            <div className="bg-[#145eff21] rounded-lg px-10 py-16 my-5 flex flex-col items-center text-[#145eff]">
              <Heart />
              <div>Be the first one to support Lomash.</div>
            </div>
          </div>
        </div>

        <div className="bg-[#f2f2f2] rounded-2xl w-[40%] py-6 pb-10 px-10 flex flex-col gap-1 justify-center sticky">
          <h2 className="text-lg font-semibold capitalize">about lomash</h2>
          <div className="flex items-center justify-center gap-5 my-5 bg-[#0438f21c] py-5  rounded-xl border-[1px] border-elementColor w-full">
            <img src="/assets/donationTea.png" alt="tea" width={45} />
            <span>X</span>
            <div className="flex items-center gap-7 font-bold">
            <div
  className={`w-14 h-14 border-2 border-elementColor p-5 rounded-full flex items-center justify-center cursor-pointer ${teaAmount1 ? 'bg-elementColor text-white' : ''}`}
  onClick={() => handleTeaSelection(1)}
>
  1
</div>
<div
  className={`w-14 h-14 border-2 border-elementColor p-5 rounded-full flex items-center justify-center cursor-pointer ${teaAmount2 ? 'bg-elementColor text-white' : ''}`}
  onClick={() => handleTeaSelection(3)}
>
  3
</div>
<div
  className={`w-14 h-14 border-2 border-elementColor p-5 rounded-full flex items-center justify-center cursor-pointer ${teaAmount3 ? 'bg-elementColor text-white' : ''}`}
  onClick={() => handleTeaSelection(5)}
>
  5
</div>

              <div className="w-14 h-14 border-2 border-gray-400 rounded-2xl flex items-center justify-center overflow-hidden">
              <input type="number"
              placeholder="10"
              onChange={handleChangeTeaCount}
              className={`relative bg-transparent cursor-pointer w-full left-4 focus:outline-none placeholder:text-gray-600 focus:placeholder:text-transparent`}
              />
              </div>
            </div>{" "}
          </div>

          <form className="w-full flex flex-col gap-5">
            <input type="text" placeholder="Name or @yoursocial"
            className="text-lg py-4 px-5 w-full rounded-xl bg-gray-300 placeholder:text-gray-500 font-semibold transition-all duration-200 focus:outline-2 focus:outline-elementColor focus:bg-[#f2f2f2]"
            {...register("nameInput", {required: true})} />
            <textarea placeholder="Say something nice..."
            className="text-lg py-4 px-5 w-full rounded-xl bg-gray-300 placeholder:text-gray-500 font-semibold transition-all duration-200 focus:outline-2 focus:outline-elementColor focus:bg-[#f2f2f2]"
            {...register("messageInput", {required: true})}></textarea>
            <input type="submit"
            value={`Support $${donationAmount}`}
            className="bg-elementColor w-full rounded-full py-3 text-white text-lg font-bold cursor-pointer" />
          </form>

        </div>
      </main>
    </div>
  );
};

export default User;
