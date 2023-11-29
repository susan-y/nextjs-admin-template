'use client'

import axios from 'axios'
import {signIn} from 'next-auth/react'
import {useCallback, useState} from 'react'
import {useRouter} from 'next/navigation'
import toast from 'react-hot-toast'

import Input from '@/app/components/Input'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [variant, setVariant] = useState('login')
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant => (currentVariant === 'login' ? 'register' : 'login'))
  }, [])

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const login = useCallback(async () => {
    setIsLoading(true)
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/admin',
        redirect: false
      }).then(({ok, error}) => {
        if (ok) {
          router.push('/admin')
        } else {
          toast.error(error)
        }
      })
    } catch (error) {
      toast.error(`error: ${error}`)
    }
    setIsLoading(false)
  }, [email, password, isLoading])

  const register = useCallback(async () => {
    setIsLoading(true)
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      })

      login()
    } catch (error) {
      toast.error(`error: ${error}`)
    }
    setIsLoading(false)
  }, [email, name, password, login])

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen bg-slate-200">
        <nav className="px-12 py-5">
          <div className="text-2xl font-semibold">Admin Console</div>
        </nav>
        <div className="flex items-center justify-center pt-40">
          <div className="bg-white drop-shadow-md"></div>
          <div className="self-center w-full px-16 py-16 mt-2 bg-white rounded-md drop-shadow-md lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold">
              {variant === 'login' ? 'Login' : 'New Account'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  label="Name"
                  onChange={(event: any) => {
                    setName(event.target.value)
                  }}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(event: any) => {
                  setEmail(event.target.value)
                }}
                id="email"
                type="email"
                value={email}
              />

              <Input
                label="Password"
                onKeyDown={handleKeyDown}
                onChange={(event: any) => {
                  setPassword(event.target.value)
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              className={`
                w-full 
                py-3 mt-10 
                text-white 
                transition 
                bg-blue-600 rounded-md
                disabled:bg-slate-300
                hover:bg-blue-700`}
              disabled={isLoading}
              onClick={variant === 'login' ? login : register}>
              {variant === 'login'
                ? isLoading
                  ? 'loading...'
                  : 'Login'
                : isLoading
                ? 'ready...'
                : 'Register'}
            </button>
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
              <p className="mt-12 text-neutral-500">
                {variant === 'login' ? 'New to here? ' : 'Already have an account ->'}
                <span
                  onClick={toggleVariant}
                  className="ml-1 text-blue-400 cursor-pointer hover:underline">
                  {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
