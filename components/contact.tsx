"use client"

import React, { useState, ChangeEvent } from "react"
import toast from "react-hot-toast"
import SubmitButton from "./submit-button"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail"
import { motion } from "framer-motion"

export default function Contact() {
    const [formData, setFormData] = useState({ senderEmail: "", message: "" })
    const { ref } = useSectionInView("Contact", 0.3)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const resetForm = () => {
        setFormData({ senderEmail: "", message: "" })
    }

    return (
        <motion.section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" ref={ref} id="contact">
            <SectionHeading>Contact Me</SectionHeading>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                <p className="text-stone-900">
                    Please contact me directly at{" "}
                    <a className="underline" href="mailto:mailito@interia.pl">
                        mailito@interia.pl
                    </a>{" "}
                    or through this form.
                </p>

                <form
                    className="flex flex-col mt-10 text-black"
                    action={async (formData) => {
                        const { data, error } = await sendEmail(formData)

                        if (error) {
                            toast.error(error, {
                                style: {
                                    border: "1px solid #713200",
                                    background: "rgba(37, 32, 35, 0.4)",
                                    padding: "15px",
                                    color: "rgba(203, 207, 204, 1)",
                                },
                                iconTheme: {
                                    primary: "#713200",
                                    secondary: "black",
                                },
                            })
                            /** @dev Using retrun to stop function after error */
                            return
                        }

                        toast.success("Email sent successfully!", {
                            style: {
                                border: "1px solid rgba(67, 52, 28, 0.8)",
                                background: "rgba(37, 32, 35, 0.4)",
                                padding: "15px",
                                color: "rgba(203, 207, 204, 1)",
                            },
                            iconTheme: {
                                primary: "rgba(49, 169, 73, 1)",
                                secondary: "black",
                            },
                        })
                        resetForm()
                    }}
                >
                    <div className="flex mb-2">Enter your email:</div>
                    <input
                        className="h-12 px-4 rounded-lg bg-[#E3D5CA] focus:bg-opacity-100 borderBlack borderDevil focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#c2afa1] transition-all duration-75"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={100}
                        value={formData.senderEmail}
                        onChange={handleInputChange}
                    />
                    <div className="flex mt-4">Enter your message below:</div>
                    <textarea
                        className="h-52 p-4 px-3 rounded-lg bg-[#E3D5CA] focus:bg-opacity-100 my-[1rem] borderBlack borderDevil focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#c2afa1] transition-all duration-75"
                        name="message"
                        required
                        maxLength={5000}
                        value={formData.message}
                        onChange={handleInputChange}
                    />

                    <motion.div
                        className="self-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <SubmitButton />
                    </motion.div>
                </form>
            </motion.div>
        </motion.section>
    )
}
