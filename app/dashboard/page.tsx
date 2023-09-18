'use client'
import { useState } from "react"
import { CheckCar, UnCheckCar } from "@/components"

export default function Dashboard () {
    const [carCheck, setCarCheck] = useState(false)

    return (
        <>
        {
            !carCheck ? <CheckCar /> : <UnCheckCar />
        }
        </>
    )
}