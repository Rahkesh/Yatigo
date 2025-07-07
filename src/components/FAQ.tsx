
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a locker with Yatigo?",
      answer: "You can easily book a locker through our mobile app or website. Simply select your preferred location, choose the locker size, and complete the payment. You'll receive instant confirmation with access codes."
    },
    {
      question: "What security measures are in place?",
      answer: "Yatigo employs bank-grade security including biometric access, CCTV surveillance, end-to-end encryption, and comprehensive insurance coverage for stored items."
    },
    {
      question: "Can I access my locker anytime?",
      answer: "Yes! Yatigo lockers are available 24/7, 365 days a year. You can access your locker at any time using our mobile app or biometric authentication."
    },
    {
      question: "What sizes of lockers are available?",
      answer: "We offer various locker sizes from small (mobile phones, wallets) to large (luggage, bags). Our mobile lockers are perfect for electronics, while baggage lockers accommodate larger items."
    },
    {
      question: "How much does it cost to use Yatigo?",
      answer: "Our pricing varies based on locker size and rental duration. We offer flexible hourly, daily, and monthly rates. Check our app for current pricing at your preferred location."
    },
    {
      question: "What if I forget my access code?",
      answer: "You can retrieve your access through the mobile app using your registered phone number or email. Our 24/7 customer support team is also available to assist you."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Yatigo Space: Your Questions Answered
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions about our smart locker services
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
