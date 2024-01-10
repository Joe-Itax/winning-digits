import amicoSvg from "../assets/amico.svg";

function Login() {
  return (
    <>
      <div className="bg-violet-950">
        <h1 className="text-3xl text-white text-center font-bold uppercase py-4">
          Winning Digits
        </h1>
      </div>
      <section className="bg-[#371577] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 flex justify-center items-start py-10 px-5 rounded-xl">
        <div className="">
          <img src={amicoSvg} alt="amico" className="w-full" />
        </div>
        <form className="">
          <h2 className="text-center">Se Connecter</h2>
          <div className="border relative rounded-lg border-gray-100">
            <span className="absolute bg-[#371577] top-2/4 left-3 -translate-y-1/2">
              Noms
            </span>
            <input
              type="text"
              className="outline-none bg-transparent h-full py-4 pl-3 pr-1"
              required
            />
          </div>
        </form>
      </section>
    </>
  );
}
export default Login;
