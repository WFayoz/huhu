import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

const Good = () => {
  const Load =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjMzMzcgNy40NjY0NkMxOS42ODM2IDguMzEyNjIgMTYuMzI2NSAxMC4xMTk5IDEzLjYxMDQgMTIuNzAwOUMxMC44OTQzIDE1LjI4MTkgOC45MTgxOSAxOC41NDI2IDcuODg3MDUgMjIuMTQ0N0M2Ljg1NTkyIDI1Ljc0NjkgNi44MDczMSAyOS41NTkzIDcuNzQ2MjYgMzMuMTg2NUM4LjY4NTIxIDM2LjgxMzggMTAuNTc3NSA0MC4xMjM4IDEzLjIyNjkgNDIuNzczMkMxNS44NzYzIDQ1LjQyMjYgMTkuMTg2MyA0Ny4zMTQ5IDIyLjgxMzYgNDguMjUzOUMyNi40NDA4IDQ5LjE5MjggMzAuMjUzMyA0OS4xNDQyIDMzLjg1NTQgNDguMTEzMUMzNy40NTc1IDQ3LjA4MTkgNDAuNzE4MiA0NS4xMDU4IDQzLjI5OTIgNDIuMzg5N0M0NS44ODAyIDM5LjY3MzcgNDcuNjg3NSAzNi4zMTY1IDQ4LjUzMzYgMzIuNjY2NUM0OC41MzM2IDMyLjA0NzYgNDguMjg3OCAzMS40NTQxIDQ3Ljg1MDIgMzEuMDE2NUM0Ny40MTI2IDMwLjU3OSA0Ni44MTkyIDMwLjMzMzEgNDYuMjAwMyAzMC4zMzMxSDMwLjMzMzdDMjkuMDk2IDMwLjMzMzEgMjcuOTA5IDI5Ljg0MTUgMjcuMDMzOCAyOC45NjYzQzI2LjE1ODcgMjguMDkxMSAyNS42NjcgMjYuOTA0MSAyNS42NjcgMjUuNjY2NVY5LjMzMzEzQzI1LjYzOCA5LjA1NjY5IDI1LjU1NDQgOC43ODg3NSAyNS40MjExIDguNTQ0ODZDMjUuMjg3OCA4LjMwMDk2IDI1LjEwNzMgOC4wODU5NiAyNC44OTAzIDcuOTEyMzJDMjQuNjczMiA3LjczODY4IDI0LjQyMzkgNy42MDk4NiAyNC4xNTY3IDcuNTMzMzNDMjMuODg5NSA3LjQ1Njc5IDIzLjYwOTcgNy40MzQwNiAyMy4zMzM3IDcuNDY2NDZaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1IDguMTY2NUMzNy45NjI3IDkuMjA5NyA0MC42NTM2IDEwLjkwNDIgNDIuODc0NiAxMy4xMjUyQzQ1LjA5NTYgMTUuMzQ2MiA0Ni43OTAxIDE4LjAzNzIgNDcuODMzMyAyMC45OTk4SDM3LjMzMzNDMzYuNzE0NSAyMC45OTk4IDM2LjEyMSAyMC43NTQgMzUuNjgzNCAyMC4zMTY0QzM1LjI0NTggMTkuODc4OCAzNSAxOS4yODUzIDM1IDE4LjY2NjVWOC4xNjY1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
  const Auto =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2LjY2NjcgOS4zMzMyNUg5LjMzMzMzQzguMDQ0NjcgOS4zMzMyNSA3IDEwLjM3NzkgNyAxMS42NjY2VjM0Ljk5OTlDNyAzNi4yODg2IDguMDQ0NjcgMzcuMzMzMyA5LjMzMzMzIDM3LjMzMzNINDYuNjY2N0M0Ny45NTUzIDM3LjMzMzMgNDkgMzYuMjg4NiA0OSAzNC45OTk5VjExLjY2NjZDNDkgMTAuMzc3OSA0Ny45NTUzIDkuMzMzMjUgNDYuNjY2NyA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNi4zMzMgNDYuNjY2N0gzOS42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDM3LjMzMzNWNDYuNjY2NiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNSAzNy4zMzMzVjQ2LjY2NjYiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
  const CRM =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDQ5QzM5LjU5OCA0OSA0OSAzOS41OTggNDkgMjhDNDkgMTYuNDAyIDM5LjU5OCA3IDI4IDdDMTYuNDAyIDcgNyAxNi40MDIgNyAyOEM3IDM5LjU5OCAxNi40MDIgNDkgMjggNDlaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNDAwMzkgMjFINDcuNjAwNCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQwMDM5IDM1SDQ3LjYwMDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuODMzMiA3QzIyLjkwMjMgMTMuMjk5MSAyMC44MTg0IDIwLjU3NSAyMC44MTg0IDI4QzIwLjgxODQgMzUuNDI1IDIyLjkwMjMgNDIuNzAwOSAyNi44MzMyIDQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5LjE2NyA3QzMzLjA5NzkgMTMuMjk5MSAzNS4xODE4IDIwLjU3NSAzNS4xODE4IDI4QzM1LjE4MTggMzUuNDI1IDMzLjA5NzkgNDIuNzAwOSAyOS4xNjcgNDkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
  const Team =
    "https://udevs.io/static/goodzone_app-deb2ced5c71cc717322a0f87cfe94652.png";
  return (
    <div className="max-w-[1280px] mx-auto mt-20">
      <h1 className="text-7xl text-red-500  font-semibold text-center ">
        GoodZone
      </h1>
      <div className="flex justify-between items-center">
        <div className="max-w-[48%] py-11 mt-6 relative ">
          <img src={Team} alt="img" className=" relative" />
        </div>
        <div className="max-w-[47%]">
          <div className="inline-flex border rounded-lg items-center my-7 py-1 px-4 gap-2 bg-red-300">
            <SlEnvolopeLetter className="text-red-700" />
            <p className="text-red-700">Notification</p>
          </div>

          <p className="text-2xl opacity-85 ">
            Our experienced professionals will help you optimize your
            infrastructure
          </p>
          <p className="text-3xl mt-5 font-bold">What we did?</p>
          <div className=" grid grid-cols-3 gap-5 mt-10">
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Website</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Auto} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Admin panel</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Auto testing</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Auto} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Crossplatform</p>
            </div>
            <div className="p-4 bg-blue-200 border rounded-lg">
              <img src={Load} alt="img" className=" w-[56px] h-[56px]" />
              <p className="pl-2 text-lg font-medium">Load test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
