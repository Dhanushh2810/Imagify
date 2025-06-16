'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Header = () => {
  return (
    <div className="fixed w-full z-50 bg-zinc-900/70 border-b-2 border-zinc-700 backdrop-blur-lg px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <div className="text-xl font-semibold text-white">IMagIFY</div>
      </Link>

      {/* Desktop Auth Buttons */}
      <div className="hidden sm:flex gap-3 items-center">
        <SignedOut>
          <SignInButton>
            <Button className="bg-zinc-800 border-2 border-white px-4 py-2 rounded text-white hover:bg-zinc-700 transition">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-zinc-800 border-2 border-white px-4 py-2 rounded text-white hover:bg-zinc-700 transition">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Auth Buttons */}
      <div className="sm:hidden">
        <SignedOut>
          <SignInButton>
            <Button className="bg-cyan-500 px-3 py-1 text-sm text-white">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
