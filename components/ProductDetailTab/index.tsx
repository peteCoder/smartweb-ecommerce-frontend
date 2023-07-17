"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Example() {
  const data = [
    {
      label: "Specification",
      value: "specification",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Warrantee Info",
      value: "warrantee",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Shipping Info",
      value: "shipping info",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Seller Profile",
      value: "seller profile",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader className="flex-wrap md:flex-nowrap">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-[14px] md:text-[16px]">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            
            className="text-[14px] md:text-[16px] px-0 py-2 md:py-4 text-left md:px-4"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
