import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { Plus } from "lucide-react"; // Example icons

const CustomAccordion = () => {
  return (
    <div id="faq" className="bg-[#FFFFE1] py-12">
      <h2 className="text-4xl py-8 font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-[800px] mx-auto bg-[#ECECEC]">
        <Accordion
          type="single"
          collapsible
          className="border border-gray-300 rounded-md shadow-sm"
        >
          {/* Accordion Item 2 */}
          <AccordionItem value="item-1" className="border-b last:border-b-0">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left w-full text-gray-700 font-medium hover:bg-gray-100">
              <h2 className="text-center text-2xl text-slate-600 font-bold">
                How does GarbageLite help with waste management?
              </h2>
              <Plus className="w-4 h-4 transition-transform duration-300 accordion-trigger-icon" />
            </AccordionTrigger>
            <AccordionContent className="p-4 text-gray-600 bg-gray-50">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </AccordionContent>
          </AccordionItem>
          {/* Accordion Item 2 */}
          <AccordionItem value="item-2" className="border-b last:border-b-0">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left w-full text-gray-700 font-medium hover:bg-gray-100">
              <h2 className="text-center text-2xl text-slate-600 font-bold">
                Can I track my waste collection schedule?
              </h2>
              <Plus className="w-4 h-4 transition-transform duration-300 accordion-trigger-icon" />
            </AccordionTrigger>
            <AccordionContent className="p-4 text-gray-600 bg-gray-50">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b last:border-b-0">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left w-full text-gray-700 font-medium hover:bg-gray-100">
              <h2 className="text-center text-2xl text-slate-600 font-bold">
                What types of waste can I recycle with GarbageLite?
              </h2>
              <Plus className="w-4 h-4 transition-transform duration-300 accordion-trigger-icon" />
            </AccordionTrigger>
            <AccordionContent className="p-4 text-gray-600 bg-gray-50">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b last:border-b-0">
            <AccordionTrigger className="flex justify-between items-center p-4 text-left w-full text-gray-700 font-medium hover:bg-gray-100">
              <h2 className="text-center text-2xl text-slate-600 font-bold">
                Is there a mobile app available?
              </h2>
              <Plus className="w-4 h-4 transition-transform duration-300 accordion-trigger-icon" />
            </AccordionTrigger>
            <AccordionContent className="p-4 text-gray-600 bg-gray-50">
              GarbageLite provides a seamless platform to schedule waste
              collection, track recycling activities, and access eco-friendly
              resources. We connect users with reliable waste management
              services, reducing the hassle of traditional methods.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CustomAccordion;
