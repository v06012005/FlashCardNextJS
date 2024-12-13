import Image from "next/image";
import Link from "next/link";

export function Title() {
  return <h1 className="font-SomaticRounded text-4xl font-bold mb-2">Flash Cards</h1>;
}

export function ProgressBar() {
  return <div className="rounded-lg w-full border-2 border-[#dfdfdf] h-10 p-1 mb-2">
    <div className="h-full w-full relative">
      <div className="w-1/3 h-full absolute rounded bg-[#dfdfdf]"></div>
      <div className="absolute right-0 px-2 h-full">5 of 20</div>
      <div className="absolute inset-x-1/2">25%</div>
    </div>
  </div>
}

export function Content() {
  return <div className="rounded bg-[#f5f5f5] w-full h-full flex">
    <p className="font-SomaticRounded w-full text-center my-auto font-semibold text-2xl">What is the difference between var, let and const?</p>
  </div>
}

export function FlashCardNav() {
  return <div className="mt-1 rounded flex w-full h-full bg-[#f5f5f5]">
    <button className=" h-full w-1/4">Previous</button>

    <button className="w-full h-full font-bold">Hide Answer</button>

    <button className=" h-full w-1/4">Next</button>
  </div>
}

export function FlashCardContainer() {
  return <div className="p-1 rounded-lg w-full border-2 border-[#dfdfdf] h-[32rem]">
    <div className="h-[28rem]">
      <Content></Content>
    </div>
    <div className="h-[3rem]">
      <FlashCardNav></FlashCardNav>
    </div>
  </div>
}

export default function Home() {
  return <div className="container w-1/2 h-screen mx-auto my-auto p-4">
    <Title></Title>
    <ProgressBar></ProgressBar>
    <FlashCardContainer></FlashCardContainer>
  </div>;
}
