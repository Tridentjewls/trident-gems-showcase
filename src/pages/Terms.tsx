import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Terms = () => {
  return (
    <PageTransition>
    <div className="min-h-screen flex flex-col bg-white">
      
      <Header />
      
      <main className="flex-1 relative">
        <section className="relative overflow-hidden min-h-screen">
          
          <div className="relative z-10 container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-sm tracking-wider mb-4">
                  Terms and Conditions
                </h1>
                <div className="w-32 h-1 bg-primary/30 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Welcome to Trident Jewellery Design and Rendering. By accessing our services, you agree to be bound by these Terms and Conditions. Please read them carefully before engaging our design services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We provide CAD jewelry design, 3D rendering, file selling, and related design services. All work is custom-made based on client specifications and reference materials provided.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
                  <ul className="list-disc list-inside text-foreground/80 space-y-2">
                    <li>50% advance payment is required before starting any project</li>
                    <li>Remaining 50% is due upon delivery of final files</li>
                    <li>All payments are non-refundable once work has begun</li>
                    <li>Payment can be made via bank transfer, PayPal, or other agreed methods</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Revisions</h2>
                  <ul className="list-disc list-inside text-foreground/80 space-y-2">
                    <li>Each project includes up to 2 free revisions</li>
                    <li>Additional revisions will be charged at an hourly rate</li>
                    <li>Major design changes after approval may incur additional costs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. File Delivery</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Final files are delivered in industry-standard formats (STL, 3DM, STEP) as agreed upon. We guarantee 100% production-ready files. If any issue arises due to our error, we will fix it free of charge or provide a full refund.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Upon full payment, all design rights are transferred to the client. We reserve the right to use completed designs for portfolio purposes unless otherwise agreed in writing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    All client information, designs, and communications are kept strictly confidential. We do not share any client data with third parties without explicit consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Cancellation Policy</h2>
                  <ul className="list-disc list-inside text-foreground/80 space-y-2">
                    <li>Cancellation before work begins: Full refund minus processing fees</li>
                    <li>Cancellation after work begins: No refund on advance payment</li>
                    <li>Cancellation must be communicated in writing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Liability</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Trident Jewellery Design is not liable for any production defects, manufacturing errors, or issues arising from third-party production of our designs. Our responsibility is limited to providing accurate, production-ready digital files.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    For any questions regarding these terms, please contact us at contact@tridentjewellery.com or +91 878-0532068.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/20">
                  <p className="text-foreground/60 text-sm">
                    Last updated: January 2025
                  </p>
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
