export default function RegisterPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="w-5xl flex flex-col items-center gap-5 p-5">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-1/2 p-4 border border-black rounded-md text-base"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-1/2 p-4 border border-black rounded-md text-base"
        />
        <a
          href="/login"
          className="w-1/2 p-4 bg-black text-white font-bold rounded-md text-base cursor-pointer text-center"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}