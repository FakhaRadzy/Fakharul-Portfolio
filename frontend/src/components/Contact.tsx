import {
  useState,
  type ChangeEventHandler,
  type SubmitEventHandler,
} from "react";
import { profile } from "../data/resume";
import ChapterHeading from "./ChapterHeading";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-1-4 border-chapter-contact bg-ink/5 rounded-r-xl px-6 py-8">
        <ChapterHeading
          number="V"
          title="Contact"
          colorClass="text-chapter-contact"
        />

        <div className="grid sm:grid-cols-2 gap-10">
          <div className="space-y-2 text-ink-muted">
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full border border-ink/20 ng-paper rounded-lg px-4 py-2"
            ></input>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full border border-ink/20 bg-paper rounded-lg px-4 py-2"
            ></input>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={4}
              className="w-full border border-ink/20 bg-paper rounded-lg px-4 py-2"
            ></textarea>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-chapter-contact text-paper px-6 py-3 rounded-lg font-medium hover:opacity-90 transistion disable:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-green-700 text-sm">
                Message sent — thanks for reaching out!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-700 text-sm">
                Something went wrong. Please try again
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
