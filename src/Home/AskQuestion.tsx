import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AskQuestion() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="text-left text-4xl text-slate-600 font-bold">
              How does GarbageLite help with waste management?
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-left text-md text-lg:text-xl xl:text-2xl text-slate-800">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="text-left text-4xl text-slate-600 font-bold">
              Can I track my waste collection schedule?
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-left text-md text-lg:text-xl xl:text-2xl text-slate-800">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h2 className="text-left text-4xl text-slate-600 font-bold">
              What types of waste can I recycle with GarbageLite?
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-left text-md text-lg:text-xl xl:text-2xl text-slate-800">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <h2 className="text-left text-4xl text-slate-600 font-bold">
              Is there a mobile app available?
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-left text-md text-lg:text-xl xl:text-2xl text-slate-800">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="text-left text-4xl text-slate-600 font-bold">
              How do I get started with GarbageLite?
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-left text-md text-lg:text-xl xl:text-2xl text-slate-800">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AskQuestion;
