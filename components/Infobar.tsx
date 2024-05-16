const Infobar = () => {
  const infosTitle = ["IP Adress", "Location", "Timezone", "ISP"];
  return (
    <section className="bg-neutral-50 p-8 w-[80%] mx-auto text-black rounded-xl pointer-events-auto">
      <ul className="flex items-center w-full justify-between gap-4 text-start">
        {infosTitle.map((title) => (
          <li key={title} className="flex flex-col p-8">
            <span className="text-md font-normal text-neutral-600">
              {title}
            </span>
            <span className="text-2xl font-bold">
              Content coksdnco ozkdn
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Infobar;