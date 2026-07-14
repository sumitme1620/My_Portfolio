"use client";
import { useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import { btnPrimary } from "@/lib/ui";

const ALERTS = {
  sending: {
    msg: "Sending...",
    style:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200",
    icon: "spinner",
  },
  success: {
    msg: "Message sent successfully!",
    style:
      "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
    icon: "check",
  },
  error: {
    msg: "Submission failed. Please try again.",
    style: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
    icon: "cross",
  },
};

const inputClasses =
  "w-full p-3 rounded-md outline-none border-[0.5px] border-gray-400 bg-white dark:bg-darkHover/30 dark:border-white/90";

const Contact = () => {
  const [result, setResult] = useState("");
  const isSending = result === "sending";

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("sending");

    const formData = new FormData(e.target);
    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
      company: (formData.get("company") || "").toString().trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.success) {
        setResult("success");
        e.target.reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    }

    setTimeout(() => setResult(""), 4000);
  };

  const alert = ALERTS[result];

  return (
    <section
      id="contact"
      className='w-full px-[12%] py-16 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <SectionHeading
        eyebrow="Connect with me"
        title="Get in touch"
        intro="I'd love to hear from you. Have a question, an opportunity, or just want to say hi? Drop me a message below."
      />

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 max-w-2xl"
      >
        {/* Honeypot — hidden from users, catches bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className={inputClasses}
            />
          </div>
        </div>

        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className={`${inputClasses} mb-6`}
        />

        <div className="flex justify-center">
          <button type="submit" disabled={isSending} className={btnPrimary}>
            {isSending ? "Sending..." : "Submit now"}
            <svg
              className="w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {alert && (
          <div
            role="status"
            aria-live="polite"
            className={`mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium shadow-sm ${alert.style}`}
          >
            {alert.icon === "spinner" && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}
            {alert.icon === "check" && (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {alert.icon === "cross" && (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <span>{alert.msg}</span>
          </div>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
