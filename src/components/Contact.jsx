import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // For Netlify Forms - they automatically handle the form submission
      // when deployed on Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString()
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Fallback: Open default email client
      const mailtoLink = `mailto:kumarrohit67476@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
      
      setStatus("FALLBACK");
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#F5E6CC]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6CC] via-[#FDF5E6] to-[#F5E6CC] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-6 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-xl text-[#666666] text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's discuss your project and bring your ideas to life!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Let's Connect</h3>
              <p className="text-lg text-[#666666] mb-8">
                I'm always interested in hearing about new opportunities and 
                collaborating on exciting projects. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FEE2E2] rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#DC2626] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Location</h4>
                  <p className="text-[#666666]">India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FEE2E2] rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#DC2626] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <a 
                    href="mailto:kumarrohit67476@gmail.com" 
                    className="text-[#666666] hover:text-[#DC2626] transition-colors"
                  >
                    kumarrohit67476@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-[#F5E6CC] hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FEE2E2] rounded-full flex items-center justify-center">
                  <FaPhone className="text-[#DC2626] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Availability</h4>
                  <p className="text-[#666666]">Open for freelance work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-black mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/rohit-kumar-783127334"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg border border-[#F5E6CC] flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/Rohit03022006"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg border border-[#F5E6CC] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://instagram.com/_rohit_xten"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg border border-[#F5E6CC] flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-2xl border border-[#F5E6CC]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {status === "SUCCESS" ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  Message Sent Successfully!
                </h3>
                <p className="text-[#666666] text-lg">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-black mb-3 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all ${
                        errors.name ? "border-red-500" : "border-[#F5E6CC] hover:border-[#DC2626]"
                      }`}
                      placeholder="Your full name"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <FaExclamationTriangle className="mr-1" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-black mb-3 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all ${
                        errors.email ? "border-red-500" : "border-[#F5E6CC] hover:border-[#DC2626]"
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <FaExclamationTriangle className="mr-1" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-black mb-3 font-semibold">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all ${
                      errors.subject ? "border-red-500" : "border-[#F5E6CC] hover:border-[#DC2626]"
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <FaExclamationTriangle className="mr-1" /> {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-black mb-3 font-semibold">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-[#F5E6CC] hover:border-[#DC2626]"
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <FaExclamationTriangle className="mr-1" /> {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:from-[#B91C1C] hover:to-[#991B1B]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-3" /> 
                      Send Message
                    </>
                  )}
                </motion.button>

                {status === "ERROR" && (
                  <motion.p 
                    className="text-red-500 mt-6 p-4 bg-red-50 rounded-xl flex items-center border border-red-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FaExclamationTriangle className="mr-3 flex-shrink-0" /> 
                    Oops! There was an error. Please try again or email me directly.
                  </motion.p>
                )}

                {status === "FALLBACK" && (
                  <motion.p 
                    className="text-blue-600 mt-6 p-4 bg-blue-50 rounded-xl flex items-center border border-blue-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FaExclamationTriangle className="mr-3 flex-shrink-0" /> 
                    Opening your email client... Please send the pre-filled message.
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;