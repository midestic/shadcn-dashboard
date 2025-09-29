import { AppLineChart } from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

export default function SingleUserpage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Midestic</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    className="rounded-full bg-blue-500/300 border-1 border-blue-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
                    size={36}
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-bold mb-2">User Information</h1>

            <Sheet>
              <SheetTrigger>
                <Button>Edit User</Button>
              </SheetTrigger>

              <EditUser />
            </Sheet>

            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={33} />
              </div>
              <div className="flex items-center gap-2">
                <span className="">
                  <span>Username</span>
                  <span>john.doe</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="">
                  <span>Email</span>
                  <span>john.doe@gmail.com</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="">
                  <span>Phone</span>
                  <span>+144 858 94894</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="">
                  <span>Location</span>
                  <span>New York, NY</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="">
                  <span>Role</span>
                  <span>
                    {" "}
                    <Badge>Admin</Badge>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transaction" />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatara.githubusercontent.com/u/1486366" />
                <AvatarFallback>UB</AvatarFallback>
              </Avatar>

              <h1 className="text-lg font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Bala blu army down-payment tia-tia army 50million line blu
              different bala super army bala army different bulaba tia-tia
              down-payment super
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
