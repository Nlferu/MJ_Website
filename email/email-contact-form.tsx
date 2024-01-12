import React from "react"
import { Tailwind } from "@react-email/tailwind"
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function EmailContactForm({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your website</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">Message from contact form</Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
