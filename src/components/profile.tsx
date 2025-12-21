import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import profileImg from "../assets/profile.jpeg"
import { DottedGlowBackground } from "./ui/dotted-glow-background";

export const Profile = () => {
    const badges = [
        {
            label: "Angular",
            value: "5+ years",
        },
        {
            label: "React",
            value: "5+ years",
        },
        {
            label: "Next.js",
            value: "5+ years",
        },
        {
            label: "Node.js",
            value: "5+ years",
        },
        {
            label: "TypeScript",
            value: "5+ years",
        },
        {
            label: "Jira",
            value: "5+ years",
        },
        {
            label: "HTML5",
            value: "5+ years",
        },
        {
            label: "CSS3",
            value: "5+ years",
        },
        {
            label: "Sass",
            value: "5+ years",
        },
        {
            label: "Tailwind CSS",
            value: "5+ years",
        },
        {
            label: "Git",
            value: "5+ years",
        }
    ];
    return (
        <>
            <div className="min-h-full flex items-start md:items-center justify-center pt-12 pb-8">

                <Card className=" w-full overflow-hidden bg-card/50 backdrop-blur-md">
                    <CardHeader className="flex flex-col-reverse items-center gap-6">
                        <div className="flex flex-col gap-1 text-center">
                            <DottedGlowBackground
                                className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
                                opacity={1}
                                gap={10}
                                radius={1.6}
                                colorLightVar="--color-neutral-500"
                                glowColorLightVar="--color-neutral-600"
                                colorDarkVar="--color-neutral-500"
                                glowColorDarkVar="--color-sky-800"
                                backgroundOpacity={0}
                                speedMin={0.3}
                                speedMax={1.6}
                                speedScale={1}
                            />
                            <CardTitle className="text-3xl md:text-5xl font-bold">Pradyumn Daga</CardTitle>
                            <CardDescription className="text-xl md:text-3xl">Frontend Engineer</CardDescription>
                        </div>
                        <img
                            src={profileImg}
                            alt="Pradyumn Daga"
                            className="w-40 h-56 md:w-48 md:h-60 rounded-xl object-cover border-4 border-muted shadow-xl"
                        />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 mt-4">
                        <div className="prose prose-sm md:prose-lg dark:prose-invert max-w-2xl mx-auto text-center">
                            <p className="text-base md:text-xl leading-relaxed text-muted-foreground">
                                Frontend Engineer with 5+ years of experience building scalable, high-performance web applications.
                                I specialize in Angular and React, with a strong focus on clean architecture, state management, and polished UI experiences.
                                I enjoy building products that feel intuitive, fast, and production-ready.
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-center gap-2">
                        {badges.map((badge) => (
                            <Badge className="p-4 text-lg border-2 border-gray-600 shadow-lg" key={badge.label} variant="outline">
                                {badge.label}
                            </Badge>
                        ))}
                    </CardFooter>
                </Card>
            </div >
        </>
    )
}