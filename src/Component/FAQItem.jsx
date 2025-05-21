import React, { useState } from "react";

const FAQItem = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I choose the right furniture for my home?",
      answer:
        "Start by measuring your space and knowing what you need. Think about the style you like, the color of your walls, and how much space you want to leave for walking. Sajilo Mart also gives tips and filters to help you choose the right product easily.",
    },
    {
      question: "How does delivery work at Sajilo Mart?",
      answer:
        "Once you place your order, we prepare it and send it to your address. For most furniture, we provide white-glove delivery — that means we bring it to your room, assemble it, and place it where you want. Delivery time usually takes 2 to 5 days depending on your location.",
    },
    {
      question: "Can I return the furniture if I don’t like it?",
      answer:
        "Yes, you can return items within 7 days after delivery, as long as they are in good condition and not used. Just keep the packaging and bill. We will arrange the pickup and help you with a refund or exchange.",
    },
    {
      question: "What materials are used in your furniture?",
      answer:
        "Our furniture is made from high-quality materials like solid wood, metal, engineered wood (MDF/ply), and durable fabrics. Each product page gives you full details, so you know what you’re buying before ordering.",
    },
    {
      question: "Do you offer customer support if I need help?",
      answer:
        "Yes, we have a friendly support team available from 9 AM to 8 PM every day. You can contact us by phone, email, or live chat. We’re here to help with orders, deliveries, returns, or any questions you have.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold font-heading text-center mb-8">
        Got Questions? We've Got Answers!
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`rounded-xl mb-4  font-body transition-all duration-300 ${
            openIndex === index
              ? "bg-teal-800 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <div
            className="flex justify-between items-center px-6 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <p className="text-lg font-medium">{faq.question}</p>
            <button className="text-xl font-bold">
              {openIndex === index ? "×" : "→"}
            </button>
          </div>
          {openIndex === index && (
            <div className="px-6 pb-4 text-sm leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQItem;
