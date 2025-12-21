import { Profile } from "@/components/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/')({
    component: Profile
})