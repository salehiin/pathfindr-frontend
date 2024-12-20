import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
// import t3 from "../../../assets/t3.jpg";
import { Link } from "react-router-dom";
import t3 from "../../../assets/t3.jpg";



const Destination = ({image, title, details}) => {

    

    return (
        <div className="max-w-[900px] gap-1 grid grid-cols-4 grid-rows-1 mt-10">
            <Card className="container group relative col-span-12 sm:col-span-4 min-h-[400px] overflow-hidden rounded-2xl">
                <CardHeader className="overlay absolute z-10 top-0 flex-col !items-start justify-end left-0 right-0 bottom-full overflow-hidden bg-[#008CBA] w-full h-0 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full opacity-60 p-0">
                    <p className="text-tiny text-white/60 uppercase font-bold p-3">{title}</p>
                    <h4 className="text-white font-medium text-large p-3">{details}</h4>
                    <Link className="btn bg-black rounded-2xl border border-white m-3 text-white">See All Tours</Link>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover block"
                    src={image || t3}
                />
            </Card>
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
                    src="https://nextui.org/images/card-example-2.jpeg"
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
                    src="https://nextui.org/images/card-example-6.jpeg"
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
            {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={t3}
                    // "https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">Breathing App</p>
                            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                        </div>
                    </div>
                    <Button radius="full" size="sm">Get App</Button>
                </CardFooter>
            </Card> */}
        </div>
    );
};

export default Destination;