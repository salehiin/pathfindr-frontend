import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import t3 from "../../../assets/t3.jpg";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
import SectionHeader from "../../Shared/Components/SectionHeader/SectionHeader";


const Ideas = () => {
    return (
        <div className="mb-24">
            {/* <p className="font-bold text-black text-3xl capitalize py-10">Trip Ideas to inspire you</p> */}
            <SectionHeader
                heading={"Trip Ideas to inspire you"}
            ></SectionHeader>
            <div className="flex gap-6">
                {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                    <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://nextui.org/images/card-example-4.jpeg"
                />
            </Card> */}
                {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                    <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://nextui.org/images/card-example-3.jpeg"
                />
            </Card> */}
                {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                    <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={"https://nextui.org/images/card-example-2.jpeg"}
                />
            </Card> */}
                {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                    <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={t3}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                        <p className="text-black text-tiny">Available soon.</p>
                        <p className="text-black text-tiny">Get notified.</p>
                    </div>
                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                        Notify Me
                    </Button>
                </CardFooter>
            </Card> */}
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-3xl">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Beyond the City</p>
                        <h4 className="text-black/90 font-medium text-xl">
                            Discover the wonders that lie outside the walls of Da
                            Nang with these exciting tours of surrounding areas</h4>
                    </CardHeader>
                    <Image removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src={t3}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2">
                            {/* <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        /> */}
                            <div className="flex flex-col ">
                                <Link className="btn btn-accent">See All Activities</Link>
                            </div>
                        </div>
                        {/* <Button radius="full" size="sm">Get App</Button> */}
                    </CardFooter>

                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-3xl">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Beyond the City</p>
                        <h4 className="text-black/90 font-medium text-xl">
                            Discover the wonders that lie outside the walls of Da
                            Nang with these exciting tours of surrounding areas</h4>
                    </CardHeader>
                    <Image removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src={t3}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2">
                            {/* <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        /> */}
                            <div className="flex flex-col ">
                                <Link className="btn btn-accent">See All Activities</Link>
                            </div>
                        </div>
                        {/* <Button radius="full" size="sm">Get App</Button> */}
                    </CardFooter>

                </Card>
            </div>
        </div>
    );
};

export default Ideas;