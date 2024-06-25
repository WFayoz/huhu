import React from "react";

const It = () => {
  const Skitch =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xMjc4IDIzLjI5NDlMMjcuOTU4NiA0Ni45NTc3TDguMDczMjQgMjMuMjk0OUgxNi4xMjc4WiIgZmlsbD0iI0VBNkMwMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM5Ljc5MjEgMjMuMjk0OUwyNy45NjEzIDQ2Ljk1NzdMNDcuODQ2NyAyMy4yOTQ5SDM5Ljc5MjFaIiBmaWxsPSIjRUE2QzAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTI3IDIzLjI5NDlIMzkuNzg4NUwyNy45NTc3IDQ2Ljk1NzdMMTYuMTI3IDIzLjI5NDlaIiBmaWxsPSIjRkRBRDAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuOTU3NyAxMC4xODAyTDE2Ljc0OTYgMTEuMzkwOEwxNi4xMjcgMjMuMjk0MUwyNy45NTc3IDEwLjE4MDJaIiBmaWxsPSIjRkREMjMxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuOTU4MyAxMC4xODAyTDM5LjE2NjQgMTEuMzkwOEwzOS43ODkxIDIzLjI5NDFMMjcuOTU4MyAxMC4xODAyWiIgZmlsbD0iI0ZERDIzMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3Ljg0NjcgMjMuMjk0OEwzOS4xNjk0IDExLjM5MTZMMzkuNzkyMSAyMy4yOTQ4SDQ3Ljg0NjdaIiBmaWxsPSIjRkRBRDAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4wNzMyNCAyMy4yOTQ4TDE2Ljc1MDUgMTEuMzkxNkwxNi4xMjc4IDIzLjI5NDhIOC4wNzMyNFoiIGZpbGw9IiNGREFEMDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNy45NTc3IDEwLjE4MDJMMTYuMTI3IDIzLjI5NDFIMzkuNzg4NUwyNy45NTc3IDEwLjE4MDJaIiBmaWxsPSIjRkVFRUI3Ii8+Cjwvc3ZnPgo=";
  const Figma =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yMiA0Ny4wMDAzQzI1LjMxMiA0Ny4wMDAzIDI4IDQ0LjIzNzcgMjggNDAuODMzN1YzNC42NjdIMjJDMTguNjg4IDM0LjY2NyAxNiAzNy40Mjk3IDE2IDQwLjgzMzdDMTYgNDQuMjM3NyAxOC42ODggNDcuMDAwMyAyMiA0Ny4wMDAzWiIgZmlsbD0iIzBBQ0Y4MyIvPgo8cGF0aCBkPSJNMTYgMjguNTAwMkMxNiAyNS4wOTYyIDE4LjY4OCAyMi4zMzM1IDIyIDIyLjMzMzVIMjhWMzQuNjY2OEgyMkMxOC42ODggMzQuNjY2OCAxNiAzMS45MDQyIDE2IDI4LjUwMDJaIiBmaWxsPSIjQTI1OUZGIi8+CjxwYXRoIGQ9Ik0xNiAxNi4xNjY3QzE2IDEyLjc2MjcgMTguNjg4IDEwIDIyIDEwSDI4VjIyLjMzMzNIMjJDMTguNjg4IDIyLjMzMzMgMTYgMTkuNTcwNyAxNiAxNi4xNjY3WiIgZmlsbD0iI0YyNEUxRSIvPgo8cGF0aCBkPSJNMjggMTBIMzRDMzcuMzEyIDEwIDQwIDEyLjc2MjcgNDAgMTYuMTY2N0M0MCAxOS41NzA3IDM3LjMxMiAyMi4zMzMzIDM0IDIyLjMzMzNIMjhWMTBaIiBmaWxsPSIjRkY3MjYyIi8+CjxwYXRoIGQ9Ik00MCAyOC41MDAyQzQwIDMxLjkwNDIgMzcuMzEyIDM0LjY2NjggMzQgMzQuNjY2OEMzMC42ODggMzQuNjY2OCAyOCAzMS45MDQyIDI4IDI4LjUwMDJDMjggMjUuMDk2MiAzMC42ODggMjIuMzMzNSAzNCAyMi4zMzM1QzM3LjMxMiAyMi4zMzM1IDQwIDI1LjA5NjIgNDAgMjguNTAwMloiIGZpbGw9IiMxQUJDRkUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIzNyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEwKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
  const Atomic =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjkzMiAyMS40MDEyQzIxLjYyNjkgMjAuMDk1NiAxOS45NjM4IDE5LjIwNjQgMTguMTUzMyAxOC44NDYxQzE2LjM0MjcgMTguNDg1NyAxNC40NjU5IDE4LjY3MDQgMTIuNzYwMyAxOS4zNzY3QzExLjA1NDcgMjAuMDgzIDkuNTk2ODggMjEuMjc5MyA4LjU3MTE5IDIyLjgxNDJDNy41NDU1MSAyNC4zNDkxIDYuOTk4MDUgMjYuMTUzOCA2Ljk5ODA1IDI3Ljk5OThDNi45OTgwNSAyOS44NDU5IDcuNTQ1NTEgMzEuNjUwNSA4LjU3MTE5IDMzLjE4NTVDOS41OTY4OCAzNC43MjA0IDExLjA1NDcgMzUuOTE2NyAxMi43NjAzIDM2LjYyM0MxNC40NjU5IDM3LjMyOTMgMTYuMzQyNyAzNy41MTQgMTguMTUzMyAzNy4xNTM2QzE5Ljk2MzggMzYuNzkzMyAyMS42MjY5IDM1LjkwNDEgMjIuOTMyIDM0LjU5ODVDMjUuMDAzMSAzMi43MjAzIDI2LjcxOTcgMzAuNDg1MyAyOCAyNy45OTk4QzI5LjI4MDQgMjUuNTE0NCAzMC45OTcgMjMuMjc5MyAzMy4wNjggMjEuNDAxMkMzNC4zNzMyIDIwLjA5NTYgMzYuMDM2MyAxOS4yMDY0IDM3Ljg0NjggMTguODQ2MUMzOS42NTc0IDE4LjQ4NTcgNDEuNTM0MiAxOC42NzA0IDQzLjIzOTggMTkuMzc2N0M0NC45NDU0IDIwLjA4MyA0Ni40MDMyIDIxLjI3OTMgNDcuNDI4OSAyMi44MTQyQzQ4LjQ1NDYgMjQuMzQ5MSA0OS4wMDIgMjYuMTUzOCA0OS4wMDIgMjcuOTk5OEM0OS4wMDIgMjkuODQ1OSA0OC40NTQ2IDMxLjY1MDUgNDcuNDI4OSAzMy4xODU1QzQ2LjQwMzIgMzQuNzIwNCA0NC45NDU0IDM1LjkxNjcgNDMuMjM5OCAzNi42MjNDNDEuNTM0MiAzNy4zMjkzIDM5LjY1NzQgMzcuNTE0IDM3Ljg0NjggMzcuMTUzNkMzNi4wMzYzIDM2Ljc5MzMgMzQuMzczMiAzNS45MDQxIDMzLjA2OCAzNC41OTg1QzMwLjk5NyAzMi43MjAzIDI5LjI4MDQgMzAuNDg1MyAyOCAyNy45OTk4QzI2LjcxOTcgMjUuNTE0NCAyNS4wMDMxIDIzLjI3OTMgMjIuOTMyIDIxLjQwMTIiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
  const UI =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjMzMzMgMTguNjY2NUw3IDI3Ljk5OThMMTYuMzMzMyAzNy4zMzMyIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM5LjY2NyAxOC42NjY1TDQ5LjAwMDMgMjcuOTk5OEwzOS42NjcgMzcuMzMzMiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMi42NjYzIDkuMzMzNUwyMy4zMzMgNDYuNjY2OCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
  const CRM =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0LjMzMyA5LjMzMzVIMTEuNjY2M0MxMC4zNzc3IDkuMzMzNSA5LjMzMzAxIDEwLjM3ODIgOS4zMzMwMSAxMS42NjY4VjQ0LjMzMzVDOS4zMzMwMSA0NS42MjIyIDEwLjM3NzcgNDYuNjY2OCAxMS42NjYzIDQ2LjY2NjhINDQuMzMzQzQ1LjYyMTcgNDYuNjY2OCA0Ni42NjYzIDQ1LjYyMjIgNDYuNjY2MyA0NC4zMzM1VjExLjY2NjhDNDYuNjY2MyAxMC4zNzgyIDQ1LjYyMTcgOS4zMzM1IDQ0LjMzMyA5LjMzMzVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzMzMDEgMTguNjY2NUg0Ni42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjY2NyA5LjMzMzVWMTguNjY2OCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=";
  const Image =
    "https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg";
  return (
    <div className="w-full mt-16">
      <div className="max-w-[1280px] mx-auto px-5">
        <h1 className="text-7xl text-blue-700 font-medium py-10">
          IT consulting
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <div className=" grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={UI} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Backend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Atomic} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Backend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Frontend</p>
              </div>
            </div>
          </div>
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={Image} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default It;
