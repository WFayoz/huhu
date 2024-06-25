import React from "react";

const Erp = () => {
  const CRM =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NyA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjYyMjYgOS4zMzMyNUgxNC44MzMxQzEwLjk5NjIgOS4zMzMyNSA3Ljg4NTc0IDEyLjQ2NzMgNy44ODU3NCAxNi4zMzMzVjM5LjY2NjZDNy44ODU3NCA0My41MzI2IDEwLjk5NjIgNDYuNjY2NiAxNC44MzMxIDQ2LjY2NjZINDIuNjIyNkM0Ni40NTk1IDQ2LjY2NjYgNDkuNTcgNDMuNTMyNiA0OS41NyAzOS42NjY2VjE2LjMzMzNDNDkuNTcgMTIuNDY3MyA0Ni40NTk1IDkuMzMzMjUgNDIuNjIyNiA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS43ODEgMjguMDAwMUMyNC4zMzg5IDI4LjAwMDEgMjYuNDEyNiAyNS45MTA3IDI2LjQxMjYgMjMuMzMzNEMyNi40MTI2IDIwLjc1NjEgMjQuMzM4OSAxOC42NjY3IDIxLjc4MSAxOC42NjY3QzE5LjIyMyAxOC42NjY3IDE3LjE0OTQgMjAuNzU2MSAxNy4xNDk0IDIzLjMzMzRDMTcuMTQ5NCAyNS45MTA3IDE5LjIyMyAyOC4wMDAxIDIxLjc4MSAyOC4wMDAxWiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNS42NzU4IDE4LjY2NjdINDAuMzA3NCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNS42NzU4IDI4SDQwLjMwNzQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuMTQ5NCAzNy4zMzMzSDQwLjMwNzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
  const Team =
    "https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png";
  const laptop =
    "https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png";
  return (
    <div className="w-full bg-blue-100 mt-16">
      <div className="max-w-[1280px] w-full mx-auto px-5">
        <h1 className="text-7xl text-blue-700 font-medium py-10">
          ERP systems
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={Team} alt="img" className=" relative" />
            <img src={laptop} alt="img" className=" absolute top-32" />
          </div>
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className=" grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">CRM</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">eLearning</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">E-Commerc</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">POS</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">CRM</p>
              </div>
              <div className="p-4 bg-blue-200 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erp;
