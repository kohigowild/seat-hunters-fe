import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-screen  flex justify-center items-center">
            <div className="h-auto">
                <div className="w-[200px] h-[200px] relative">
                    <Image src="/logo.png" alt="Seat Hunters" fill />
                </div>
                <div>지하철 자리 쟁탈전 필승 전략!</div>
                <div className="flex">
                    <div className="text-primary">SEAT</div>
                    <div>HUNTERS</div>
                </div>
                <button>Connect wallet</button>
            </div>
        </div>
    );
}
