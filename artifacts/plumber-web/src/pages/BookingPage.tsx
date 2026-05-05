import { useState, useEffect } from "react";
import { useSearch } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertTriangle, PhoneCall, Clock, ShieldCheck } from "lucide-react";
import { bookingConfig } from "@/config/booking.config";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bookingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  address: z.string().min(5, "Street address is required"),
  suburb: z.string().min(2, "Suburb is required"),
  state: z.string().min(2, "State is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  urgency: z.string().min(1, "Please select urgency"),
  timeWindow: z.string().min(1, "Please select a preferred time"),
  contactMethod: z.string().min(1, "Please select preferred contact method"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const searchString = useSearch();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      suburb: "",
      state: "nsw",
      serviceType: "",
      urgency: "flexible",
      timeWindow: "any",
      contactMethod: "phone",
      notes: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(searchString);
    const service = params.get("service");
    const tier = params.get("tier");
    const plan = params.get("plan");

    if (service) form.setValue("serviceType", service);
    if (plan) form.setValue("serviceType", "maintenance-plan");
    if (tier || plan) form.setValue("urgency", "flexible");
  }, [searchString, form]);

  function onSubmit(data: BookingFormValues) {
    console.log(data);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="bg-background min-h-screen pb-24">
      <SEOHead title="Book a Plumber" />
      <PageHero 
        heading={bookingConfig.page.heading}
        subheading={bookingConfig.page.subheading}
      />

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 bg-card rounded-3xl shadow-card border border-border p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-16" data-testid="booking-success">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">{bookingConfig.page.successMessage}</h2>
                <p className="text-lg text-muted-foreground mb-8">{bookingConfig.page.successSubMessage}</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Book Another Service</Button>
              </div>
            ) : (
              <>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-start gap-4">
                  <AlertTriangle className="text-red-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-900 mb-1">Got an Emergency?</h4>
                    <p className="text-red-800 text-sm mb-2">{bookingConfig.page.emergencyNote}</p>
                    <a href={siteConfig.brand.phoneHref} className="text-red-700 font-bold underline">Call Now</a>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" data-testid="booking-form">
                    
                    <div>
                      <h3 className="text-xl font-display font-bold border-b pb-2 mb-6">1. Service Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>What do you need help with?</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl data-testid="select-serviceType">
                                  <SelectTrigger className="bg-background">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {bookingConfig.serviceOptions.map(opt => (
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>How soon do you need us?</FormLabel>
                              <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                  {bookingConfig.urgencyOptions.map(opt => (
                                    <FormItem key={opt.value} className="flex items-center space-x-3 space-y-0">
                                      <FormControl><RadioGroupItem value={opt.value} /></FormControl>
                                      <FormLabel className="font-normal cursor-pointer">{opt.label}</FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeWindow"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Preferred arrival window</FormLabel>
                              <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                  {bookingConfig.timeWindows.map(opt => (
                                    <FormItem key={opt.value} className="flex items-center space-x-3 space-y-0">
                                      <FormControl><RadioGroupItem value={opt.value} /></FormControl>
                                      <FormLabel className="font-normal cursor-pointer">{opt.label}</FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-display font-bold border-b pb-2 mb-6">2. Your Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                          <FormItem><FormLabel>First Name *</FormLabel><FormControl><Input data-testid="input-firstName" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                          <FormItem><FormLabel>Last Name *</FormLabel><FormControl><Input data-testid="input-lastName" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone Number *</FormLabel><FormControl><Input type="tel" data-testid="input-phone" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="address" render={({ field }) => (
                          <FormItem className="md:col-span-2"><FormLabel>Street Address *</FormLabel><FormControl><Input data-testid="input-address" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="suburb" render={({ field }) => (
                          <FormItem><FormLabel>Suburb *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="state" render={({ field }) => (
                          <FormItem>
                            <FormLabel>State *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger><SelectValue placeholder="State" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {bookingConfig.australianStates.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-display font-bold border-b pb-2 mb-6">3. Additional Info</h3>
                      <div className="grid grid-cols-1 gap-6">
                        <FormField
                          control={form.control}
                          name="contactMethod"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>How should we confirm your booking?</FormLabel>
                              <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                                  {bookingConfig.contactMethods.map(opt => (
                                    <FormItem key={opt.value} className="flex items-center space-x-2 space-y-0">
                                      <FormControl><RadioGroupItem value={opt.value} /></FormControl>
                                      <FormLabel className="font-normal cursor-pointer">{opt.label}</FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField control={form.control} name="notes" render={({ field }) => (
                          <FormItem><FormLabel>Describe the problem (Optional)</FormLabel><FormControl><Textarea className="resize-y min-h-[100px]" placeholder="E.g. Leaking pipe under kitchen sink..." {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto text-lg rounded-full px-10 py-6 font-bold" data-testid="button-submit-booking">
                      Request Booking
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-card">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Us</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <PhoneCall className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Call direct</p>
                    <a href={siteConfig.brand.phoneHref} className="text-xl font-bold hover:text-accent transition-colors">{siteConfig.brand.phoneDisplay}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Hours</p>
                    <p className="font-medium text-sm">{siteConfig.contact.hours.weekdays}</p>
                    <p className="font-medium text-sm">{siteConfig.contact.hours.weekends}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-accent font-bold text-sm uppercase tracking-wider mb-2">24/7 Emergency</p>
                  <p className="text-sm text-white/80">{siteConfig.contact.hours.emergency}</p>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                <h3 className="font-display font-bold text-xl mb-6">What to expect</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-foreground font-bold flex items-center justify-center shrink-0 text-sm">1</div>
                    <div>
                      <p className="font-bold text-sm mb-1">Fast Confirmation</p>
                      <p className="text-xs text-muted-foreground">We reply within 15 minutes to lock in a time.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-foreground font-bold flex items-center justify-center shrink-0 text-sm">2</div>
                    <div>
                      <p className="font-bold text-sm mb-1">On-the-way Alert</p>
                      <p className="text-xs text-muted-foreground">Get a text when your plumber is dispatched.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary text-foreground font-bold flex items-center justify-center shrink-0 text-sm">3</div>
                    <div>
                      <p className="font-bold text-sm mb-1">Upfront Quote</p>
                      <p className="text-xs text-muted-foreground">No work starts until you approve the price.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}