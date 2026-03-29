import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = ""
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}
          >
            <button
              className="accordion__header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
            >
              <span className="accordion__title">{item.title}</span>
              <ChevronDownIcon
                className="accordion__icon"
                width={20}
                height={20}
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              className="accordion__panel"
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              hidden={!isOpen}
            >
              <div className="accordion__content">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
