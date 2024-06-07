import Image from "next/image";

export default function Home() {
  return (
  <>
    <div>Next.js 배포 테스트 - css</div>
    <div className="mt-3.5">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  </>
  );
}
