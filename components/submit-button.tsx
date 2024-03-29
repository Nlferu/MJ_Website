import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className="group flex font-semibold items-center self-center justify-center w-[7rem] gap-2 py-[0.7rem] sm:py-[0.9rem]
                    text-black/80 hover:text-black bg-[#E3D5CA]
                    rounded-full focus:scale-110 hover:scale-110 hover:bg-[#E3D5CA] hover:bg-opacity-100
                    active:scale-105 duration-500 hover:translate-y-[-4px] disabled:scale-100 disabled:bg-opacity-50 border border-[#c2afa1] text-base sm:text-lg"
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <div className="h-6 sm:h-7 w-5 animate-spin rounded-full border-b-2 border-[#b89984]"></div>
            ) : (
                <>
                    Send{" "}
                    <FaPaperPlane className="text-sm sm:text-base opacity-80 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    )
}
