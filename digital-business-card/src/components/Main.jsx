export default function Main() {
  return (
    <main className="flex w-full flex-col items-center bg-gray-100 pb-5 pt-1">
      <section className="w-[80%] space-y-4">
        <article>
          <h2 className="font-bold text-[#2B283A]">About</h2>
          <p className="text-xs leading-[150%] text-[#4A4E74]">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </article>
        <article>
          <h2 className="font-bold text-[#2B283A]">Interests</h2>
          <p className="text-xs leading-[150%] text-[#4A4E74]">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </article>
      </section>
    </main>
  );
}
