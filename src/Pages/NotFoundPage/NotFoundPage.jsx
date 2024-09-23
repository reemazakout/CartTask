import pagenotfound from "../../assets/pagenotfound.jpg";
export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <img
            src={pagenotfound}
            alt=""
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="pb-5 flex flex-col items-center align-center ">
          <div className="text-4xl font-bold text-blue-600   pb-5">
            {" "}
            Page Not Found !
          </div>
        </div>
      </div>
    </>
  );
}
