"use client";

import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

export default function TodoList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">To-do List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>{" "}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />

              <label htmlFor="item1">
                {" "}
                Bala blu 50million agbado down-payment different transmission
                blu generated youths{" "}
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
