import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is CAD jewelry design?",
      answer: "CAD (Computer-Aided Design) jewelry design uses specialized software to create precise 3D models of jewelry pieces. This allows for detailed visualization, accurate measurements, and production-ready files for manufacturing through 3D printing or traditional casting methods."
    },
    {
      question: "How long does it take to complete a design?",
      answer: "Turnaround time depends on the complexity of the design. Simple designs typically take 2-3 days, while complex pieces may take 5-7 days. Rush orders are available for an additional fee. We'll provide an estimated timeline after reviewing your requirements."
    },
    {
      question: "What file formats do you deliver?",
      answer: "We deliver files in industry-standard formats including STL (for 3D printing), 3DM (Rhino format), STEP, and IGES. We can also provide high-resolution rendered images in JPEG or PNG format. Let us know your specific requirements."
    },
    {
      question: "Can you work from my sketch or reference image?",
      answer: "Absolutely! We work from hand-drawn sketches, reference photos, or detailed descriptions. The more detail you provide, the more accurate we can make your design. We'll also ask clarifying questions to ensure we capture your vision perfectly."
    },
    {
      question: "How many revisions are included?",
      answer: "Each project includes 2 free revisions. We want to ensure you're completely satisfied with the final design. Additional revisions beyond the initial two are available at an hourly rate, which we'll communicate upfront."
    },
    {
      question: "What is your payment structure?",
      answer: "We require 50% advance payment before starting work, with the remaining 50% due upon delivery of final files. We accept payments via bank transfer, PayPal, and other methods. Full payment details are provided upon project confirmation."
    },
    {
      question: "Do you offer confidentiality for my designs?",
      answer: "Yes, all client designs and communications are kept strictly confidential. We sign NDAs upon request and never share your design details with third parties. Your intellectual property is protected."
    },
    {
      question: "Can you design for different metals and stone settings?",
      answer: "Yes, our CAD designs can accommodate any metal type (gold, silver, platinum) and various stone settings (prong, bezel, pavé, channel). We calculate stone sizes and metal weights accurately for production."
    },
    {
      question: "What is your 100% file guarantee?",
      answer: "We guarantee our CAD/STL files are 100% production-ready. If there's any issue with the file due to our error, we will either fix it free of charge or provide a full refund – no questions asked."
    },
    {
      question: "Do you provide manufacturing services?",
      answer: "Yes, we offer end-to-end services including design, prototyping, and manufacturing. We can produce your jewelry through trusted manufacturing partners or provide files for your own production."
    },
    {
      question: "How do I get started with a project?",
      answer: "Simply contact us via WhatsApp, email, or our contact form. Share your design idea, reference images, and requirements. We'll discuss your project, provide a quote, and begin once the advance payment is confirmed."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! We serve clients from over 15 countries worldwide. Time zones are not an issue – we communicate regularly via email and messaging platforms and deliver files digitally."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/bg-trident.mp4" type="video/mp4" />
      </video>
      
      <Header />
      
      <main className="flex-1 relative">
        <section className="relative overflow-hidden min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-background drop-shadow-2xl tracking-wider mb-4">
                  Frequently Asked Questions
                </h1>
                <div className="w-32 h-1 bg-background/80 mx-auto rounded-full"></div>
                <p className="text-background/90 mt-6 max-w-2xl mx-auto text-lg">
                  Find answers to common questions about our jewelry design services.
                </p>
              </div>

              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-luxury border border-border/20">
                <Accordion type="single" collapsible className="w-full space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border/20 rounded-lg px-4 data-[state=open]:bg-primary/5"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-background/95 backdrop-blur-sm rounded-xl p-8 shadow-luxury border border-border/20">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
                  <p className="text-foreground/80 mb-6">
                    Can't find the answer you're looking for? Feel free to reach out to us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:contact@tridentjewellery.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Email Us
                    </a>
                    <a 
                      href="tel:+918780532068"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-foreground rounded-lg font-medium hover:bg-primary/10 transition-colors"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;
