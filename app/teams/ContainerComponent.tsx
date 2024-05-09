import {
    Dialog,
    
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
 
// import { Button } from "@/components/ui/button"
import CardComponentContainer from "./CardComponentContainer";
const ContainerComponent = () => {

    return (
        <>
            <h1 className="text-white text-[55px] text-center text-transparent bg-clip-text bg-gradient-linear mb-[2px]">We are everywhere</h1>
            <h6 className="text-white text-center ml-2  tracking-wider [word-spacing:5px]">&lt;p&gt; From web to app, AI to ML, Blockchain to DevOps &lt;&#47;p&gt;</h6>
            <Dialog>
                <DialogTrigger></DialogTrigger>
                <div className="p-4 mx-auto rounded-3xl bg-[#1A1A1A]  mt-[5vh] h-[54vh] max-w-[66%]" >
                    <h1 className="text-white text-center p-4 text-5xl">Office bearers</h1>
                    <div className="flex items-center justify-start space-x-7 overflow-hidden rounded-xl p-3">{/* /here is card holder div */}
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />

                    </div>

                </div>
            </Dialog>

            {/* Developers part here */}




            <Dialog>
                <DialogTrigger asChild>
                    <div className="p-4 mx-auto rounded-md bg-[#1A1A1A]  mt-[5vh] h-[52vh] max-w-[66%]" >
                        <h1 className="text-white text-center py-4 pr-2 pl-4 text-5xl">Developers</h1>
                        <div className="flex items-center space-x-7 overflow-hidden rounded-xl p-3">{/* /here is card holder div */}
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                        </div>

                    </div>
                </DialogTrigger>
                
                <DialogContent className="bg-[#1A1A1A] border-none mt-[5px] h-[90vh] w-[80vw]">

                    <div className="rounded-3xl p-3 w-[100%]" >
                        <h1 className="text-white text-center p-4 text-5xl mb-10">Developers testing here</h1>
                        
                        
                        
                        <div className="sm:space-y-3 my-10 flex items-center justify-center space-x-3 flex-wrap overflow-y-scroll rounded-xl h-[700px] px-1 w-[100%] ">{/* /here is card holder div */}
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />
                            <CardComponentContainer />


                        </div>

                    </div>


                </DialogContent>
            </Dialog>
            {/* down here testing still */}
            <Dialog>
                <DialogTrigger></DialogTrigger>
                <div className="p-4 mx-auto rounded-3xl bg-[#1A1A1A]  mt-[5vh] h-[54vh] max-w-[66%]" >
                    <h1 className="text-white text-center p-4 text-5xl">Office bearers</h1>
                    <div className="flex items-center justify-start space-x-7 overflow-hidden rounded-xl p-3">{/* /here is card holder div */}
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />

                    </div>

                </div>
            </Dialog>
            <Dialog>
                <DialogTrigger></DialogTrigger>
                <div className="p-4 mx-auto rounded-3xl bg-[#1A1A1A]  mt-[5vh] h-[54vh] max-w-[66%]" >
                    <h1 className="text-white text-center p-4 text-5xl">Office bearers</h1>
                    <div className="flex items-center justify-start space-x-7 overflow-hidden rounded-xl p-3">{/* /here is card holder div */}
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />

                    </div>

                </div>
            </Dialog>
            <Dialog>
                <DialogTrigger></DialogTrigger>
                <div className="p-4 mx-auto rounded-3xl bg-[#1A1A1A]  mt-[5vh] h-[54vh] max-w-[66%]" >
                    <h1 className="text-white text-center p-4 text-5xl">Office bearers</h1>
                    <div className="flex items-center justify-start space-x-7 overflow-hidden rounded-xl p-3">{/* /here is card holder div */}
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />
                        <CardComponentContainer />

                    </div>

                </div>
            </Dialog>



        </>
    )
}
export default ContainerComponent;