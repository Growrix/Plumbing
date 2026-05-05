import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, PhoneCall, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { SEOHead } from "@/components/shared/SEOHead";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    setSubmitted(true);
  }

  return (
    <div className="bg-background min-h-screen pb-24">
      <SEOHead title="Contact Us" />
      <PageHero 
        heading="Get in Touch"
        subheading="Have a question or need a quote? We're here to help."
      />

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 bg-card rounded-3xl shadow-card border border-border p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-16" data-testid="contact-success">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Message Sent!</h2>
                <p className="text-lg text-muted-foreground mb-8">Thanks for reaching out. A member of our team will get back to you shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Send Another Message</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <h2 className="text-2xl font-display font-bold mb-6">Send us a message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel>Name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Phone *</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email *</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />

                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General enquiry</SelectItem>
                          <SelectItem value="booking">Booking follow-up</SelectItem>
                          <SelectItem value="quote">Request a quote</SelectItem>
                          <SelectItem value="complaint">Feedback / Complaint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Message *</FormLabel><FormControl><Textarea className="min-h-[150px]" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />

                  <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full px-10" data-testid="button-submit-contact">
                    Send Message
                  </Button>
                </form>
              </Form>
            )}
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-display font-bold mb-8">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0"><PhoneCall size={20} className="text-accent" /></div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Phone</p>
                    <a href={siteConfig.brand.phoneHref} className="text-lg font-bold hover:text-accent transition-colors">{siteConfig.brand.phoneDisplay}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0"><Mail size={20} className="text-accent" /></div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <a href={`mailto:${siteConfig.brand.email}`} className="text-lg font-bold hover:text-accent transition-colors break-all">{siteConfig.brand.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0"><MapPin size={20} className="text-accent" /></div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Address</p>
                    <p className="font-medium">{siteConfig.brand.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="font-display font-bold text-xl mb-6">Operating Hours</h3>
              <div className="space-y-3 text-sm">
                <div className={`flex justify-between pb-3 border-b border-border ${today >= 1 && today <= 5 ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                  <span>Mon - Fri</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className={`flex justify-between pb-3 border-b border-border ${today === 0 || today === 6 ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                  <span>Sat - Sun</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-accent font-bold pt-1">
                  <span>Emergency</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-2xl mb-6">Service Areas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.emergency.coverageAreas.map(area => (
              <span key={area} className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">
                {area}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-sm">Don't see your suburb? Contact us, we serve the entire Greater Sydney area.</p>
        </div>
      </div>
    </div>
  );
}