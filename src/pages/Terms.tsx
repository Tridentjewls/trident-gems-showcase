import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Terms = () => {
  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 relative">
        <section className="relative overflow-hidden min-h-screen">
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-sm tracking-wider mb-4">
                  Terms and Conditions
                </h1>
                <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
              </div>

              <div className="bg-background rounded-xl p-8 shadow-lg border border-border space-y-8">
                {[
                  { title: "1. Introduction", content: "Welcome to Trident Jewellery Design and Rendering. By accessing our services, you agree to be bound by these Terms and Conditions. Please read them carefully before engaging our design services." },
                  { title: "2. Services", content: "We provide CAD jewelry design, 3D rendering, file selling, and related design services. All work is custom-made based on client specifications and reference materials provided." },
                ].map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>50% advance payment is required before starting any project</li>
                    <li>Remaining 50% is due upon delivery of final files</li>
                    <li>All payments are non-refundable once work has begun</li>
                    <li>Payment can be made via bank transfer, PayPal, or other agreed methods</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Revisions</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Each project includes up to 2 free revisions</li>
                    <li>Additional revisions will be charged at an hourly rate</li>
                    <li>Major design changes after approval may incur additional costs</li>
                  </ul>
                </div>

                {[
                  { title: "5. File Delivery", content: "Final files are delivered in industry-standard formats (STL, 3DM, STEP) as agreed upon. We guarantee 100% production-ready files. If any issue arises due to our error, we will fix it free of charge or provide a full refund." },
                  { title: "6. Intellectual Property", content: "Upon full payment, all design rights are transferred to the client. We reserve the right to use completed designs for portfolio purposes unless otherwise agreed in writing." },
                  { title: "7. Confidentiality", content: "All client information, designs, and communications are kept strictly confidential. We do not share any client data with third parties without explicit consent." },
                ].map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Cancellation Policy</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Cancellation before work begins: Full refund minus processing fees</li>
                    <li>Cancellation after work begins: No refund on advance payment</li>
                    <li>Cancellation must be communicated in writing</li>
                  </ul>
                </div>

                {[
                  { title: "9. Liability", content: "Trident Jewellery Design is not liable for any production defects, manufacturing errors, or issues arising from third-party production of our designs. Our responsibility is limited to providing accurate, production-ready digital files." },
                  { title: "10. Contact", content: "For any questions regarding these terms, please contact us at contact@tridentjewellery.com or +91 878-0532068." },
                ].map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm">Last updated: January 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Terms;
