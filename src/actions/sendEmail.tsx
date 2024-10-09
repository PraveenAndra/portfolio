"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";


const resend = new Resend(process.env.RESEND_API_KEY);

const renderContactFormEmail = (message: string, senderEmail: string) => {
    return `
        <div>
            <h1>New Contact Form Submission</h1>
            <p><strong>From:</strong> ${senderEmail}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
    `;
};
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        // const emailHtml = <ContactFormEmail message={message} senderEmail={senderEmail} />;
        const emailHtml = renderContactFormEmail(message,senderEmail);
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "praveenandra0505@gmail.com",
            subject: "Message from contact form",
            html: emailHtml,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }


    return {
        data,
    };
};