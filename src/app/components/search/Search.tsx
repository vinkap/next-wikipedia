'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

export default function Search() {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string>("");

    const search = (e: FormEvent) => {
      e.preventDefault()
      router.push(`/Results/${searchTerm}`)
    };

    return (
        <form onSubmit={search}>
            Search: 
            <input onChange={e => setSearchTerm(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
  )
}
