import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          My Portfolio&nbsp;
          <code className="font-mono font-bold">
            app/page.tsx
          </code>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://typescriptbook.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
            <Image
              src="/image/portrait03.png"
              alt="user image//ユーザーの写真を挿入"
              className=" "
              width={2048
            }
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className=" absolute left-0 flex-col justify-start items-start gap-8 inline-flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start flex">
            <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-stone-50 text-2xl font-bold font-['Poppins']">
                HI, I’M HIROSHI
              </div>
            </div>
            <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="w-[490px]">
                <span className="text-stone-50 text-8xl font-bold font-['Poppins'] leading-[96px]">
                  I’M A{" "}
                </span>
                <span className="text-stone-50 text-8xl font-bold font-['Poppins'] leading-[96px]">
                  SIGN
                  <br />
                </span>
                <span className="text-stone-50 text-8xl font-bold font-['Poppins'] leading-[96px]">
                  MAKER
                </span>
              </div>
            </div>
          </div>
          <div className="p-2.5 justify-start items-start gap-2.5 inline-flex">
            <div className="w-[490px] text-stone-50 text-opacity-50 text-[13px] font-normal font-['Poppins']">
              私は遠藤 洋です。
              <br />
              看板職人、デザイナー、プログラマー
              <br />
              として活動しています。
              <br />
              <br />
              美と機能の融合に情熱を注ぎ
              <br />
              クライアントの要望に応えるデザインを
              <br />
              提供します。
              <br />
              <br />
              スキルを活かし
              <br />
              新しいプロジェクトに挑戦し
              <br />
              創造的な解決策を提供できることを楽しみにしています。
              <br />
              お気軽にお問い合わせください。
            </div>
          </div>
        </div>

        <div className="px-2.5">
        <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.pinterest.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div className=" px-4 py-2 rounded-2xl border-2 border-stone-50 justify-start items-start gap-2.5 inline-flex">
            <div className="text-stone-50 text-2xl font-bold font-['Poppins']">
              {" "}
              VIEW MY PRJECTS
            </div>
          </div>
          </a>
        </div>
      </div>

      <div className=" relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={128}
          height={0}
          priority
        />
      </div>
    </main>
  );
}
