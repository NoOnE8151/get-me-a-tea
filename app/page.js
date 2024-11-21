import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import FeaturingCard from "@/components/FeaturingCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex">
          <div className="hidden md:block w-[40vw] h-[91vh]">
            <div className="grid grid-cols-2 gap-8 mt-[7rem] justify-items-center pl-[10rem]">
              <Card
                pfp={"/assets/pfp.jpg"}
                text={"No OnE is providing Web Developement service"}
                supportersCount={"6,999"}
                style={"rotate-[-10deg] bottom-6 right-10"}
              />
              <Card
                pfp={"/assets/pfp.jpg"}
                text={"No OnE is providing Web Developement service"}
                supportersCount={"6,999"}
                style={"rotate-[10deg] top-12"}
              />
              <Card
                pfp={"/assets/pfp.jpg"}
                text={"No OnE is providing Web Developement service"}
                supportersCount={"6,999"}
                style={"rotate-[5deg]"}
              />
              <Card
                pfp={"/assets/pfp.jpg"}
                text={"No OnE is providing Web Developement service"}
                supportersCount={"6,999"}
                style={"top-[5rem] rotate-[-8deg]"}
              />
            </div>
          </div>

          <div className="w-[100vw] md:w-[60vw] h-[50vh] md:h-[91vh] flex flex-col gap-7 items-center justify-center pt-10 md:pt-0 md:pb-[4rem] md:pl-[8rem] px-8 md:px-auto">
            <div className="text-center flex flex-col gap-2 tracking-widest">
              <h2 className="text-3xl md:text-5xl font-bold md:leading-tight">
                A Cup of Tea <span className="inline md:hidden">for</span>{" "}
                <br /> <span className="hidden md:inline">for</span> Your
                Creative Soul
              </h2>
              <span className="font-semibold text-secondaryTextColor text-lg md:text-2xl">
                Accept donation for your creativity.
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <a href="./signup" className="md:text-2xl text-xl font-bold bg-elementColor text-white rounded-full py-4 w-auto px-5 my-3 mt-3 md:mt-5 text-center">
                Start my page
              </a>
              <span className="text-secondaryTextColor md:text-lg text-sm font-semibold text-center">
                Get started quickly and for free—just a minute!
              </span>
            </div>
          </div>
        </section>

        <section className="md:py-[6rem] py-10 px-5 md:px-[15rem] w-[100vw] flex flex-col md:gap-20 gap-10">
          <SectionHeader header={"Support"} />
          <FeaturingCard
            title={`Give Your Supporters a Simple Way
 to Show Appreciation.`}
            description={`Get Me Tea makes it effortless and enjoyable to support your favorite creators. With just a few taps, your fans can contribute (buy you a tea) and leave a heartfelt message.`}
            banner={`/assets/tea card.png`}
            bannerAlt={`tea card`}
            bannerStyle={`w-[50em]`}
          />

          <SectionHeader header={"Membership"} />
          <FeaturingCard title={`Start a membership for your most loyal supporters.`}
          description={`Earn a recurring income by providing monthly or yearly subscriptions.Share exclusive content or give your supporters a simple way to show their appreciation for your work consistently.`}
          banner={`/assets/membership card for medium screens.png`}
          bannerStyle={`hidden md:block`}
          bannerAlt={`Membership`}
          smallBanner={`/assets/membership card for small screens.png`}
          bannerStyleMobile={`block md:hidden`}
          />

          <SectionHeader header={"Shop"} />
          <FeaturingCard title={`Introducing Market, the creative way to sell.`}
          description={`The things you want to sell probably don't belong in a typical online store. Market is designed specifically for creators. Whether it’s a personalized video message, custom artwork, or a digital product, Market is for you.`}
          banner={`/assets/shop card.png`}
          bannerAlt={`shop`}
          />

          <SectionHeader header={`Posts, audio & email`} />
          <FeaturingCard title={`Showcase your best work`}
          description={`Get Me Tea makes it simple to publish both free and exclusive content. Experiment with different formats like audio, and offer members-only access to encourage more sign-ups.`}
          banner={`/assets/posts card.png`}
          bannerAlt={`posts audio & email`} />

        </section>

        <footer className="flex flex-col items-center gap-14">
          <h5 className="flex flex-col text-center"><span className="text-3xl md:text-7xl font-bold">Crafted for creators,</span> <span className="text-3xl md:text-6xl text-[#8B9094] font-bold">not businesses</span></h5>

            <ul className="text-md md:text-xl font-bold text-secondaryTextColor md:grid grid-cols-2 md:gap-24 md:mx-20 md:px-20 px-2 flex flex-col gap-5">
              <li className="flex items-center"><img src="assets/tickbox.png" alt="tick box" className="mx-5 w-[3rem] md:w-[4rem]" /><div>We don't call them "customers" or transactions. They are your <b className="text-black">supporters</b></div></li>
              <li className="flex items-center"> <img src="assets/tickbox.png" alt="tick box" className="mx-5 w-[3rem] md:w-[4rem]" /><div>You have <b className="text-black">100% ownership</b> of your supporters. We never email them, and you can export the list any time you like.</div></li>
              <li className="flex items-center"> <img src="assets/tickbox.png" alt="tick box" className="mx-5 w-[3rem] md:w-[4rem]" /><div>You get to <b className="text-black">talk to a human</b> for help, or if you just like some advice to hit the ground running.</div></li>
              <li className="flex items-center"> <img src="assets/tickbox.png" alt="tick box" className="mx-5 w-[3rem] md:w-[4rem]" /><div>You get paid instantly to your bank account.&nbsp;<b className="text-black">No more 30-day delays.</b></div></li>
            </ul>

            <span className="font-semibold text-lg md:text-xl m-5">All rights reserved by <a href="https://www.instagram.com/codeconquests_/" target="_blank" className="underline font-bold">codeConquests_</a></span>
        </footer>
      </main>
    </>
  );
}
