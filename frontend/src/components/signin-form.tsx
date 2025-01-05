import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../types/signin-zod";
import { signinType } from "../types/signin-zod";
import { Link } from "react-router-dom";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinType>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (data: signinType) => {
    console.log(data);
  };

  return (
    <div className="px-3 flex items-center justify-center flex-col">
      <div className="w-[60%]">
        <div>
          <h1 className="text-4xl font-semibold text-center tracking-wide uppercase	">
            Welcome back
          </h1>
          <p className="text-[#636364] text-lg mt-2 text-center">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h1 className="text-lg text-[#181818] font-semibold">Email</h1>
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Enter your Email"
                className="w-full  border border-[#636364] mt-2 px-2 py-3 rounded-lg "
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-[#EA454C]">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h1 className="text-lg text-[#181818] font-semibold">Password</h1>
            </div>
            <div>
              <input
                {...register("password")}
                placeholder="Enter your Password"
                className="w-full  border border-[#636364] mt-2 px-2 py-3 rounded-lg "
              />
            </div>
            <div>
              {errors.password && (
                <p className="text-[#EA454C]">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex itemss-center gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <h1 className="text-[#181818]">Remember me</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[#181818]">Forgot password</h1>
            </div>
          </div>
          <div className="w-full mt-8">
            <button
              className="text-[#FFFFFF] bg-[#EA454C] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg"
              type="submit"
            >
              Sign in
            </button>
          </div>
          <div className="mt-5 border border-[#636364] bg-[#F8F8F8] text-center w-full py-3 px-3 flex items-center justify-center gap-2 rounded-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ffc107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path
                  fill="#ff3d00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                />
                <path
                  fill="#4caf50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                />
                <path
                  fill="#1976d2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#000000]">
                Sign in with Google
              </h1>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[#595959] text-center font-semibold">
              Don’t have an account?
              <Link to="/page/signup">
                <span className="text-[#EA454C]"> Sign up fo free!</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
