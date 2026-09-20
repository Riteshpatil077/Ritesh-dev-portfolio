"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setStatus("error");
      setErrorMessage("Please enter a message (at least 5 characters).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again or email directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. You can also contact me directly via email below.");
    }
  };

  const mailtoLink = `mailto:patilritesh7172@gmail.com?subject=${encodeURIComponent(
    formData.subject || `Portfolio Contact from ${formData.name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          Have a question, job opportunity, or project idea? Send me a message below or reach out directly!
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                >
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for getting in touch. I have received your message and will reply to your email as soon as possible.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-md bg-destructive/15 text-destructive border border-destructive/20 text-sm flex items-start space-x-2"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p>{errorMessage}</p>
                        <a
                          href={mailtoLink}
                          className="inline-block mt-2 text-xs font-semibold underline hover:no-underline"
                        >
                          Send via Email Client Instead →
                        </a>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="min-h-[140px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Direct Contact & Socials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="mailto:patilritesh7172@gmail.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">patilritesh7172@gmail.com</p>
                </div>
              </Link>
              <Link
                href="https://github.com/Riteshpatil077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              >
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium">github.com/Riteshpatil077</p>
                </div>
              </Link>
              <Link
                href="https://linkedin.com/in/ritesh-patil-4197b9297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium">linkedin.com/in/ritesh-patil-4197b9297</p>
                </div>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Location & Availability</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>📍 <strong className="text-foreground">Location:</strong> Maharashtra, India</p>
              <p>💼 <strong className="text-foreground">Status:</strong> Open to Full-Time, Remote & Project Collaborations</p>
              <p>⚡ <strong className="text-foreground">Response Time:</strong> Typically within 24 hours</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}