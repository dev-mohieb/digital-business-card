import pfp from "../assets/mohieb-pfp.png";

export default function Header() {
  return (
    <header className="flex flex-col w-full">
      <img
        src={pfp}
        alt="mohieb-logo"
        width={320}
        height={192}
        className="aspect-[5/3] bg-gray-900 object-cover w-full"
      />
      <section className="flex flex-col items-center gap-4 bg-gray-100 py-5">
        <article className="w-[80%]">
          <h1 className="text-2xl font-bold">Mohieb Al-Hesan</h1>
          <h3 className="text-sm text-[#F47D27]">Frontend Developer</h3>
          <a
            className="text-xs text-[#4A4E74]"
            href="https://mohieb-portfolio.netlify.app"
            target="_blank">
            mohieb-portfolio.netlify.app
          </a>
        </article>
        <article className="flex w-[80%] justify-between gap-4 text-center font-medium">
          <a
            href="mailto:dev.mohieb@gmail.com"
            className="w-28 rounded-md bg-gray-50 pb-2 pt-[10px] text-[#374151] shadow-sm drop-shadow-md transition-all hover:scale-105 hover:bg-gray-300">
            <i class="fa-solid fa-envelope mr-2"></i>
            Email
          </a>
          <a
            href="https://linkedin.com/in/mohieb-frontend-developer"
            target="_blank"
            className="w-28 rounded-md bg-blue-500 py-2 text-white shadow-sm drop-shadow-md transition-all hover:scale-105 hover:bg-blue-600">
            <i class="fa-brands fa-linkedin mr-2 text-lg"></i>
            LinkedIn
          </a>
        </article>
      </section>
    </header>
  );
}
