import { signIn } from "next-auth/react";
import Head from "next/head";

export default function CustomLoginPage() {
  return (
    <div className='flex min-h-[calc(100vh-80px)] items-center justify-center bg-background p-4'>
      <Head>
        <title>Login | Essentials.</title>
      </Head>

      <div className='w-full max-w-md bg-card border border-border p-8 md:p-12 rounded-none shadow-sm'>
        <div className='text-center mb-8'>
          <p className='text-4xl font-serif font-bold text-primary tracking-tight mb-3 justify-center flex items-center'>
            Essentials<span className='text-foreground'>.</span>
          </p>
          <h2 className='text-2xl font-sans font-medium text-foreground tracking-tight'>
            Welcome Back
          </h2>
          <p className='mt-2 text-sm text-muted-foreground font-light'>
            Sign in to access your account, wishlist, and orders.
          </p>
        </div>

        <div className='space-y-4'>
          <button
            type='button'
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className='flex w-full items-center justify-center gap-2 rounded-none border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-[#24292F] hover:text-white hover:border-[#24292F] focus:outline-hidden focus:ring-1 focus:ring-primary'
          >
            <svg
              className='h-5 w-5 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g fillRule='evenodd' fill='currentColor'>
                <g transform='translate(-140.000000, -7559.000000)'>
                  <g transform='translate(56.000000, 160.000000)'>
                    <path d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399' />
                  </g>
                </g>
              </g>
            </svg>
            <span>Sign in with GitHub</span>
          </button>

          <button
            type='button'
            onClick={() => signIn("discord", { callbackUrl: "/" })}
            className='flex w-full items-center justify-center gap-2 rounded-none border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2] focus:outline-hidden focus:ring-1 focus:ring-primary'
          >
            <svg
              className='h-5 w-5 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00122C15.4007 2.9956 15.3695 3.00965 15.3534 3.03777C15.1424 3.40697 14.9087 3.88862 14.7451 4.26719C12.9004 3.99545 11.0652 3.99545 9.25832 4.26719C9.09465 3.8802 8.85248 3.40697 8.64057 3.03777C8.62449 3.01059 8.59328 2.99654 8.56205 3.00122C6.84791 3.29172 5.20756 3.80054 3.67693 4.4921C3.66368 4.49772 3.65233 4.5071 3.64479 4.51928C0.533392 9.09311 -0.31895 13.5545 0.0991801 17.9606C0.101072 17.9822 0.11337 18.0028 0.130398 18.0159C2.18321 19.4993 4.17171 20.3998 6.12328 20.9967C6.15451 21.0061 6.18761 20.9949 6.20748 20.9695C6.66913 20.3492 7.08064 19.6952 7.43348 19.0073C7.4543 18.967 7.43442 18.9192 7.39186 18.9033C6.73913 18.6597 6.1176 18.3626 5.51973 18.0253C5.47244 17.9981 5.46865 17.9316 5.51216 17.8997C5.63797 17.8069 5.76382 17.7104 5.88396 17.613C5.90569 17.5952 5.93598 17.5914 5.96153 17.6026C9.88928 19.3672 14.1415 19.3672 18.023 17.6026C18.0485 17.5905 18.0788 17.5942 18.1015 17.612C18.2216 17.7095 18.3475 17.8069 18.4742 17.8997C18.5177 17.9316 18.5149 17.9981 18.4676 18.0253C17.8697 18.3692 17.2482 18.6597 16.5945 18.9024C16.552 18.9183 16.533 18.967 16.5538 19.0073C16.9143 19.6942 17.3258 20.3483 17.7789 20.9686C17.7978 20.9949 17.8319 21.0061 17.8631 20.9967C19.8241 20.3998 21.8126 19.4993 23.8654 18.0159C23.8834 18.0028 23.8948 17.9831 23.8967 17.9616C24.3971 12.8676 23.0585 8.4428 20.3482 4.52021C20.3416 4.5071 20.3303 4.49772 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.2095 5.86313 12.8976C5.86313 11.5857 6.8186 10.5175 8.02002 10.5175C9.23087 10.5175 10.1958 11.5951 10.1769 12.8976C10.1769 14.2095 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.2095 13.8379 12.8976C13.8379 11.5857 14.7933 10.5175 15.9947 10.5175C17.2056 10.5175 18.1705 11.5951 18.1516 12.8976C18.1516 14.2095 17.2056 15.2778 15.9947 15.2778Z' />
            </svg>
            <span>Sign in with Discord</span>
          </button>

          <button
            type='button'
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className='flex w-full items-center justify-center gap-2 rounded-none border border-border bg-card px-4 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] focus:outline-hidden focus:ring-1 focus:ring-primary'
          >
            <svg
              className='h-5 w-5 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.27 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z' />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
