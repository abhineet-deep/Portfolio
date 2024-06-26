"use server";
import { Resend } from "resend";
export async function sendEmail(formData: FormData) {
  "use server";

  const resend = new Resend(process.env.RESEND_API_KEY);

  const subject = formData.get("subject");
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (subject && message && senderEmail) {
    try {
      console.log("yes");
      
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "abhineetdeep002@gmail.com",
        subject: subject as string,
        reply_to: senderEmail as string,
        html: message as string,
      });
      if (error) {
        console.log(error);
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
