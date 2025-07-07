
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a locker with Yatigo?",
      answer: "You can easily book a locker through our mobile app or website. Simply select your preferred location, choose the locker size, select your rental duration, and complete the payment. You'll receive instant confirmation with access codes."
    },
    {
      question: "What security measures are in place?",
      answer: "Yatigo employs bank-grade security including biometric access, CCTV surveillance, end-to-end encryption, real-time monitoring, and insurance coverage for stored items. Your belongings are protected 24/7."
    },
    {
      question: "Can I access my locker anytime?",
      answer: "Yes! Yatigo lockers are available 24/7, 365 days a year. You can access your locker at any time using our mobile app or biometric authentication system."
    },
    {
      question: "What sizes of lockers are available?",
      answer: "We offer various locker sizes from small (mobile phones, wallets) to large (luggage, bags). Our mobile lockers are perfect for electronics, while baggage lockers accommodate larger items."
    },
    {
      question: "How much does it cost to use Yatigo?",
      answer: "Our pricing varies based on locker size and rental duration. We offer flexible hourly, daily, and monthly rates with special discounts for long-term usage. Check our app for current pricing at your preferred location."
    },
    {
      question: "What happens if I forget my access code?",
      answer: "Don't worry! You can retrieve your access through the mobile app using your registered phone number or email. Our 24/7 customer support team is also available to assist you immediately."
    },
    {
      question: "Are my items insured while stored?",
      answer: "Yes, all items stored in Yatigo lockers are covered by our comprehensive insurance policy. We provide coverage up to a specified amount depending on the locker type and rental plan."
    },
    {
      question: "Can I extend my rental period?",
      answer: "Absolutely! You can extend your rental period through our mobile app or by contacting customer support. Extensions can be made even after your original rental period has started."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yatigo Space: Your Questions Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to commonly asked questions about our smart locker services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our customer support team is here to help you 24/7</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Contact Support
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
