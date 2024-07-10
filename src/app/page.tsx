import Gudang from "../Gudang.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Raja Ongkir
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <Link
              href="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-gray-100 h-screen flex flex-col justify-center">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-12">
              RajaOngkir
              <br />
              <span className="text-indigo-600">For Your Shipping Needs</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              assumenda ipsam adipisci quidem laudantium, totam fugiat sit
              distinctio amet atque, explicabo quas eius reprehenderit incidunt!
            </p>
          </div>
          <div className="lg:w-1/2 lg:mt-0">
            <div className="mb-10 lg:mb-0">
              <Image width={1000} height={1000} src={Gudang} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
