import React from "react";

const Mobile = () => {
  const Swift =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTQ3LjI3ODMgMTguMzE5M0M0Ny4yNzggMTcuNDkwNCA0Ny4xOTQ2IDE2LjY2MzcgNDcuMDI5MyAxNS44NTE2QzQ2Ljg2MzkgMTUuMDIwMSA0Ni41ODI4IDE0LjIxNiA0Ni4xOTQxIDEzLjQ2MjdDNDUuNzg4IDEyLjczMyA0NS4yODMyIDEyLjA2MjcgNDQuNjk0IDExLjQ3MDhDNDQuMDg2MyAxMC44NzYzIDQzLjM4MDUgMTAuMzkxMSA0Mi42MDc2IDEwLjAzNjlDNDEuODQ0OSA5LjY1MjI5IDQxLjAyOTEgOS4zODM1NSA0MC4xODcyIDkuMjM5NTJDMzkuMzUyIDkuMDc4NzkgMzguNDM0OSA5LjA3ODc5IDM3LjU5OTcgOUgxNi45OTc4QzE2LjM1NTEgOS4wMTA0NiAxNS43MTM5IDkuMDY0MTYgMTUuMDc4NSA5LjE2MDczQzE0LjQ0NzkgOS4yMzQ5NyAxMy44MzA2IDkuMzk2MTggMTMuMjQ0MiA5LjYzOTc3QzEzLjA3NzIgOS43MTg1NiAxMi44MjgyIDkuODAwNSAxMi42NjEyIDkuODc5MjlDMTIuMTA2NCAxMC4xNzY3IDExLjU3OTEgMTAuNTIyNiAxMS4wODU0IDEwLjkxM0MxMC45MTg0IDExLjA3MzcgMTAuNzUxMyAxMS4xNTI1IDEwLjU4NDMgMTEuMzEwMUM5Ljk3MDA4IDExLjg3OTggOS40NjIxMSAxMi41NTQzIDkuMDg0MTUgMTMuMzAxOUM4LjY3MTM5IDE0LjA0NDcgOC4zODg5MiAxNC44NTI3IDguMjQ4OTggMTUuNjkwOEM4LjEyNDc4IDE2LjUwODcgOC4wNDE2OCAxNy4zMzIzIDggMTguMTU4NVYzNy4xOTFDOC4wMDAyNiAzOC4wMTk4IDguMDgzNjcgMzguODQ2NSA4LjI0ODk4IDM5LjY1ODdDOC40MTQzNiA0MC40OTAxIDguNjk1NDkgNDEuMjk0MiA5LjA4NDE1IDQyLjA0NzZDOS40OTAzMiA0Mi43NzczIDkuOTk1MTIgNDMuNDQ3NSAxMC41ODQzIDQ0LjAzOTRDMTEuMTkyIDQ0LjYzNCAxMS44OTc4IDQ1LjExOTEgMTIuNjcwNyA0NS40NzM0QzEzLjQzMzQgNDUuODU4IDE0LjI0OTEgNDYuMTI2NyAxNS4wOTExIDQ2LjI3MDdDMTUuOTI2MyA0Ni40MzE0IDE2Ljg0MzQgNDYuNDMxNCAxNy42Nzg1IDQ2LjUxMDJIMzcuNjAyOUMzOC40NzA5IDQ2LjUwOTYgMzkuMzM3IDQ2LjQyOTQgNDAuMTkwNCA0Ni4yNzA3QzQxLjAzMjMgNDYuMTI2NyA0MS44NDgxIDQ1Ljg1OCA0Mi42MTA4IDQ1LjQ3MzRDNDMuMzY3MSA0NS4wOTA2IDQ0LjA2ODggNDQuNjA4NCA0NC42OTcxIDQ0LjAzOTRDNDUuMzExNCA0My40Njk3IDQ1LjgxOTMgNDIuNzk1MiA0Ni4xOTczIDQyLjA0NzZDNDYuNjEgNDEuMzA0OCA0Ni44OTI1IDQwLjQ5NjggNDcuMDMyNSAzOS42NTg3QzQ3LjE1NjcgMzguODQwOCA0Ny4yMzk4IDM4LjAxNzIgNDcuMjgxNCAzNy4xOTFWMTguMzE5M0g0Ny4yNzgzWiIgZmlsbD0iI0YwNTEzOCIvPgo8cGF0aCBkPSJNMzQuMjUyOSAzNy45OTc5QzMwLjc1MTUgMzkuOTI5OCAyNS45MzkgNDAuMTI4NCAyMS4wOTUgMzguMTQ2QzE3LjMxODIgMzYuNjEzNiAxNC4wODkgMzMuOTgxNyAxMS44MjYyIDMwLjU5MTZDMTIuODc3OCAzMS4zOTY2IDE0LjAyNjcgMzIuMDY1OCAxNS4yNDU2IDMyLjU4MzVDMjAuMjQ3MiAzNC44MjExIDI1LjI0NTYgMzQuNjY2NyAyOC43NjYgMzIuNTgzNUMyMy43NTQ5IDI4LjkwODcgMTkuNTAwMyAyNC4xMzA5IDE2LjMyOTggMjAuMjI5MkMxNS43MDQxIDE5LjU2OTggMTUuMTQ1NyAxOC44NDk4IDE0LjY2MjYgMTguMDc5OEMxOC40OTQ5IDIxLjQyMzcgMjQuNTkwMSAyNS42NDM2IDI2Ljc1ODQgMjYuODM4MUMyMy42NjI1IDIzLjY2NiAyMC44MTc1IDIwLjI1ODMgMTguMjQ5MSAxNi42NDU5QzIyLjUxODYgMjAuNzk0OSAyNy4yMTY3IDI0LjQ3ODcgMzIuMjY0MiAyNy42MzU1QzMyLjQ4OCAyNy43NTUyIDMyLjY2MTMgMjcuODU2MSAzMi44IDI3Ljk1MDZDMzIuOTQ4IDI3LjU4OTQgMzMuMDc1MyAyNy4yMjAxIDMzLjE4MTQgMjYuODQ0NEMzNC4zNTA2IDIyLjc4MiAzMy4wMTQzIDE4LjE2NDkgMzAuMDk1OSAxNC4zNDJDMzYuODUzIDE4LjI0MDYgNDAuODcxMiAyNS41NjQ5IDM5LjE4ODMgMzEuNjk3OUMzOS4xNDQyIDMxLjg2NDkgMzkuMDk2OSAzMi4wMTMgMzkuMDQ2NSAzMi4xODYzTDM5LjEwNjMgMzIuMjU1N0M0Mi40NDM5IDM2LjIzNjEgNDEuNTI2OCA0MC40NDk4IDQxLjEwNzYgMzkuNjYxOUMzOS4yOTU0IDM2LjI2NDUgMzUuOTQ1MyAzNy4zMTQgMzQuMjUyOSAzNy45OTc5WiIgZmlsbD0iI0ZFRkVGRSIvPgo8L3N2Zz4K";
  const Apple =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTIxLjAwMDMgMTYuMzMzNEMxNC4wMDAzIDE2LjMzMzQgMTEuNjY3IDIzLjMzMzQgMTEuNjY3IDI5LjE2NjdDMTEuNjY3IDM2LjE2NjcgMTYuMzMzNyA0Ni42NjY3IDIxLjAwMDMgNDYuNjY2N0MyMy41MzkgNDYuNTU5NCAyNC45MTggNDUuNSAyOC4wMDAzIDQ1LjVDMzEuMDYxNyA0NS41IDMxLjUwMDMgNDYuNjY2NyAzNS4wMDAzIDQ2LjY2NjdDMzguNTAwMyA0Ni42NjY3IDQ0LjMzMzcgMzkuNjY2NyA0NC4zMzM3IDM1QzQ0LjI2ODMgMzQuOTc2NyAzOC41NjU3IDM0LjA1OTcgMzguNTAwMyAyOEMzOC40NTYgMjIuOTM2NyA0NC4xMzc3IDIxLjEwNzQgNDQuMzMzNyAyMUM0MS45NDY3IDE3LjUxODcgMzcuNDQ4IDE2LjQxOTcgMzYuMTY3IDE2LjMzMzRDMzIuODIzMyAxNi4wNzQ0IDI5LjU2MzcgMTguNjY2NyAyOC4wMDAzIDE4LjY2NjdDMjYuNDEzNyAxOC42NjY3IDIzLjU2NyAxNi4zMzM0IDIxLjAwMDMgMTYuMzMzNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjggOS4zMzM0MUMyOS4yMzc3IDkuMzMzNDEgMzAuNDI0NyA4Ljg0MTc1IDMxLjI5OTggNy45NjY1OEMzMi4xNzUgNy4wOTE0MSAzMi42NjY3IDUuOTA0NDMgMzIuNjY2NyA0LjY2Njc1QzMxLjQyOSA0LjY2Njc1IDMwLjI0MiA1LjE1ODQxIDI5LjM2NjggNi4wMzM1OEMyOC40OTE3IDYuOTA4NzUgMjggOC4wOTU3NCAyOCA5LjMzMzQxIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
  const Team =
    "https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png";
  return (
    <div className="w-full">
      <div className="max-w-[1280px] w-full  flex flex-col px-5">
        <h1 className="text-7xl text-blue-700 font-medium py-10">
          Development of mobile <br /> applications
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="mt-10 flex gap-5">
              <div className="p-4 bg-blue-100 w-[30%] rounded-lg">
                <img src={Apple} alt="img" />
                <p className="pl-2"> iOS</p>
              </div>
              <div className="p-4 bg-blue-100 w-[30%] rounded-lg">
                <img src={Apple} alt="img" />
                <p className="pl-2">iOS</p>
              </div>
              <div className="p-4 bg-blue-100 w-[30%] rounded-lg">
                <img src={Apple} alt="img" />
                <p className="pl-2">iOS</p>
              </div>
            </div>
            <p className="text-2xl font-medium mt-7">Technologies</p>
            <div className="flex gap-10 mt-5">
              <div>
                <img src={Swift} alt="img" className="w-[56px] h-[56px]" />
                <p className="text-center text-lg font-medium ">Swift</p>
              </div>
              <div>
                <img src={Swift} alt="img" />
                <p className="text-center text-lg font-medium ">Kotlin</p>
              </div>
              <div>
                <img src={Swift} alt="img" />
                <p className="text-center text-lg font-medium ">Flutter</p>
              </div>
            </div>
          </div>
          <div className="max-w-[47%] ">
            <img src={Team} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
