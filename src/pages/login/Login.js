import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Navbar from '../../components/Navbar'

const Login = () => {
  const [isChecked, setIsChecked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-login-bg bg-cover bg-no-repeat">
      <Navbar text="Sign up" href="/signup" />
      <div className="w-full flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/75 w-[450px] px-12 py-8 flex flex-col gap-4 shadow-lg rounded-md"
        >
          <h2 className="text-white text-3xl font-bold mb-4">Sign in</h2>
          <div className="w-full flex flex-col">
            <input
              type="email"
              {...register('email', { required: true })}
              className="p-2 bg-[#010000] text-white outline-none ring-1 ring-gray-700  focus:ring-inset focus:ring-red-800 rounded"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <input
              type="password"
              {...register('password', { required: true })}
              className="p-2  bg-[#010000] text-white outline-none ring-1 ring-gray-700 focus:ring-inset focus:ring-red-800 rounded"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="px-2 py-3 bg-red-600 text-white text-base font-semibold hover:bg-red-800 rounded"
          >
            Sign in
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                className="p-2 outline-none cursor-pointer w-4 h-4 border-2 border-gray-700 rounded"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="remember" className="text-[#737373] ml-1">
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-[#737373] hover:text-red-800"
            >
              Need help?
            </a>
          </div>
          <div className="mt-6">
            <h2 className="text-[#737373]">
              New to Netflix?{' '}
              <a href="/signup" className="text-white hover:text-red-800">
                Sign up now
              </a>
            </h2>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
