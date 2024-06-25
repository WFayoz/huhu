import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Services = () => {
  const ava =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkxOTkgMTAuMjA4M0M3LjI5MTk5IDEzLjQzIDkuOTAzNjYgMTYuMDQxNyAxMy4xMjUzIDE2LjA0MTdDMTYuMzQ3IDE2LjA0MTcgMTguOTU4NyAxMy40MyAxOC45NTg3IDEwLjIwODNDMTguOTU4NyA2Ljk4NjY3IDE2LjM0NyA0LjM3NSAxMy4xMjUzIDQuMzc1QzkuOTAzNjYgNC4zNzUgNy4yOTE5OSA2Ljk4NjY3IDcuMjkxOTkgMTAuMjA4M1pNMjEuODc1MSAxNi4wNDE3QzIxLjg3NTEgMTguNDU3OSAyMy44MzM4IDIwLjQxNjcgMjYuMjUwMSAyMC40MTY3QzI4LjY2NjMgMjAuNDE2NyAzMC42MjUxIDE4LjQ1NzkgMzAuNjI1MSAxNi4wNDE3QzMwLjYyNTEgMTMuNjI1NSAyOC42NjYzIDExLjY2NjcgMjYuMjUwMSAxMS42NjY3QzIzLjgzMzggMTEuNjY2NyAyMS44NzUxIDEzLjYyNTUgMjEuODc1MSAxNi4wNDE3WiIgZmlsbD0iIzFCNUJGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjEwMDcgMTguOTU4M0M2LjIxNTI5IDE4Ljk1ODMgMC41NjYyMSAyMi40OTcgMC4wMDA5NTAzNzMgMjkuNDU3MkMtMC4wMjk4NDAxIDI5LjgzNjMgMC42OTUyMDUgMzAuNjI1IDEuMDYwOTQgMzAuNjI1SDI1LjE1MTRDMjYuMjQ3IDMwLjYyNSAyNi4yNjQgMjkuNzQzNCAyNi4yNDcgMjkuNDU4M0MyNS44MTk2IDIyLjMwMjYgMjAuMDgzIDE4Ljk1ODMgMTMuMTAwNyAxOC45NTgzWk0yOC41ODI5IDMwLjYyNUMyOC41ODI5IDI3LjM0MjQgMjcuNDk4MyAyNC4zMTMxIDI1LjY2OCAyMS44NzU5QzMwLjYzNTggMjEuOTMwMiAzNC42OTIyIDI0LjQ0MTggMzQuOTk3NSAyOS43NUMzNS4wMDk4IDI5Ljk2MzggMzQuOTk3NSAzMC42MjUgMzQuMjA2MiAzMC42MjVIMjguNTgyOVoiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg==";
  return (
    <div className="w-full items-center justify-center py-24">
      <div className="max-w-[1280px] px-5 mx-auto">
        <h1 className="flex items-center justify-start text-blue-700 font-bold text-[64px]">
          Our Services
        </h1>
        <div className="grid grid-cols-3  pt-20 gap-8">
          <div className="bg-[#f4f4f4] flex flex-col rounded-[8px] w-[360px] h-[209px] p-8">
            <div>
              <img src={ava} alt="" />
            </div>
            <h1 className="flex pt-8 text-black text-[20px]">Team</h1>
          </div>
          <div className="bg-[#f4f4f4] flex flex-col rounded-[8px] w-[360px] h-[209px] p-8">
            <IoIosPhonePortrait className="w-[35px] h-[35px]  text-blue-700" />
            <h1 className="flex pt-8 text-black text-[20px]">
              Development of mobile applications
            </h1>
          </div>
          <div className="bg-[#f4f4f4] flex flex-col rounded-[8px] w-[360px] h-[209px] p-8">
            <FaCodeBranch className=" text-blue-700 w-[35px] h-[35px]" />
            <h1 className="flex pt-8 text-black text-[20px]">
              Development and implementation ERP systems
            </h1>
          </div>
          <div className="bg-[#f4f4f4] flex flex-col rounded-[8px] w-[360px] h-[209px] p-8">
            <LuBookCopy className="w-[35px] h-[35px]  text-blue-700" />
            <h1 className="flex pt-8 text-black text-[20px]">
              User interface, User experience design
            </h1>
          </div>
          <div className="bg-[#f4f4f4] flex flex-col rounded-[8px] w-[360px] h-[209px] p-8">
            <CiSettings className="w-[35px] h-[35px] text-blue-700" />
            <h1 className="flex pt-8 text-black text-[20px]">
              Optimization IT consulting infrastructure
            </h1>
          </div>
          <div className="bg-[#f4f4f4] flex flex-col rounded-[8px] w-[360px] h-[209px] p-8">
            <HiOutlineDesktopComputer className="w-[35px] h-[35px] text-blue-700" />
            <h1 className="flex pt-8 text-black text-[20px]">IT consulting</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
